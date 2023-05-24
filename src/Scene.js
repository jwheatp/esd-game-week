class Scene extends Phaser.Scene {
  inputs;
  player;

  traps = [];

  hbBlackHole
  playerCollider
  blackHolead

  // on précharge les assets
  preload() {
    this.load.image("bg", "assets/bg.png");

    this.load.image("player", "assets/player-idle.png");
    this.load.image("platform", "assets/platform.png");

    this.load.image("trap-saw-platform", "assets/traps/saw/platform.png");
    this.load.image("trap-saw-disc", "assets/traps/saw/disc.png");

    //new trap sacha et faouzi

    this.load.image("trapplatform", "assets/traps/trapplatform.png");

    //new trap ranime et celine
    this.load.image("trapcomputer", "assets/traps/dev/trap2.png");
    this.load.image("trapcss", "assets/traps/dev/css.png");
    this.load.image("traphtml", "assets/traps/dev/test.png");
    this.load.image("trapjs", "assets/traps/dev/js.png");
    this.load.image("trapphp", "assets/traps/dev/php.png");
    this.load.image("trapwordpress", "assets/traps/dev/wordpress.png");

    // new trap antonin & luca
    this.load.image("trap-mode-closed", "assets/door/closed.png");
    this.load.image("trap-mode-opened", "assets/door/opened.png");
    this.load.image("trap-mode-hitbox", "assets/door/hitbox.png");

    //new trap narjisse et maeva

    this.load.image("monster", "assets/traps/tibiscuit.jpeg");
    this.load.image("barnacle", "assets/traps/monster.png");
    this.load.image("trap-monster-ground", "assets/traps/bloc.png");
    this.load.image("trap-monster-piques", "assets/traps/pique.png");

    // new trap karim et rayan

    this.load.image("trap-saw-spike", "assets/traps/spike/piege2.png");
    this.load.image("trap-saw-platform2", "assets/traps/spike/piege.png");

    // new trap sixte antoine
    this.load.image("trap-blackHole", "assets/traps/blackHole.png")
  }

  // initialise la scène
  // est appelée qu'une seule fois
  create() {
    this.inputs = this.input.keyboard.createCursorKeys();

    this.add.image(640, 360, "bg");

    const blackHoleTrap = new BlackHoleTrap(this, 900, 400);
    this.traps.push(blackHoleTrap);

    const platform = new Platform(this, 200, 600);
    const platform2 = new Platform(this, 800, 550);

    const doorTrap = new DoorTrap(this, 800, 455);
    this.traps.push(doorTrap);

    // const monsterTrap = new MonsterTrap(this, 900, 280);
    // this.traps.push(monsterTrap);

    // piege sacha + faouzi
    const platformTrap = new PlatformTrap(this, 1100, 300);
    this.traps.push(platformTrap);

    this.hbBlackHole = new hbBlackHole(this, 900, 400);

    this.player = new Player(this, 200, 505);

    this.physics.add.overlap(
      this.player.sprite,
      this.hbBlackHole.sprite,
      () => {
        console.log("destroyyyyed");
        // Faire disparaître le joueur
        this.player.die();
        // Autres actions à effectuer en cas de collision avec hbBlackHole...
      }
    );

    // const sawTrap = new SawTrap(this, 400, 400);
    // this.traps.push(sawTrap);

    this.physics.add.collider(this.player.sprite, platform.sprite);
    this.physics.add.collider(this.player.sprite, platform2.sprite);

    const openedTrap = new OpenedTrap(this, 800, 455);
    this.traps.push(openedTrap);

    const monsterTrap = new MonsterTrap(this, 900, 210);
    this.traps.push(monsterTrap);

    const computerTrap = new ComputerTrap(this, 580, 400);
    this.traps.push(computerTrap);
    openedTrap.createColliders();

    const spikesTrap = new SpikesTrap(this, 400, 350);
    this.traps.push(spikesTrap);
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

    // Vérification de la collision entre le joueur et le sprite hbBlackHole
    if (this.playerCollider && this.hbBlackHoleCollider) {
    }
  }
}
