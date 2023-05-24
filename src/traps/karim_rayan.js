// class SawTrap extends Trap {
//   scene
//   platformSprite
//   platformSprite2
//   discSprite

//   x
//   y

//   constructor(scene, x, y) {
//     super()

//     this.scene = scene
//     this.x = x
//     this.y = y

//     //this.discSprite = scene.physics.add.image(x, y-10, "trap-saw-disc");
//     //this.discSprite.setScale(0.2)
//     //this.discSprite.body.setAllowGravity(false)

//     this.platformSprite = scene.physics.add.image(400, 300, "trap-saw-platform");
//     this.platformSprite.setScale(0.5)
//     this.platformSprite.body.setAllowGravity(false)

//     this.platformSprite2 = scene.physics.add.image(400, 500, "trap-saw-platform2");
//     this.platformSprite2.setScale(0.5)
//     this.platformSprite2.body.setAllowGravity(false)

//     this.initialY = 200; // Stockez la position initiale de la plateforme

//     this.platformSprite.setVelocityY(100)
//   }

//   update() {
//     if (this.platformSprite.body.y > this.initialY + 200) {
//       this.platformSprite.setVelocityY(-40)
//     } else if (this.platformSprite.body.y < this.initialY) {
//       this.platformSprite.setVelocityY(200) // Réinitialisez la vitesse pour la faire redescendre
//     }
//   }
// }