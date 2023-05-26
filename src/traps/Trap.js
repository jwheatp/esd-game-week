class Trap {
  scene;
  viseur;
  canSetupTrap = false;
  isSettled = false

  speed = 200;

  x;
  y;

  static createRandomTrap(scene, x, y) {
    const traps = [SawTrap, DoorMainTrap]
    const index = Math.floor(Math.random() * traps.length);
    return new traps[index](scene, x, y)
  }

  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    if (!scene) {
      return;
    }
  }

  multiplayerCreateTrap() {
    this.scene.multiplayerSystem.room.send("trap-create", {
      from: this.scene.player.sessionId,
      trapId: this.id,
      type: this.constructor.name,
      x: this.x,
      y: this.y
    })
  }

  static generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
  }

  // Ajouter une cible
  initCursor() {
    this.viseur = this.scene.physics.add.image(this.x, this.y, "viseur-1");
    this.viseur.setVisible(true);
    this.viseur.setScale(0.2);
    this.viseur.body.setAllowGravity(false);
    this.viseur.setImmovable(true);
    this.infoText = this.scene.add.text(
      270,
      50,
      " '←↕→' Pour déplacer, 'space' Pour poser",
      {
        fontSize: "32px",
        color: "black",
        align: "center",
      }
    );
  }

  // Poser un piège
  setup() {
    if (this.canSetupTrap) {
      this.infoText.setVisible(true);
      if (this.scene.inputs.right.isDown) {
        this.setX(this.x + this.speed);
        this.setCursorX(this.x + this.speed);
      } else if (this.scene.inputs.left.isDown) {
        // je mets une vitesse X à 200
        this.setX(this.x - this.speed);
        this.setCursorX(this.x - this.speed)
      }

      if (this.scene.inputs.down.isDown) {
        // je mets une vitesse Y à 200
        this.setY(this.y + this.speed);
        this.setCursorY(this.y + this.speed)
      } else if (this.scene.inputs.up.isDown) {
        // je mets une vitesse Y à 200
        this.setY(this.y - this.speed);
        this.setCursorY(this.y - this.speed)
      }

      if (this.scene.inputs.space.isDown) {
        console.log("poser piège");
        this.infoText.setVisible(false);
        this.viseur.setVisible(false);
        this.canSetupTrap = false;
        this.isSettled = true

        this.scene.multiplayerSystem.room.send("trap-settle", {
          from: this.scene.player.sessionId,
          trapId: this.id
        })

        // this.x = this.sprite.body.x
        // this.y = this.sprite.body.y

        this.startAnimation()
      }

      this.scene.multiplayerSystem.room.send("trap-move", {
        from: this.scene.player.sessionId,
        trapId: this.id,
        x: this.x,
        y: this.y
      })

    }
  }
  setCursorX(x) {
    if (this.canSetupTrap) {
      this.viseur.x = x
    }
  }
  setCursorY(y) {
    if (this.canSetupTrap) {
      this.viseur.y = y
    }
  }

  startAnimation() {

  }

  setX(x) {
    this.x = x
  }

  setY(y) {
    this.y = y
  }
}
