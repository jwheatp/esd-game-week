class Scene extends Phaser.Scene {
  inputs;
  player;

  traps = [];

  hbBlackHole;
  playerCollider;
  blackHolead;

  endPoint;

  // on précharge les assets
  preload() {
    this.load.image("scene1", "assets/scene1.jpg")

    this.load.image("player", "assets/player-idle.png");
    this.load.image("platform", "assets/platform.png");

    this.load.image("trap-saw-platform", "assets/traps/saw/platform.png");
    this.load.image("trap-saw-disc", "assets/traps/saw/disc.png");

    //Assets sacha et faouzi

    //trap sacha et faouzi
    this.load.image("trapplatform", "assets/traps/trapplatform.png")

    //audio sacha et faouzi
    this.load.audio("gamesong", "assets/audio/game-song.mp3")
    this.load.audio("jump", "assets/audio/jump-player.mp3")
    this.load.audio("teleport", "assets/audio/teleportation.mp3")

    //new trap ranime et celine
    /*
    this.load.image("trapcomputer", "assets/traps/dev/trap1.png");
    this.load.image("trapcss", "assets/traps/dev/css.png");
    this.load.image("traphtml", "assets/traps/dev/html.png");
    this.load.image("trapjs", "assets/traps/dev/js.png");
    this.load.image("trapphp", "assets/traps/dev/php.png");
    this.load.image("trapphp", "assets/traps/dev/wordpress.png");
    */


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
    //player One
    this.load.image("player-2-death", "assets/skin/playerOne-all/playerOne-Death.png");
    this.load.image("player-2-jump", "assets/skin/playerOne-all/playerOne-Jump.png");
    this.load.image("player-2-run", "assets/skin/playerOne-all/playerOne-Run.png");
    this.load.image("player-2-walk", "assets/skin/playerOne-all/playerOne-Walk.png");
    this.load.image("player-2-idl", "assets/skin/playerOne-all/playerOne.png");

    this.load.image("player-2-move1", "assets/skin/playerOne-all/victoryDanceOne/move1.png");
    this.load.image("player-2-move2", "assets/skin/playerOne-all/victoryDanceOne/move2.png");

    //playerTwo
    this.load.image("player-1-death", "assets/skin/playerTwo-all/playerTwo-Death.png");
    this.load.image("player-1-jump", "assets/skin/playerTwo-all/playerTwo-Jump.png");
    this.load.image("player-1-run", "assets/skin/playerTwo-all/playerTwo-Run.png");
    this.load.image("player-1-walk", "assets/skin/playerTwo-all/playerTwo-Walk.png");
    this.load.image("player-1-idl", "assets/skin/playerTwo-all/playerTwo.png");

    this.load.image("player-1-move1", "assets/skin/playerTwo-all/victoryDanceTwo/move1.png");
    this.load.image("player-1-move2", "assets/skin/playerTwo-all/victoryDanceTwo/move2.png");
    this.load.image("player-1-move3", "assets/skin/playerTwo-all/victoryDanceTwo/move3.png");
    this.load.image("player-1-move4", "assets/skin/playerTwo-all/victoryDanceTwo/move4.png");

    //player three
    this.load.image("player-3-death", "assets/skin/playerThree-all/playerThree-Death.png");
    this.load.image("player-3-jump", "assets/skin/playerThree-all/playerThree-Jump.png");
    this.load.image("player-3-run", "assets/skin/playerThree-all/playerThree-Run.png");
    this.load.image("player-3-walk", "assets/skin/playerThree-all/playerThree-Walk.png");
    this.load.image("player-3-idl", "assets/skin/playerThree-all/playerThree.png");

    this.load.image("player-3-move1", "assets/skin/playerThree-all/victoryDanceThree/move1.png");
    this.load.image("player-3-move2", "assets/skin/playerThree-all/victoryDanceThree/move2.png");


    //player four

    this.load.image("player-4-death", "assets/skin/playerFour-all/playerFour-Death.png");
    this.load.image("player-4-jump", "assets/skin/playerFour-all/playerFour-Jump.png");
    this.load.image("player-4-run", "assets/skin/playerFour-all/playerFour-Run.png");
    this.load.image("player-4-walk", "assets/skin/playerFour-all/playerFour-Walk.png");
    this.load.image("player-4-idl", "assets/skin/playerFour-all/playerFour.png");

    this.load.image("player-2-move1", "assets/skin/playerFour-all/victoryDanceFour/move1.png");
    this.load.image("player-2-move1", "assets/skin/playerFour-all/victoryDanceFour/move2.png");
    this.load.image("player-2-move1", "assets/skin/playerFour-all/victoryDanceFour/move3.png");

  }

  // initialise la scène
  // est appelée qu'une seule fois
  create() {

    this.inputs = this.input.keyboard.createCursorKeys();
    // this.sound.play("gamesong");


    this.add.image(640, 360, "scene1");

    const platform = new Platform(this, 200, 600);
    const platform2 = new Platform(this, 800, 550);

    const rectVictory = new Phaser.Geom.Rectangle(this, 200, 150, 300, 200);

    const doorTrap = new DoorTrap(this, 800, 455);
    this.traps.push(doorTrap);

    const openedTrap = new OpenedTrap(this, 800, 455);
    this.traps.push(openedTrap);

    // const monsterTrap = new MonsterTrap(this, 900, 280);
    // this.traps.push(monsterTrap);

    // piege sacha + faouzi
    // const platformTrap = new PlatformTrap(this, 1100, 300);
    // this.traps.push(platformTrap);

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

    this.physics.add.collider(this.player.sprite, platform.sprite);
    this.physics.add.collider(this.player.sprite, platform2.sprite);


    const monsterTrap = new MonsterTrap(this, 900, 210);
    this.traps.push(monsterTrap);

    // const computerTrap = new ComputerTrap(this, 600, 410);

    // this.traps.push(computerTrap);
    openedTrap.createColliders();

    // const spikesTrap = new SpikesTrap(this, 400, 350);
    // this.traps.push(spikesTrap);
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
