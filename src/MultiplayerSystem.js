class MultiplayerSystem {
  client = new Colyseus.Client(
    "https://esd-game-week-server-production.up.railway.app"
  );

  scene;

  room;
  playerEntities = {};

  remoteRef;

  constructor(scene) {
    this.scene = scene;
  }

  async init() {
    console.log("Joining room...");

    try {
      const name = window.location.hash.substring(1);

      if (name) {
        this.room = await this.client.joinById(name);
        console.log(this.room);
      } else {
        this.room = await this.client.create("my_room");
      }
    } catch (e) {
      console.error(e);

      this.room = await this.client.create("my_room");
      window.location.hash = this.room.id;
    }

    window.location.hash = this.room.id;
    this.room.state.players.onAdd((player, sessionId) => {
      console.log("A player has joined! Their unique session id is", sessionId);

      const _player = new Player(
        this.scene,
        this.scene.startX,
        this.scene.startY
      );
      _player.sessionId = sessionId;
      _player.freeze();

      if (sessionId === this.room.sessionId) {
        console.log("I am ", sessionId);

        this.scene.player = _player;

        // this.remoteRef = this.scene.add.rectangle(startX, startY, _player.sprite.width, _player.sprite.height);

        // this.remoteRef.setStrokeStyle(1, 0xff0000);
        // this.remoteRef.setScale(0.4)
      }

      // keep a reference of it on `playerEntities`
      this.playerEntities[sessionId] = _player;

      // listening for server updates
      player.onChange(() => {
        // update local position immediately
        if (sessionId === this.room.sessionId) {
          // this.remoteRef.x = player.x
          // this.remoteRef.y = player.y
        } else {
          _player.serverX = player.x;
          _player.serverY = player.y;
          if (player.hasFinished) {
            _player.hasFinished = player.hasFinished;
          }
          if (player.animation) {
            _player.sprite.play(player.animation, true);
          }
        }
      });
    });

    this.room.state.players.onRemove((player, sessionId) => {
      const entity = this.playerEntities[sessionId];
      if (entity) {
        // destroy entity
        entity.destroy();

        // clear local reference
        delete this.playerEntities[sessionId];
      }
    });

    this.room.onMessage("trap-create", (content) => {
      if (content.from === this.scene.player.sessionId) {
        return;
      }

      if (this.scene.traps.find((t) => t.id === content.trapId)) {
        return;
      }

      const lookup = {
        SawTrap: SawTrap,
        ComputerTrap: ComputerTrap,
      };

      const trap = new lookup[content.type](this.scene, content.x, content.y);
      trap.id = content.trapId;
      this.scene.traps.push(trap);
    });

    this.room.onMessage("trap-move", (content) => {
      if (content.from === this.scene.player.sessionId) {
        return;
      }

      const trap = this.scene.traps.find((t) => t.id === content.trapId);
      trap.setX(content.x);
      trap.setY(content.y);
      trap.setCursorX(content.x);
      trap.setCursorY(content.y);
    });

    this.room.onMessage("trap-settle", (content) => {
      if (content.from === this.scene.player.sessionId) {
        return;
      }

      const trap = this.scene.traps.find((t) => t.id === content.trapId);
      trap.isSettled = true;
      trap.startAnimation();
    });
  }

  players() {
    return Object.values(this.playerEntities);
  }

  update() {
    if (!this.room) {
      return;
    }

    if (!this.scene.player) {
      return;
    }

    // send input to the server
    this.room.send(0, this.scene.player.inputPayload);

    for (let sessionId in this.playerEntities) {
      if (sessionId === this.room.sessionId) {
        continue;
      }
      const entity = this.playerEntities[sessionId];
      entity.sprite.x = Phaser.Math.Linear(
        entity.sprite.x,
        entity.serverX,
        0.2
      );
      entity.sprite.y = Phaser.Math.Linear(
        entity.sprite.y,
        entity.serverY,
        0.2
      );
    }
  }
}
