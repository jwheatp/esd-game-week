class GameManager {
  nbRounds = 5;

  index = 0;

  delta = 1000;

  round;

  constructor(scene) {
    this.scene = scene;
    this.round = new Round(this.scene, 0);
  }

  run() {
    if (!this.round.started) {
      this.loadLevel();
      this.round.before();
      this.round.run();
      this.round.started = true;
    }

    if (this.round.isDone) {
      this.index++;

      if (this.index == this.nbRounds) {
        console.log("FIN");
        this.isDone = true;
        return;
      }

      this.round = new Round(this.scene, this.index);
    }
    setTimeout(() => this.run(), this.delta);
  }

  loadLevel() {
    this.scene.platformsLevels?.destroy();

    if (this.index === 0) {
      this.scene.background = this.scene.add.image(640, 360, "scene1");
      this.scene.platformsLevels = new PlatformLevels(this.scene);

      // this.hbBlackHole = new hbBlackHole(this, 900, 400);
      this.scene.endPoint = this.scene.physics.add.image(
        1245,
        230,
        "endPlatform"
      );
      this.scene.endPoint.body.setAllowGravity(false);

      this.scene.displayUI();
    } else if (this.index === 1) {
      this.scene.endPoint.destroy();

      this.scene.background = this.scene.add.image(640, 360, "scene2");
      this.scene.platformsLevels = new PlatformLevelsScene2(this.scene);

      this.scene.endPoint = this.scene.physics.add.image(
        400,
        570,
        "hitbox-invisible"
      );
      this.scene.endPoint.body.setAllowGravity(false);
      this.scene.add.image(390, 570, "endPlatform");

      this.scene.displayUI();
    } else if (this.index === 2) {
      this.scene.endPoint.destroy();

      this.scene.background = this.scene.add.image(640, 360, "scene3");
      this.scene.platformsLevels = new PlatformLevelsScene3(this.scene);

      this.endPoint = this.physics.add.image(545, 365, "hitbox-invisible");
      this.add.image(545, 365, "endPlatform");
      this.endPoint.body.setAllowGravity(false);

      this.scene.displayUI();
    } else if (this.index === 3) {
      this.scene.endPoint.destroy();

      this.scene.background = this.scene.add.image(640, 360, "scene4");
      this.scene.platformsLevels = new PlatformLevelsScene4(this.scene);

      this.endPoint = this.physics.add.image(1190, 240, "hitbox-invisible");
      this.add.image(1190, 240, "endPlatform");
      this.endPoint.body.setAllowGravity(false);

      this.scene.displayUI();
    } else if (this.index === 4) {
      this.scene.endPoint.destroy();

      this.scene.background = this.scene.add.image(640, 360, "scene5");
      this.scene.platformsLevels = new PlatformLevelsScene5(this.scene);

      const endPoint = this.physics.add.sprite(1160, 150, "endPlatform");
      endPoint.body.setAllowGravity(false);
      const hitboxInvisible = this.physics.add.sprite(
        1160,
        150,
        "hitbox-invisible"
      );
      hitboxInvisible.body.setAllowGravity(false);

      positions = [
        { x: 1160, y: 150 },
        { x: 1160, y: 550 },
      ];

      const changePosition = () => {
        const randomPosition = Phaser.Utils.Array.GetRandom(positions);

        console.log(randomPosition);
        const { x, y } = randomPosition;

        endPoint.setPosition(x, y);
        hitboxInvisible.setPosition(x, y);
      };

      changePosition();

      // Changer la position toutes les 2 à 8 secondes
      this.time.addEvent({
        delay: Phaser.Math.Between(2000, 8000),
        loop: true,
        callback: changePosition,
      });

      this.scene.displayUI();
    }
  }
}
