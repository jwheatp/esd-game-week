class PlatformLevels {
  scene;

  bigGrassPlatform

  constructor(scene) {
    this.scene = scene;

    // this.bigGrassPlatform = scene.physics.add.staticImage(150, 500, "big-grassPlatform");
    // this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);



    this.bigGrassPlatform = scene.physics.add.staticImage(800, 220, "big-grassPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);

    // Platforme en gateau à 90degré au milieu de la map
    this.rotateBigCakePlatform = scene.physics.add.staticImage(500, 400, "rotate-big-cakePlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatform);

    // Montagne à gauche
    this.rockdecoration = scene.physics.add.staticImage(40, 430, "rockdecoration");



    // Bloc invisible pour tout à gauche
    this.rotateBigCakePlatformHidden = scene.physics.add.staticImage(10, 380, "rotate-big-cakePlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatformHidden);
    this.rotateBigCakePlatformHidden.setAlpha(0)


    // Bloc invisible pour ne pas
    this.rotateBigCakePlatformHidden = scene.physics.add.staticImage(200, 640, "rotate-big-cakePlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatformHidden);
    this.rotateBigCakePlatformHidden.setAlpha(0)

    this.rotateBigCakePlatformHidden = scene.physics.add.staticImage(250, 740, "rotate-big-cakePlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.rotateBigCakePlatformHidden);
    this.rotateBigCakePlatformHidden.setAlpha(0)


    // Bloc invisible pour hitbox à l'horizontale dans la montage
    this.rockPlatform = scene.physics.add.staticImage(30, 310, "rockPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.rockPlatform);
    this.rockPlatform.setAlpha(0)


    // Bloc invisible pour hitbox à 40degré sur la montagne
    this.rotateCakePlatformHidden = scene.physics.add.staticImage(65, 250, "rotate-cakePlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.rotateCakePlatformHidden);
    this.rotateCakePlatformHidden.setAlpha(0)
    this.rotateCakePlatformHidden = scene.physics.add.staticImage(70, 120, "rotate-cakePlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.rotateCakePlatformHidden);
    this.rotateCakePlatformHidden.setAlpha(0)


    // Plateforme invisible pour le start
    this.rockPlatform = scene.physics.add.staticImage(100, 500, "rockPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.rockPlatform);
    this.rockPlatform.setAlpha(0)


    // Plateforme de fail du saut 
    this.bigGrassPlatform = scene.physics.add.staticImage(450, 670, "big-grassPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);

    this.bigGrassPlatform = scene.physics.add.staticImage(1000, 570, "big-grassPlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigGrassPlatform);


    // Plateforme pour atteindre le end (cake)
    this.bigcakePlatform = scene.physics.add.staticImage(1250, 370, "big-cakePlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigcakePlatform)


    this.bigcakePlatform = scene.physics.add.staticImage(1310, 280, "big-cakePlatform");
    this.scene.physics.add.collider(this.scene.player.sprite, this.bigcakePlatform)


    // Bordure pour ne pas passer à droite 

    this.collideBorder = scene.physics.add.staticImage(1280, 360, "collideborder");
    this.scene.physics.add.collider(this.scene.player.sprite, this.collideBorder)
    this.collideBorder.setAlpha(0)

    //this.sprite = scene.physics.add.staticImage(200, 200, "snowPlatform");

    // this.sprite = scene.physics.add.staticImage(x, y, "cakePlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "big-grassPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "grassPlatform");
    // this.sprite = scene.physics.add.staticImage(x, y, "dirtPlatform");

  }
}
