class Scene5 extends Phaser.Scene {
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

  platformsLevels

  startX = 95;
  startY = 310;

  positions = [
    { x: 1160, y: 150 },
    { x: 1160, y: 550 },
  ];

  // on précharge les assets
  preload() {
    new Preloader(this)

    this.load.image("scene5", "assets/scene5.jpg");

  }

  // initialise la scène
  // est appelée qu'une seule fois
  async create() {
    this.inputs = this.input.keyboard.createCursorKeys();
    // this.sound.play("gamesong");

    this.add.image(640, 360, "scene5");

    // const doorTrap = new DoorTrap(this, 800, 455);
    // this.traps.push(doorTrap);

    // new Platform(this, 200, 600)
    // new Platform(this, 800, 550)
    // const platform2 = new Platform(this, 800, 550);
    // this.platforms.add(platform2.sprite)

    // const doorTrap = new DoorTrap(this, 800, 455);
    // this.traps.push(doorTrap);

    // const monsterTrap = new MonsterTrap(this, 900, 280);
    // this.traps.push(monsterTrap);
    // const openedTrap = new OpenedTrap(this, 800, 455);
    // this.traps.push(openedTrap);

    // piege sacha + faouzi
    // const platformTrap = new PlatformTrap(this, 1100, 300);
    // this.traps.push(platformTrap);

    this.add.image(1000, 40, "blindfold-score");
    this.add.image(1000, 40, "icon");


    // this.hbBlackHole = new hbBlackHole(this, 900, 400);

    // /!\ LE POINT D'ARRIVÉE EST "hitbox-invisible" ET PAS "endPlatform" /!\
    // this.endPoint = this.physics.add.image(1160, 150, "hitbox-invisible");
    // this.add.image(1160, 150, "endPlatform");
    // this.endPoint.body.setAllowGravity(false);

    // Créer la plateforme visible
    const endPoint = this.physics.add.sprite(1160, 150, "endPlatform");
    endPoint.body.setAllowGravity(false);

    // Créer la hitbox invisible
    const hitboxInvisible = this.physics.add.sprite(1160, 150, "hitbox-invisible");
    hitboxInvisible.body.setAllowGravity(false);

    const changePosition = () => {
      const randomPosition = Phaser.Utils.Array.GetRandom(this.positions);

      console.log(randomPosition)
      const { x, y } = randomPosition;

      endPoint.setPosition(x, y);
      hitboxInvisible.setPosition(x, y);
    }

    changePosition();

    // Changer la position toutes les 2 à 8 secondes
    this.time.addEvent({
      delay: Phaser.Math.Between(2000, 8000),
      loop: true,
      callback: changePosition
    });

    console.log(changePosition)

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
    // computerTrap.canSetupTrap = true;
    // computerTrap.initCursor();

    // const openedTrap = new OpenedTrap(this, 800, 455);
    // this.traps.push(openedTrap);

    // const computerTrap = new ComputerTrap(this, 600, 410);
    // this.traps.push(computerTrap);
    // openedTrap.createColliders();
    // const computerTrap = new ComputerTrap(this, 580, 400);
    // this.traps.push(computerTrap);
    // openedTrap.createColliders();

    // const spikesTrap = new SpikesTrap(this, 400, 350);
    // this.traps.push(spikesTrap);

    // const multiplayerSystem = new MultiplayerSystem(this)
    // await multiplayerSystem.init()
    new PlatformLevelsScene5(this);

    this.platformsLevels = new PlatformLevelsScene5(this)

    this.player = new Player(this, this.startX, this.startY);
  }

  // appelée très souvent (correspond au fps)
  update(time) {
    this.player?.update();

    this.platformsLevels?.update()

    // for (let i = 0; i < this.traps.length; i++) {
    //   this.traps[i].update(time);
    // }
    // if (this.opened && this.player.x === OpenedTrap.x && this.player.y === OpenedTrap.y) {
    //   this.player.x = 500;
    //   this.player.y = 400;
    // }
  }
}
