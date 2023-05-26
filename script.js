const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 2000 },
    },
  },
  audio: {
    disableWebAudio: true,
  },
  scene: Scene,
};

const game = new Phaser.Game(config);
