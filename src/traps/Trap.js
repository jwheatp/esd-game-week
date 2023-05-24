class Trap {
  scene;
  viseur;
  canSetupTrap = false;
  speed = 200;

  x;
  y;

  constructor(scene, x, y) {
    this.scene = scene;
    this.x = x;
    this.y = y;
    if (!scene) {
      return;
    }
  }

  initCursor() {
    this.viseur = this.scene.physics.add.image(this.x, this.y, "viseur-1");
    this.viseur.setScale(0.2);
    this.viseur.body.setAllowGravity(false);
    this.viseur.setImmovable(true);
  }

  // poser le piège
  setup() {
    if (this.canSetupTrap) {
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
        // je mets une vitesse X à 200
        this.setVelocityY(this.speed);
        this.setCursorVelocityY(this.speed);
      } else if (this.scene.inputs.up.isDown) {
        // je mets une vitesse X à 200
        this.setVelocityY(-this.speed);
        this.setCursorVelocityY(-this.speed);
      } else {
        this.setVelocityY(0);
        this.setCursorVelocityY(0);
      }
      if (this.scene.inputs.space.isDown) {
        console.log("poser piège");
        this.canSetupTrap = false;
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
