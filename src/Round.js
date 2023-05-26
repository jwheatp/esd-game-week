class Round {
  scene

  phases = []

  index = 0

  delta = 500


  isStarted = false
  isDone = false

  roundIndex

  constructor(scene, roundIndex) {
    this.scene = scene
    this.roundIndex = roundIndex

    this.phases = [new LobbyPhase(scene), new SetupPhase(scene), new RacePhase(scene)]
  }

  setTitle(title) {
    this.scene.roundTitle.alpha = 1
    
    this.scene.roundTitle.setText(title)

    setTimeout(() => {
      this.scene.roundTitle.alpha = 0
    }, 2000)
  }

  before() {
    this.setTitle("Round " + (this.roundIndex+1))
    console.log('::: Round ', this.roundIndex)
  }

  run() {
    if(!this.phases[this.index].started) {
      this.phases[this.index].run()
      this.phases[this.index].started = true
    }

    if(this.phases[this.index].isDone()) {
      this.index++

      if(this.index == this.phases.length) {
        console.log("FIN")
        this.isDone = true
        return
      }
    } 
    setTimeout(() => this.run(), this.delta)
  }
}