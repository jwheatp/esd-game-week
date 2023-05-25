class Scene extends Phaser.Scene {
  inputs;
  player;
  viseur;

  traps = [];

  hbBlackHole;
  playerCollider;
  blackHolead;

  endPoint;
  scoretextus;
  platforms = [];
  isgameover = false;

  platformsLevels


  playerInitialized = false

  phaseTitle


  // on précharge les assets
  preload() {
    this.load.image("scene1", "assets/scene1.jpg");

    this.load.image("fall-collider", "assets/platforms/fallcollider.png");

    this.load.image("player", "assets/player-idle.png");
    this.load.image("platform", "assets/platform.png");

    // platforms
    this.load.image("trap-saw-platform", "assets/traps/saw/platform.png");

    this.load.image(
      "big-grassPlatform",
      "assets/platforms/big-grassPlatform.png"
    );
    this.load.image("big-icePlatform", "assets/platforms/big-icePlatform.png");
    this.load.image(
      "big-cakePlatform",
      "assets/platforms/big-cakePlatform.png"
    );
    this.load.image(
      "rotate-big-cakePlatform",
      "assets/platforms/90big-cakePlatform.png"
    );
    this.load.image("cakePlatform", "assets/platforms/cakePlatform.png");
    this.load.image(
      "rotate-cakePlatform",
      "assets/platforms/40cakePlatform.png"
    );
    this.load.image("icePlatform", "assets/platforms/icePlatform.png");
    this.load.image("rockPlatform", "assets/platforms/rockPlatform.png");
    this.load.image("snowPlatform", "assets/platforms/snowPlatform.png");
    this.load.image("grassPlatform", "assets/platforms/grassPlatform.png");
    this.load.image("rockdecoration", "assets/platforms/rock_decoration.png");

    // /!\ NE PAS SUPPRIMER HITBOX INVISIBLE, IL VA AVEC LE DRAPEAU
    this.load.image("endPlatform", "assets/platforms/end.png");
    this.load.image(
      "hitbox-invisible",
      "assets/platforms/hitbox-invisible.png"
    );

    this.load.image("collideborder", "assets/platforms/collideborder.png");

    this.load.image("trap-saw-disc", "assets/traps/saw/disc.png");

    //Assets sacha et faouzi

    //trap sacha et faouzi
    this.load.image("trapplatform", "assets/traps/trapplatform.png");

    //audio sacha et faouzi
    this.load.audio("gamesong", "assets/audio/game-song.mp3");
    this.load.audio("gamewin", "assets/audio/win.mp3");
    this.load.audio("gamelose", "assets/audio/lose.mp3");
    // this.load.audio("jump", "assets/audio/jump-player.mp3");
    this.load.audio("jump", "assets/audio/cartoonjump.mp3");
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
    this.load.image("monster", "assets/traps/tibiscuit.jpeg");
    this.load.image("barnacle", "assets/traps/monster.png");
    this.load.image("trap-monster-ground", "assets/traps/bloc.png");
    this.load.image("trap-monster-piques", "assets/traps/pique.png");
    this.load.image("viseur-1", "assets/traps/viseur.png");

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
    //bandeau du score et icone du player
    // this.load.image("string", "assets/traps/dev/.png");
    this.load.image("blindfold-score", "assets/traps/dev/test2.png");
    this.load.image("icon-player1", "assets/traps/dev/mario.png");
    this.load.image("icon-player2", "assets/traps/dev/mario.png");
    this.load.image("icon-player3", "assets/traps/dev/mario.png");
    this.load.image("icon-player4", "assets/traps/dev/mario.png");
    this.load.image("icon-player5", "assets/traps/dev/mario.png");
  }
  // initialise la scène
  // est appelée qu'une seule fois
  async create() {
    this.inputs = this.input.keyboard.createCursorKeys();
    this.sound.play("gamesong");

    this.add.image(640, 360, "scene1");

    this.platformsLevels = new PlatformLevels(this);


    // const doorTrap = new DoorTrap(this, 800, 455);
    // this.traps.push(doorTrap);
    // const doorTrap = new DoorTrap(this, 800, 455);
    // this.traps.push(doorTrap);

    // const openedTrap = new OpenedTrap(this, 800, 455);
    // this.traps.push(openedTrap);

    // // piege sacha + faouzi
    // const platformTrap = new PlatformTrap(this, 600, 300);
    // this.traps.push(platformTrap);

    // var rect = this.add.rectangle(1010, 115, 400, 45, 0Xaa0000, 1);
    // this.add.image(1080, 15, "blindfold-score");

    // this.hbBlackHole = new hbBlackHole(this, 900, 400);
    // this.endPoint = this.physics.add.image(1200, 300, "endPlatform");
    // this.endPoint.body.setAllowGravity(false);


    // this.hbBlackHole = new hbBlackHole(this, 900, 400);

    this.add.image(1000, 40, "blindfold-score");
    this.add.text(870, 30, "Sydney", {
      fontSize: "16px",
      color: "black",
    });

    this.add.image(820, 40, "icon");
    // var rect = this.add.rectangle(600, 20, 500, 45, 0xff0000, 1);
    //bandeau pour le score 
    // this.add.image(1000, 40, "string");
    this.add.image(1020, 40, "blindfold-score");
    this.add.image(830, 40, "icon-player1");
    this.add.image(930, 40, "icon-player2");
    this.add.image(1010, 40, "icon-player3");
    this.add.image(1040, 40, "icon-player4");
    this.add.image(1090, 40, "icon-player5");

    // this.hbBlackHole = new hbBlackHole(this, 900, 400);

    // /!\ LE POINT D'ARRIVÉE EST "hitbox-invisible" ET PAS "endPlatform" /!\
    // this.endPoint = this.physics.add.image(1233, 230, "hitbox-invisible");
    // this.add.image(1233, 230, "endPlatform");
    // this.endPoint.body.setAllowGravity(false);

    // this.player = new Player(this, 180, 230);
    // this.hbBlackHole = new hbBlackHole(this, 900, 400);

    // this.physics.add.overlap(
    //   this.player.sprite,
    //   this.hbBlackHole.sprite,
    //   () => {
    //     // Faire disparaître le joueur
    //     this.player.die();
    //     // Autres actions à effectuer en cas de collision avec hbBlackHole...
    //   }
    // );
    // this.player = new Player(this, 200, 505);
    // this.physics.add.overlap(
    //   this.player.sprite,
    //   this.hbBlackHole.sprite,
    //   () => {
    //     // Faire disparaître le joueur
    //     this.player.die();
    //     // Autres actions à effectuer en cas de collision avec hbBlackHole...
    //   }
    // );

    // const sawTrap = new SawTrap(this, 400, 400);
    // this.traps.push(sawTrap);

    // this.physics.add.collider(this.player.sprite, platform.sprite);
    // this.physics.add.collider(this.player.sprite, platform2.sprite);

    // const openedTrap = new OpenedTrap(this, 800, 455);
    // this.traps.push(openedTrap);

    // const monsterTrap = new MonsterTrap(this, 900, 210);
    // this.traps.push(monsterTrap);
    // const monsterTrap = new MonsterTrap(this, 900, 210);
    // this.traps.push(monsterTrap);
    // monsterTrap.canSetupTrap = true;
    // monsterTrap.initCursor();

    // const computerTrap = new ComputerTrap(this, 580, 400);
    // this.traps.push(computerTrap);
    // openedTrap.createColliders();
    // const monsterTrap = new MonsterTrap(this, 900, 210);
    // this.traps.push(monsterTrap);
    // monsterTrap.canSetupTrap = true;
    // monsterTrap.initCursor();

    // const computerTrap = new ComputerTrap(this, 580, 400);
    // this.traps.push(computerTrap);
    // computerTrap.canSetupTrap = true;
    // computerTrap.initCursor();

    // openedTrap.createColliders();

    // const spikesTrap = new SpikesTrap(this, 400, 350);
    // this.traps.push(spikesTrap);

    // const multiplayerSystem = new MultiplayerSystem(this)
    // await multiplayerSystem.init()

    new PlatformLevels(this);

    //karim rayane 

    // const spikesTrap = new SpikesTrap(this, 400, 350);
    // this.traps.push(spikesTrap);

    // Créer un rectangle semi-transparent en arrière-plan
    var background = this.add.rectangle(
      this.game.config.width / 2,
      this.game.config.height / 2,
      this.game.config.width,
      this.game.config.height,
      0x000000,
      0.5
    );
    background.setOrigin(0.5);

    // Afficher la pop-up de démarrage
    var startButton = this.add.text(
      this.game.config.width / 2,
      this.game.config.height / 2,
      "Start Game",
      {
        fontFamily: "Arial",
        fontSize: 48,
        color: "#ffffff"
      }
    );

    var style = {
      font: '20px Arial',
      fill: '#ffffff',
      align: 'center'
    };


    var style = {
      font: '20px Arial',
      fill: '#ffffff',
      align: 'center'
    };

    var text = this.add.text(560, 400, 'Hello, Phaser!', style);
    text.text = 'Press Espace';

    startButton.setOrigin(0.5);
    startButton.setInteractive();

    // Gérer le clic sur le bouton "Start Game"
    // this.player.freeze()
    this.input.keyboard.on('keydown-SPACE', function () {

      if (!this.isGameStarted) {
        this.isGameStarted = true;
        this.startGame();
        startButton.destroy();
        background.destroy();
        text.destroy();
        // this.player.unfreeze(); // Activer les mouvements du joueur
      }
    }, this);




    this.phaseTitle = this.add.text(640, 400, '', { color: "black", fontSize: '50px', align: "center", backgroundColor: 'white' });
    this.phaseTitle.setOrigin(0.5)
    this.roundTitle = this.add.text(640, 330, '', { color: "black", fontSize: '70px', align: "center", backgroundColor: 'white' });
    this.roundTitle.setOrigin(0.5)
  }

  // Fonction pour démarrer le jeu
  startGame() {
    // Ajouter ici la logique pour démarrer votre jeu

    const gm = new GameManager(this)
    gm.run()


    this.fallCollider = this.physics.add.staticImage(640, 800, "fall-collider")
    this.physics.add.overlap(
      this.player.sprite,
      this.fallCollider,
      () => {
        // Faire disparaître le joueur
        this.player.die();
        this.player.fall()
        // Autres actions à effectuer en cas de collision avec hbBlackHole...
      }
    );


  }




  // appelée très souvent (correspond au fps)
  update(time) {
    this.player?.update();

    this.platformsLevel?.update()

    for (let i = 0; i < this.traps.length; i++) {
      this.traps[i].update(time);
    }
    // if (this.opened && this.player.x === OpenedTrap.x && this.player.y === OpenedTrap.y) {
    //   this.player.x = 500;
    //   this.player.y = 400;
    // }
    // if (this.isGameOver) {
    //   return
    // }
    // this.player.update()

    // for (let i = 0; i < this.traps.length; i++) {
    //   this.traps[i].update()
    // }
    // // Vérifier si le joueur est mort
    // if (this.player.isDead) {       // Désactiver les mouvements du joueur
    //   this.player.freeze();

    //   console.log("aaa")
    //   // Afficher l'écran de "Game Over"
    //   var gameOverScreen = new GameOverScreen(this, this.player);
    //   gameOverScreen.create();

    //   this.isGameOver = true
    // }
  }
}

class GameOverScreen {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;
  }

  create() {

    console.log('screen')
    // Créer un rectangle semi-transparent en arrière-plan
    var background = this.scene.add.rectangle(
      this.scene.game.config.width / 2,
      this.scene.game.config.height / 2,
      this.scene.game.config.width,
      this.scene.game.config.height,
      0x000000,
      0.5
    );
    background.setOrigin(0.5);

    // Afficher la pop-up "Game Over"
    var gameOverText = this.scene.add.text(
      this.scene.game.config.width / 2,
      this.scene.game.config.height / 2,
      "Game Over",
      {
        fontFamily: "Arial",
        fontSize: 48,
        color: "#ffffff"
      }
    );
    gameOverText.setOrigin(0.5);
    gameOverText.setInteractive();

    // Redémarrer le jeu au clic sur la pop-up "Game Over"
    gameOverText.on('pointerup', function () {
      this.player.reset(); // Réinitialiser le joueur
      this.scene.scene.restart(); // Redémarrer la scène
      gameOverText.destroy(); // Supprimer la pop-up "Game Over"
      background.destroy(); // Supprimer le fond semi-transparent
    }, this);
  }
}