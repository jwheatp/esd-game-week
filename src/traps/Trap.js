class Trap {
  scene;
  viseur;
  canSetupTrap = false;
  isSettled = false

  speed = 200;

  x;
  y;


  static createRandomTrap(scene, x, y) {
    return new SawTrap(scene, x, y)
  }

  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    if (!scene) {
      return;
    }

    this.scene.traps.push(this);
  }

  randomTrap() {
    const index = Math.floor(Math.random() * this.traps.length);
    console.log(this.traps[index]);
    if (this.traps[index]) {
      this.canSetupTrap = true;
      this.traps[index].initCursor();
    }
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
        this.setVelocityX(this.speed);
        this.setCursorVelocityX(this.speed);
      } else if (this.scene.inputs.left.isDown) {
        // je mets une vitesse X à 200
        this.setVelocityX(-this.speed);
        this.setCursorVelocityX(-this.speed);
      } else {
        this.setVelocityX(0);
        this.setCursorVelocityX(0);
      }

      if (this.scene.inputs.down.isDown) {
        // je mets une vitesse Y à 200
        this.setVelocityY(this.speed);
        this.setCursorVelocityY(this.speed);
      } else if (this.scene.inputs.up.isDown) {
        // je mets une vitesse Y à 200
        this.setVelocityY(-this.speed);
        this.setCursorVelocityY(-this.speed);
      } else {
        this.setVelocityY(0);
        this.setCursorVelocityY(0);
      }
      if (this.scene.inputs.space.isDown) {
        console.log("poser piège");
        this.infoText.setVisible(false);
        this.viseur.setVisible(false);
        this.canSetupTrap = false;
        this.isSettled = true
      }
    }
  }
  setCursorVelocityX(speed) {
    if (this.canSetupTrap) {
      this.viseur.body.setVelocityX(speed);
    }
  }
  setCursorVelocityY(speed) {
    if (this.canSetupTrap) {
      this.viseur.body.setVelocityY(speed);
    }
  }
}
