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

    // this.hbBlackHole = new hbBlackHole(this, 900, 400);
    this.endPoint = this.physics.add.image(1245, 230, "endPlatform");
    this.endPoint.body.setAllowGravity(false);

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

    this.multiplayerSystem = new MultiplayerSystem(this)
    // await multiplayerSystem.init()

    new PlatformLevels(this);

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
    this.player?.freeze();
    this.input.keyboard.on(
      "keydown-SPACE",
      function () {
        if (!this.isGameStarted) {
          this.isGameStarted = true;
          this.startGame();
          startButton.destroy();
          background.destroy();
          text.destroy();
          this.player?.unfreeze(); // Activer les mouvements du joueur
        }
      },
      this
    );

    this.phaseTitle = this.add.text(640, 400, "", {
      color: "black",
      fontSize: "50px",
      align: "center",
      backgroundColor: "white",
    });
    this.phaseTitle.setOrigin(0.5);
    this.roundTitle = this.add.text(640, 330, "", {
      color: "black",
      fontSize: "70px",
      align: "center",
      backgroundColor: "white",
    });
    this.roundTitle.setOrigin(0.5);
  }

  // Fonction pour démarrer le jeu
  startGame() {
    // Ajouter ici la logique pour démarrer votre jeu

    const gm = new GameManager(this);
    gm.run();

    this.multiplayerSystem.init();

    this.fallCollider = this.physics.add.staticImage(640, 800, "fall-collider")

    this.score = new Score(this);

  }

  // appelée très souvent (correspond au fps)
  update(time) {
    this.player?.update();

    this.multiplayerSystem?.update();

    this.platformsLevel?.update();

    for (let i = 0; i < this.traps.length; i++) {
      if(this.traps[i]?.update) {
        this.traps[i]?.update(time);
      }
    }
    // if (this.opened && this.player.x === OpenedTrap.x && this.player.y === OpenedTrap.y) {
    //   this.player.x = 500;
    //   this.player.y = 400;
    // }
    if (this.isGameOver) {
      return;
    }

    for (let i = 0; i < this.traps.length; i++) {
      this.traps[i].update();
    }
    // Vérifier si le joueur est mort
    if (this.player?.isDead) {
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
