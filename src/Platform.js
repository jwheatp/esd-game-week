class Platform {
  scene;
  sprite;

  constructor(scene, x, y) {
    this.scene = scene;

    this.sprite = scene.physics.add.staticImage(x, y, "platform");
  }
}
// N&M
// class Bloc {
//   scene;
//   sprite;
//   monster;

//   constructor(scene, x, y) {
//     this.scene = scene;

//     this.sprite = scene.physics.add.staticImage(x, y, "bloc");
//   }
// }
