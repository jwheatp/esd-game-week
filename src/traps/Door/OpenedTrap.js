class OpenedTrap extends Trap {
  constructor(scene, x, y) {
    super();

    this.scene = scene;
    // this.x = 200;
    // this.y = 400;

    this.openedSprite = scene.physics.add.image(x, y, "trap-mode-opened");
    this.openedSprite.setScale(1.5);
    this.openedSprite.body.setAllowGravity(false);

    this.lastOpenTime = null;

    this.openDeltaTime = 5000;
    this.opened = false

    this.openedSprite.alpha = 0

    this.openDeltaTimeMin = 2000; // Délai minimum  (2 secondes)
    this.openDeltaTimeMax = 7000; // Délai maximum  (7 secondes)

    this.scene.physics.add.overlap(this.scene.player.sprite, this.openedSprite, () => {
      if (this.opened) {
        this.scene.player.sprite.setPosition(200, 480)


      }
    });


  }

  toggle() {

    this.opened = !this.opened

    this.openedSprite.alpha = Math.abs(this.openedSprite.alpha - 1)


  }

  update(time) {
    if (!this.lastOpenTime) {
      this.lastOpenTime = time;
    }

    if (time - this.lastOpenTime > this.openDeltaTime) {
      this.lastOpenTime = time;

      this.openDeltaTime = Math.random() * (this.openDeltaTimeMax - this.openDeltaTimeMin) + this.openDeltaTimeMin;

      this.toggle();
      console.log(time)
    }
  }
}
