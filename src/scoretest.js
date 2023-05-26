class Score {
  textscore;
  scene;

  constructor(scene, x, y) {
    this.scene = scene;
  }
  showScore() {
    this.barrescore = this.scene.add.image(1000, 50, "barre");
    this.ficelle = this.scene.add.image(1000, 10, "ficelle");
    const iconOffsetX = 800;
    const iconSpacingX = 130;
    const playerPositions = [];

    const players = this.scene.multiplayerSystem.players();

    console.log(players);

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
        fontSize: "16px",
        color: "black",
      });
      icon.alpha = 1;
      scoreText.alpha = 1;
    }
  }
}
