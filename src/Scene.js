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
    this.load.image("trap-saw-Trap1", "assets/traps/saw/Trap1.png");

    //new trap ranime et celine
    this.load.image("trapcomputer", "assets/traps/dev/trap1.png");
    this.load.image("trapcss", "assets/traps/dev/css.png");
    this.load.image("traphtml", "assets/traps/dev/html.png");
    this.load.image("trapjs", "assets/traps/dev/js.png");
    this.load.image("trapphp", "assets/traps/dev/php.png");
    this.load.image("trapphp", "assets/traps/dev/wordpress.png");

    // new trap antonin & luca
    this.load.image("trap-mode-closed", "assets/door/closed.png");
    this.load.image("trap-mode-opened", "assets/door/opened.png");
    this.load.image("trap-mode-hitbox", "assets/door/hitbox.png");

    //new trap narjisse et maeva
    // this.load.image("monster", "assets/traps/barnacle.png");
    this.load.image("trap-monster-ground", "assets/traps/bloc.png");
    this.load.image("trap-monster-piques", "assets/traps/pique.png");

    // new trap karim et rayan

    this.load.image("trap-saw-platform", "assets/traps/spike/piege2.png")
    this.load.image("trap-saw-platform2", "assets/traps/spike/piege.png")
  }

  // initialise la scène
  // est appelée qu'une seule fois
  create() {
    this.inputs = this.input.keyboard.createCursorKeys();

    this.add.image(640, 360, "bg");

    const platform = new Platform(this, 200, 600);
    const platform2 = new Platform(this, 800, 550);

    const doorTrap = new DoorTrap(this, 800, 455);
    this.traps.push(doorTrap);

    // const monsterTrap = new MonsterTrap(this, 900, 280);
    // this.traps.push(monsterTrap);

    this.player = new Player(this, 200, 505);

    // const sawTrap = new SawTrap(this, 400, 400);
    // this.traps.push(sawTrap);

    this.physics.add.collider(this.player.sprite, platform.sprite);
    this.physics.add.collider(this.player.sprite, platform2.sprite);

    const openedTrap = new OpenedTrap(this, 800, 455);
    this.traps.push(openedTrap);

    const monsterTrap = new MonsterTrap(this, 900, 210);
    this.traps.push(monsterTrap);

    const computerTrap = new ComputerTrap(this, 600, 410);
    this.traps.push(computerTrap);
    openedTrap.createColliders();
  }

  // appelée très souvent (correspond au fps)
  update(time) {
    this.player.update();

    for (let i = 0; i < this.traps.length; i++) {
      this.traps[i].update(time);
    }
    // if (this.opened && this.player.x === OpenedTrap.x && this.player.y === OpenedTrap.y) {
    //   this.player.x = 500;
    //   this.player.y = 400;
    // }
  }
}
