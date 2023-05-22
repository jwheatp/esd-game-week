class Scene extends Phaser.Scene {
  inputs;
  player;

  traps = [];

  // on précharge les assets
  preload() {
    this.load.image("bg", "assets/bg.png");

    this.load.image("player", "assets/player-idle.png");
    this.load.image("platform", "assets/platform.png");

    this.load.image("trap-saw-platform", "assets/traps/saw/platform.png");
    this.load.image("trap-saw-disc", "assets/traps/saw/disc.png");

    //new trap ranime et celine
    this.load.image("trapcomputer", "assets/traps/dev/trap1.png");
    this.load.image("trapcss", "assets/traps/dev/css.png");
  }

  // initialise la scène
  // est appelée qu'une seule fois
  create() {
    this.inputs = this.input.keyboard.createCursorKeys();

    this.add.image(640, 360, "bg");

    this.player = new Player(this, 200, 300);

    const platform = new Platform(this, 200, 600);
    const platform2 = new Platform(this, 800, 550);

    this.physics.add.collider(this.player.sprite, platform.sprite);
    this.physics.add.collider(this.player.sprite, platform2.sprite);

    const sawTrap = new SawTrap(this, 400, 400);
    this.traps.push(sawTrap);
  }

  // appelée très souvent (correspond au fps)
  update() {
    this.player.update();

    for (let i = 0; i < this.traps.length; i++) {
      this.traps[i].update();
    }
  }
}
