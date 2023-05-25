class Phase {
  started = false

  scene

  constructor(scene) {
    this.scene = scene
  }

  before() {

  }

  run() {

  }

  after() {

  }

  setTitle(title) {
    this.scene.phaseTitle.alpha = 1
    
    this.scene.phaseTitle.setText(title)

    setTimeout(() => {
      this.scene.phaseTitle.alpha = 0
    }, 2000)
  }

  isDone() {
    return false
  }
}