const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
      gravity: { y: 400 },
    },
  },
  audio: {
    disableWebAudio: true,
  },
<<<<<<< HEAD
  scene: Scene2,
=======
  scene: Scene,
>>>>>>> 0a7c3da89f2db5e01d7037530ac9d9539cfeb25f
};

const game = new Phaser.Game(config);
