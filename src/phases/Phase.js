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

  setTitle(title, timeout = true) {
    this.scene.phaseTitle.alpha = 1
    
    this.scene.phaseTitle.setText(title)

    if(timeout) {
      setTimeout(() => {
        this.scene.phaseTitle.alpha = 0
      }, 2000)
    }

  }

  isDone() {
    return false
  }
}