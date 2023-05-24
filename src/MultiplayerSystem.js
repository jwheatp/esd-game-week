class MultiplayerSystem {
  client = new Colyseus.Client("ws://localhost:2567");

  scene

  room;
  playerEntities = {};
  
  remoteRef

  constructor(scene) {
    this.scene = scene
  }

  async init() {
    console.log("Joining room...");

    try {
      this.room = await this.client.joinOrCreate("my_room");
      console.log("Joined successfully!");
    } catch (e) {
      console.error(e);
    }

    this.room.state.players.onAdd((player, sessionId) => {
      console.log("A player has joined! Their unique session id is", sessionId);

      const startX = 200
      const startY = 200

      const _player = new Player(this.scene, startX, startY);

      if (sessionId === this.room.sessionId) {
        console.log('I am ', sessionId)

        this.scene.player = _player

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
          _player.serverX = player.x
          _player.serverY = player.y
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
  }

  update() {

    if (!this.room) {
      return;
    }

    if(!this.scene.player) {
      return
    }

    // send input to the server
    this.room.send(0, this.scene.player.inputPayload);

    for (let sessionId in this.playerEntities) {
      if(sessionId === this.room.sessionId) {
        continue
      }
      const entity = this.playerEntities[sessionId];
      entity.sprite.x = Phaser.Math.Linear(entity.sprite.x, entity.serverX, 0.2);
      entity.sprite.y = Phaser.Math.Linear(entity.sprite.y, entity.serverY, 0.2);
    }
  }
}