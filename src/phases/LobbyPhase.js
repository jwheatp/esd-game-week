class LobbyPhase extends Phase {
  constructor(scene) {
    super(scene)
  }

  run() {
    this.setTitle("Attribution des joueurs")

    console.log("/// Run - LobbyPhase")
    console.log(this.scene)

    if(!this.scene.playerInitialized) {
      this.scene.player = new Player(this.scene, 200, 400);
      this.scene.playerInitialized = true
    }
    this.scene.player.reset()
    this.scene.player.sprite.setPosition(200, 400)
    this.scene.player.freeze()

    // attribuer au player un piège aléatoire
  }

  isDone() {
    // tous les pièges sont posés
    return this.scene.player !== null
  }
}