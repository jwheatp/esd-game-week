

// class Trap1 extends Trap {
//   scene;
//   platformSprite;
//   discSprite;
//   Trap1Sprite;

//   x;
//   y;
//   trap1StartY;
//   trap1Distance;
//   trap1Speed;

//   constructor(scene, x, y) {
//     super();

//     this.scene = scene;
//     this.x = x;
//     this.y = y;

// <<<<<<< HEAD
//     this.discSprite = scene.physics.add.image(x, y - 10, "trap-saw-disc");
//     this.discSprite.setScale(0.2);
//     this.discSprite.body.setAllowGravity(false);

//     this.platformSprite = scene.physics.add.image(x, y, "trap-saw-platform");
//     this.platformSprite.setScale(0.1);
//     this.platformSprite.body.setAllowGravity(false);

//     this.Trap1Sprite = scene.physics.add.image(x + 280, y - 10, "trap-saw-Trap1");
//     this.Trap1Sprite.setScale(1);
//     this.Trap1Sprite.body.setAllowGravity(false);

//     this.discSprite.setVelocityX(20);

//     // Variables pour le mouvement de la sprite Trap1
//     this.trap1StartY = y - 30; // Position de départ en Y
//     this.trap1Distance = 130; // Distance de descente en cm
//     this.trap1Speed = 1.3; // Vitesse de déplacement en pixels par seconde

//     // Appel initial de l'animation
//     this.animateTrap1();
//   }

//   update() {
//     if (this.discSprite.body.x > this.x + 45) {
//       this.discSprite.setVelocityX(-20);
//     }
//   }

//   // Fonction pour animer le mouvement de la sprite Trap1
//   animateTrap1() {
//     // Animation de descente
//     this.scene.tweens.add({
//       targets: this.Trap1Sprite,
//       y: this.trap1StartY + this.trap1Distance,
//       duration: this.trap1Distance * 10 / this.trap1Speed, // Durée basée sur la vitesse de déplacement
//       onComplete: () => {
//         // Animation de remontée
//         this.scene.tweens.add({
//           targets: this.Trap1Sprite,
//           y: this.trap1StartY,
//           duration: this.trap1Distance * 10 / this.trap1Speed, // Durée basée sur la vitesse de déplacement
//           onComplete: () => this.animateTrap1() // Appel récursif pour boucler l'animation
//         });
//       }
//     });
//   }
// }
