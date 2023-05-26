class LobbyPhase extends Phase {
  constructor(scene) {
    super(scene);
  }

  run() {
    this.setTitle("Attribution des joueurs", false);

    console.log("/// Run - LobbyPhase");
    console.log(this.scene);

    // if(!this.scene.playerInitialized) {
    //   this.scene.player = new Player(this.scene, 100, 600);
    //   this.scene.playerInitialized = true
    // }
    if (this.scene.player) {
      this.scene.player.reset();
      this.scene.player.sprite.setPosition(
        this.scene.startX,
        this.scene.startY
      );
      this.scene.player.freeze();
    }

    // attribuer au player un piège aléatoire
  }

  isDone() {
    // tous les pièges sont posés
    return this.scene.multiplayerSystem.players().length === 2;
  }
}
