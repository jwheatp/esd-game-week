class SetupPhase extends Phase {
  constructor(scene) {
    super(scene)
  }

  run() {
    this.setTitle("Placement des pièges")
    
    console.log("/// Run - SetupPhase")

    const trap = Trap.createRandomTrap(this.scene, 200, 200)
    trap.canSetupTrap = true;
    trap.initCursor();

    // attribuer au player un piège aléatoire


  }

  isDone() {
    // tous les pièges sont posés
    return this.scene.traps.filter(t => !t.isSettled).length === 0
  }
}