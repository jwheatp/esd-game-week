class Score {
  textscore;
  scene;

  barrescore;
  ficelle;

  constructor(scene, x, y) {
    this.scene = scene;
  }
  showScore() {
    this.barrescore?.destroy();
    this.ficelle?.destroy();

    this.barrescore = this.scene.add.image(1000, 50, "barre");
    this.ficelle = this.scene.add.image(1000, 10, "ficelle");
    const iconOffsetX = 793;
    const iconSpacingX = 130;
    const playerPositions = [];

    const players = this.scene.multiplayerSystem.players();

    for (let i = 0; i < players.length; i++) {
      const position = {
        x: iconOffsetX + i * iconSpacingX,
        y: 50,
        icon: `icon-player${i + 1}`,
      };
      playerPositions.push(position);
    }

    for (let i = 0; i < players.length; i++) {
      const player = players[i];

      const position = playerPositions[i];

      const scoreTextX = position.x + 50;

      const icon = this.scene.add.image(position.x, position.y, position.icon);
      const scoreText = this.scene.add.text(scoreTextX, 45, player.score, {
        fontFamily: `pangolin, cursive`,
        fontSize: "20px",
        color: "black",
      });
      icon.alpha = 1;
      scoreText.alpha = 1;
    }
    // mise à jour du score pour le joueur 1 avec un score de 1
    //this.updateScore(1, 1);
  }
  // updateScore(playerIndex, newScore) {
  //   // Mettre à jour le score du joueur correspondant
  //   if (playerIndex >= 0 && playerIndex < this.playerScores.length) {
  //     this.playerScores[playerIndex] = newScore;
  //     // Mettre à jour l'affichage du score
  //   }
  // }
}
