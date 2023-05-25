class GameManager {

  nbRounds = 5

  index = 0

  delta = 1000

  round

  constructor(scene) {
    this.scene = scene
    this.round = new Round(this.scene, 0)
  }

  run() {
    if(!this.round.started) {
      this.round.run()
      this.round.started = true
    }

    if(this.round.isDone) {
      this.index++

      if(this.index == this.nbRounds) {
        console.log("FIN")
        this.isDone = true
        return
      }

      this.round = new Round(this.scene, this.index)
    } 
    setTimeout(() => this.run(), this.delta)
  }
}