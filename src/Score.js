// class Score {
//   textscore;
//   scene;

//   constructor(scene, x, y) {
//     this.scene = scene;
//   }
//   showScore() {
//     this.barrescore = this.scene.add.image(1000, 50, "barre");

//     this.ficelle = this.scene.add.image(1000, 10, "ficelle");
//     this.scoreicon = this.scene.add.image(800, 50, "icon-player1");
//      this.scoreText = this.scene.add.text(850, 45,this.scene.player, {
//        fontSize: "16px",
//        color: "black",
//      });
//     this.scoreicon1 = this.scene.add.image(930, 50, "icon-player2");
//     this.scoreicon2 = this.scene.add.image(1050, 50, "icon-player3");
//     this.scoreicon3 = this.scene.add.image(1165, 50, "icon-player4");

//     this.barrescore.alpha = 1;
//     this.ficelle.alpha = 1;
//     this.scoreicon.alpha = 1;
//     this.scoreicon1.alpha = 1;
//     this.scoreicon2.alpha = 1;
//     this.scoreicon3.alpha = 1;
//     this.scoreText.alpha = 1;

//   }
//   players(){
//     for (var i = 0; i < this.scene.player.length; i++) {
//       var joueur = joueurs[i];
//       console.log(this.showScore);

//     }
//   }

// //   winRound() {
// //     if (this.scene.isgameover) {
// //       return;
// //     }
// //     this.score += 1;
// //     this.scoreText.setText("player:" + this.score);
// //     this.scene.sound.play("gamewin");
// //   }
//   setup() {
//     //     if (this.scene.isGameStared) {
//     //       this.barrescore.alpha = 1;
//     //     }
//   }
// }
