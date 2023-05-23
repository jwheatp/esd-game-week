class OpenedTrap extends Trap {
  constructor(scene, x, y) {
    super();

    this.scene = scene;
    // this.x = 200;
    // this.y = 400;
    this.fadeDuration = 500;

    this.openedSprite = scene.physics.add.image(x, y, "trap-mode-opened");
    this.openedSprite.setScale(1.5);
    this.openedSprite.body.setAllowGravity(false);

    this.lastOpenTime = null;

    this.openDeltaTime = 5000;
    this.opened = false

    this.openedSprite.alpha = 0

    this.openDeltaTimeMin = 2000; // Délai minimum  (2 secondes)
    this.openDeltaTimeMax = 7000; // Délai maximum  (7 secondes)


    this.hitboxSprite = scene.physics.add.image(x, y, "trap-mode-hitbox");
    this.hitboxSprite.setScale(0.4)
    this.hitboxSprite.setAlpha(0)
    this.hitboxSprite.body.setAllowGravity(false)
    this.hitboxSprite.setImmovable(true)




    // const hitboxTrap = new HitboxTrap(this.scene, this, 800, 455)

  }


  // createColliders() {
  //   this.scene.physics.add.overlap(this.scene.player.sprite, this.hitboxSprite, () => {

  //     this.scene.player.sprite.setPosition(200, 480)



  //   });

  // }

  createColliders() {
    this.scene.physics.add.overlap(this.scene.player.sprite, this.hitboxSprite, () => {
      if (this.opened) {
        // Définissez les coordonnées d'arrivée souhaitées lorsque la porte est ouverte
        const targetX = 200;
        const targetY = 480;

        // Téléportez le joueur aux coordonnées d'arrivée
        this.scene.player.sprite.setPosition(targetX, targetY);
      }
    });
  }


  toggle() {
    this.opened = !this.opened;

    const targetAlpha = this.opened ? 1 : 0;

    this.scene.tweens.add({
      targets: this.openedSprite,
      alpha: targetAlpha,
      duration: this.fadeDuration,
      ease: 'Linear',
      onComplete: () => {
      }
    });
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
