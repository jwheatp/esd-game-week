const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: { y: 400 },
    },
  },
  audio: {
    disableWebAudio: true
  },
  scene: Scene4,
};

const game = new Phaser.Game(config);
