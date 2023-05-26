class PlatformLevels {
  scene;

  bigGrassPlatform

  platforms = []

  constructor(scene) {
    this.scene = scene;

    // this.bigGrassPlatform = scene.physics.add.staticImage(150, 500, "big-grassPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);


    this.GrassPlatform = scene.physics.add.staticImage(520, 220, "grassPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);
    this.platforms.push(this.GrassPlatform)

    this.GrassPlatform = scene.physics.add.staticImage(880, 220, "grassPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);
    this.platforms.push(this.GrassPlatform)


    // Platforme en gateau à 90degré au milieu de la map
    this.rotateBigCakePlatform = scene.physics.add.staticImage(400, 444, "rotate-big-cakePlatform");
    this.platforms.push(this.rotateBigCakePlatform)

    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatform);

    // Montagne à gauche
    this.rockdecoration = scene.physics.add.staticImage(40, 430, "rockdecoration");

    // Bloc invisible pour tout à gauche
    this.rotateBigCakePlatformHidden = scene.physics.add.staticImage(10, 380, "rotate-big-cakePlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatformHidden);
    this.platforms.push(this.rotateBigCakePlatformHidden)

    this.rotateBigCakePlatformHidden.setAlpha(0)

    // Bloc invisible pour ne pas
    this.rotateBigCakePlatformHidden = scene.physics.add.staticImage(200, 640, "rotate-big-cakePlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatformHidden);
    this.rotateBigCakePlatformHidden.setAlpha(0)
    this.platforms.push(this.rotateBigCakePlatformHidden)

    this.rotateBigCakePlatformHidden = scene.physics.add.staticImage(250, 740, "rotate-big-cakePlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatformHidden);
    this.rotateBigCakePlatformHidden.setAlpha(0)
    this.platforms.push(this.rotateBigCakePlatformHidden)

    this.rotateBigCakePlatformHidden.setAlpha(0)

    // Bloc invisible pour hitbox à l'horizontale dans la montage
    this.rockPlatform = scene.physics.add.staticImage(30, 310, "rockPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rockPlatform);
    this.platforms.push(this.rockPlatform)

    this.rockPlatform.setAlpha(0)


    // Bloc invisible pour hitbox à 40degré sur la montagne
    this.rotateCakePlatformHidden = scene.physics.add.staticImage(65, 250, "rotate-cakePlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateCakePlatformHidden);
    this.platforms.push(this.rotateCakePlatformHidden)

    this.rotateCakePlatformHidden.setAlpha(0)
    this.rotateCakePlatformHidden = scene.physics.add.staticImage(70, 120, "rotate-cakePlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rotateCakePlatformHidden);
    this.platforms.push(this.rotateCakePlatformHidden)

    this.rotateCakePlatformHidden.setAlpha(0)


    // Plateforme invisible pour le start
    this.rockPlatform = scene.physics.add.staticImage(100, 500, "rockPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.rockPlatform);
    this.platforms.push(this.rockPlatform)

    this.rockPlatform.setAlpha(0)


    // Plateforme de fail du saut 
    this.bigGrassPlatform1 = scene.physics.add.staticImage(450, 700, "big-grassPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform1);
    this.platforms.push(this.bigGrassPlatform1)

    this.snowPlatform = scene.physics.add.staticImage(700, 570, "snowPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);
    this.platforms.push(this.snowPlatform)

    this.snowPlatform = scene.physics.add.staticImage(970, 520, "snowPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);
    this.platforms.push(this.snowPlatform)

    // Plateforme pour atteindre le end (cake)
    this.bigcakePlatform = scene.physics.add.staticImage(1250, 400, "big-cakePlatform");
    this.platforms.push(this.bigcakePlatform)


    this.bigcakePlatform = scene.physics.add.staticImage(1310, 280, "big-cakePlatform");
    this.platforms.push(this.bigcakePlatform)

    // Bordure pour ne pas passer à droite 

    this.collideBorder = scene.physics.add.staticImage(1280, 360, "collideborder");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorder)
    this.collideBorder.setAlpha(0)

    //this.sprite = scene.physics.add.staticImage(200, 200, "snowPlatform");

    // this.sprite = scene.physics.add.staticImage(x, y, "cakePlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "big-grassPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "grassPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "dirtPlatform");

  }

  destroy() {
    for (let i = 0; i < this.platforms.length; i++) {
      this.platforms[i].destroy()
    }
  }

  initCollider(target) {
    for (let i = 0; i < this.platforms.length; i++) {
      this.scene.physics.add.collider(target, this.platforms[i]);
    }
  }
  update() { }
}
