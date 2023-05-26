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
    console.log(
      this.scene.multiplayerSystem.players().filter((p) => !p.hasFinished)
    );
    return (
      this.scene.multiplayerSystem.players().filter((p) => !p.hasFinished)
        .length === 0
    );
  }
}
