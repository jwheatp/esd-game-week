class Scene extends Phaser.Scene {
  inputs;
  player;

  traps = [];

  hbBlackHole;
  playerCollider;
  blackHolead;

  endPoint;
  isgameover = false;

  // on précharge les assets
  preload() {
    this.load.image("scene1", "assets/scene1.jpg");

    this.load.image("player", "assets/player-idle.png");
    this.load.image("platform", "assets/platform.png");

    // platforms
    this.load.image("trap-saw-platform", "assets/traps/saw/platform.png");

    this.load.image("big-grassPlatform", "assets/platforms/big-grassPlatform.png")
    this.load.image("big-icePlatform", "assets/platforms/big-icePlatform.png")
    this.load.image("big-cakePlatform", "assets/platforms/big-cakePlatform.png")
    this.load.image("cakePlatform", "assets/platforms/cakePlatform.png")
    this.load.image("icePlatform", "assets/platforms/icePlatform.png")
    this.load.image("rockPlatform", "assets/platforms/rockPlatform.png")
    this.load.image("snowPlatform", "assets/platforms/snowPlatform.png")
    this.load.image("grassPlatform", "assets/platforms/grassPlatform.png")
    this.load.image("rockdecoration", "assets/platforms/rock_decoration.png")



    // this.load.image("trap-saw-disc", "assets/traps/saw/disc.png");

    //Assets sacha et faouzi

    //trap sacha et faouzi
    this.load.image("trapplatform", "assets/traps/trapplatform.png");

    //audio sacha et faouzi
    this.load.audio("gamesong", "assets/audio/game-song.mp3");
    this.load.audio("jump", "assets/audio/jump-player.mp3");
    this.load.audio("teleport", "assets/audio/teleportation.mp3");

    //new trap ranime et celine
    this.load.image("trapcomputer", "assets/traps/dev/trap2.png");
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

    this.load.image("trap-saw-spike", "assets/traps/spike/piege2.png");
    this.load.image("trap-saw-platform2", "assets/traps/spike/piege.png");

    // new trap sixte antoine
    this.load.image("trap-blackHole", "assets/traps/blackHole.png");

    //animation player
    this.load.image("player-death", "assets/skin/playerTwo-Death.png");
    this.load.image("player-jump", "assets/skin/playerTwo-Jump.png");
    this.load.image("player-run", "assets/skin/playerTwo-Run.png");
    this.load.image("player-walk", "assets/skin/playerTwo-Walk.png");
    this.load.image("player-idl", "assets/skin/playerTwo.png");
    //bandeau du score 
    this.load.image("blindfold-score", "assets/traps/test.png");
  }

  // initialise la scène
  // est appelée qu'une seule fois
  create() {
    this.inputs = this.input.keyboard.createCursorKeys();
    // this.sound.play("gamesong");

    this.add.image(640, 360, "scene1");

    // const platform = new Platform(this, 200, 600);
    const platform2 = new Platform(this, 800, 550);

    const doorTrap = new DoorTrap(this, 800, 455);
    this.traps.push(doorTrap);

    const openedTrap = new OpenedTrap(this, 800, 455);
    this.traps.push(openedTrap);

    // const monsterTrap = new MonsterTrap(this, 900, 280);
    // this.traps.push(monsterTrap);

    // piege sacha + faouzi
    // const platformTrap = new PlatformTrap(this, 1100, 300);
    // this.traps.push(platformTrap);


    // var rect = this.add.rectangle(1010, 115, 400, 45, 0Xaa0000, 1);
   this.add.image(1100, 110,"blindfold-score");
    

    this.hbBlackHole = new hbBlackHole(this, 900, 400);
    this.endPoint = this.physics.add.image(680, 450, "trap-mode-opened");
    this.endPoint.body.setAllowGravity(false);

    this.player = new Player(this, 200, 400);
    this.hbBlackHole = new hbBlackHole(this, 900, 400);

    this.physics.add.overlap(
      this.player.sprite,
      this.hbBlackHole.sprite,
      () => {
        // Faire disparaître le joueur
        this.player.die();
        // Autres actions à effectuer en cas de collision avec hbBlackHole...
      }
    );

    // const sawTrap = new SawTrap(this, 400, 400);
    // this.traps.push(sawTrap);


    const monsterTrap = new MonsterTrap(this, 900, 210);
    this.traps.push(monsterTrap);
  
    // const openedTrap = new OpenedTrap(this, 800, 455);
    // this.traps.push(openedTrap);

    // const monsterTrap = new MonsterTrap(this, 900, 210);
    // this.traps.push(monsterTrap);

    const computerTrap = new ComputerTrap(this, 600, 410);
    this.traps.push(computerTrap);
    openedTrap.createColliders();

    // const spikesTrap = new SpikesTrap(this, 400, 350);
    // this.traps.push(spikesTrap);

    new PlatformLevels(this);

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
