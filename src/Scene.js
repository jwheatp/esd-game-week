class Scene extends Phaser.Scene {
  inputs;
  player;
  viseur;

  traps = [];

  hbBlackHole;
  playerCollider;
  blackHolead;

  endPoint;
  platforms = [];
  isgameover = false;

  platformsLevels;

  playerInitialized = false;

  phaseTitle;

  platformsLevel;

  multiplayerSystem;

  // on précharge les assets
  preload() {
    new Preloader(this);

    this.load.image("scene1", "assets/scene1.jpg");
  }
  // initialise la scène
  // est appelée qu'une seule fois
  async create() {
    this.inputs = this.input.keyboard.createCursorKeys();
    this.sound.play("gamesong");

    this.add.image(640, 360, "scene1");

    this.platformsLevels = new PlatformLevels(this);

    new DoorMainTrap(this, 800, 455);

    // // piege sacha + faouzi
    // const platformTrap = new PlatformTrap(this, 600, 300);
    // this.traps.push(platformTrap);

    // var rect = this.add.rectangle(1010, 115, 400, 45, 0Xaa0000, 1);
    // this.add.image(1080, 15, "blindfold-score");

    // this.hbBlackHole = new hbBlackHole(this, 900, 400);
    // this.endPoint = this.physics.add.image(1200, 300, "endPlatform");
    // this.endPoint.body.setAllowGravity(false);

    // this.hbBlackHole = new hbBlackHole(this, 900, 400);

    // this.hbBlackHole = new hbBlackHole(this, 900, 400);

    // /!\ LE POINT D'ARRIVÉE EST "hitbox-invisible" ET PAS "endPlatform" /!\
    // this.endPoint = this.physics.add.image(1233, 230, "hitbox-invisible");
    // this.add.image(1233, 230, "endPlatform");
    // this.endPoint.body.setAllowGravity(false);

    this.score = new Score(this);
    this.score.showScore();

    this.player = new Player(this, 180, 230);

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
    // // monsterTrap.canSetupTrap = true;
    // // monsterTrap.initCursor();

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

    this.multiplayerSystem = new MultiplayerSystem(this);
    // await multiplayerSystem.init()

    new PlatformLevels(this);

    //karim rayane
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
        color: "#ffffff",
      }
    );

    var style = {
      font: "20px Arial",
      fill: "#ffffff",
      align: "center",
    };

    var style = {
      font: "20px Arial",
      fill: "#ffffff",
      align: "center",
    };

    var text = this.add.text(560, 400, "Hello, Phaser!", style);
    text.text = "Press Espace";

    startButton.setOrigin(0.5);
    startButton.setInteractive();
    // Gérer le clic sur le bouton "Start Game"
    this.player.freeze();
    this.input.keyboard.on(
      "keydown-SPACE",
      function () {
        if (!this.isGameStarted) {
          this.isGameStarted = true;
          this.startGame();
          startButton.destroy();
          background.destroy();
          text.destroy();
          this.player.unfreeze(); // Activer les mouvements du joueur
        }
      },
      this
    );
  }

  // Fonction pour démarrer le jeu
  startGame() {
    // Ajouter ici la logique pour démarrer votre jeu

    const gm = new GameManager(this);
    gm.run();

    this.multiplayerSystem.init();

    this.fallCollider = this.physics.add.staticImage(640, 800, "fall-collider");
    // this.physics.add.overlap(
    //   this.player.sprite,
    //   this.fallCollider,
    //   () => {
    //     // Faire disparaître le joueur
    //     this.player.die();
    //     this.player.fall()
    //     // Autres actions à effectuer en cas de collision avec hbBlackHole...
    //   }
    // );
  }

  // appelée très souvent (correspond au fps)
  update(time) {
    this.player?.update();

    this.multiplayerSystem?.update();

    this.platformsLevel?.update();

    for (let i = 0; i < this.traps.length; i++) {
      this.traps[i].update(time);
    }
    // if (this.opened && this.player.x === OpenedTrap.x && this.player.y === OpenedTrap.y) {
    //   this.player.x = 500;
    //   this.player.y = 400;
    // }
    if (this.isGameOver) {
      return;
    }
    this.player.update();

    for (let i = 0; i < this.traps.length; i++) {
      this.traps[i].update();
    }
    // Vérifier si le joueur est mort
    if (this.player.isDead) {
      // Désactiver les mouvements du joueur
      this.player.freeze();

      console.log("aaa");
      // Afficher l'écran de "Game Over"
      var gameOverScreen = new GameOverScreen(this, this.player);
      gameOverScreen.create();

      this.isGameOver = true;
    }
  }
}

class GameOverScreen {
  constructor(scene, player) {
    this.scene = scene;
    this.player = player;
  }

  create() {
    console.log("screen");
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
        color: "#ffffff",
      }
    );
    gameOverText.setOrigin(0.5);
    gameOverText.setInteractive();

    // Redémarrer le jeu au clic sur la pop-up "Game Over"
    gameOverText.on(
      "pointerup",
      function () {
        this.player.reset(); // Réinitialiser le joueur
        this.scene.scene.restart(); // Redémarrer la scène
        gameOverText.destroy(); // Supprimer la pop-up "Game Over"
        background.destroy(); // Supprimer le fond semi-transparent
      },
      this
    );
  }
}
