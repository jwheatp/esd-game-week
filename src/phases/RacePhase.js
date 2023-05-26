class RacePhase extends Phase {
  constructor(scene) {
    super(scene);
  }

  run() {
    this.setTitle("Jouez !");

    console.log("/// Run - RacePhase");
    this.scene.isGameOver = false;
    this.scene.score.showScore();
    this.scene.player.unfreeze();
  }

  isDone() {
    // tous les pièges sont posés
    console.log(this.scene.player.isDead || this.scene.player.hasWon);
    return this.scene.player.isDead || this.scene.player.hasWon;
  }
}
