class Preloader {

  constructor(scene) {
    // scene.load.image("scene1", "assets/scene1.jpg");

    scene.load.image("fall-collider", "assets/platforms/fallcollider.png");

    scene.load.image("player", "assets/player-idle.png");
    scene.load.image("platform", "assets/platform.png");

    // platforms
    scene.load.image("trap-saw-platform", "assets/traps/saw/platform.png");

    scene.load.image(
      "big-grassPlatform",
      "assets/platforms/big-grassPlatform.png"
    );
    scene.load.image("big-icePlatform", "assets/platforms/big-icePlatform.png");
    scene.load.image(
      "big-cakePlatform",
      "assets/platforms/big-cakePlatform.png"
    );
    scene.load.image(
      "rotate-big-cakePlatform",
      "assets/platforms/90big-cakePlatform.png"
    );
    scene.load.image("cakePlatform", "assets/platforms/cakePlatform.png");
    scene.load.image(
      "rotate-cakePlatform",
      "assets/platforms/40cakePlatform.png"
    );
    scene.load.image("icePlatform", "assets/platforms/icePlatform.png");
    scene.load.image("rockPlatform", "assets/platforms/rockPlatform.png");
    scene.load.image("snowPlatform", "assets/platforms/snowPlatform.png");
    scene.load.image("grassPlatform", "assets/platforms/grassPlatform.png");
    scene.load.image("rockdecoration", "assets/platforms/rock_decoration.png");
    scene.load.image("dirtPlatform", "assets/platforms/dirtPlatform.png");
    scene.load.image(
      "bigsnowPlatform",
      "assets/platforms/big-snowPlatform.png"
    );
    scene.load.image(
      "big-dirtPlatform",
      "assets/platforms/big-dirtPlatform.png"
    );
    scene.load.image("90dirtPlatform", "assets/platforms/90dirtPlatform.png");
    scene.load.image("brickCube", "assets/platforms/brickCube.png");
    scene.load.image(
      "double-bigdirtPlatform",
      "assets/platforms/double-bigdirtPlatform.png"
    );
    scene.load.image(
      "rotatesnowPlatform",
      "assets/platforms/rotatesnowPlatform.png"
    );

    //bandeau du score et icone du player
    scene.load.image("barre", "assets/traps/dev/barre.jpeg");
    scene.load.image("ficelle", "assets/traps/dev/ficelle.png");
    scene.load.image("icon-player1", "assets/traps/dev/rinocar.svg");
    scene.load.image("icon-player2", "assets/traps/dev/yellowmons.png");
    scene.load.image("icon-player3", "assets/traps/dev/bluemons.png");
    scene.load.image("icon-player4", "assets/traps/dev/redmons.png");

    // /!\ NE PAS SUPPRIMER HITBOX INVISIBLE, IL VA AVEC LE DRAPEAU
    scene.load.image("endPlatform", "assets/platforms/end.png");
    scene.load.image(
      "hitbox-invisible",
      "assets/platforms/hitbox-invisible.png"
    );

    scene.load.image("collideborder", "assets/platforms/collideborder.png");

    scene.load.image("trap-saw-disc", "assets/traps/saw/disc.png");

    //Assets sacha et faouzi

    //trap sacha et faouzi
    scene.load.image("trapplatform", "assets/traps/trapplatform.png");

    //audio sacha et faouzi
    scene.load.audio("gamesong", "assets/audio/game-song.mp3");
    scene.load.audio("gamewin", "assets/audio/win.mp3");
    scene.load.audio("gamelose", "assets/audio/lose.mp3");
    // scene.load.audio("jump", "assets/audio/jump-player.mp3");
    scene.load.audio("jump", "assets/audio/cartoonjump.mp3");
    scene.load.audio("teleport", "assets/audio/teleportation.mp3");
    scene.load.audio("run", "assets/audio/footstep_1.mp3");
    scene.load.audio("hit", "assets/audio/hitWall.mp3");

    //new trap ranime et celine
    scene.load.image("trapcomputer", "assets/traps/dev/trap2.png");
    scene.load.image("trapcss", "assets/traps/dev/css.png");
    scene.load.image("traphtml", "assets/traps/dev/html.png");
    scene.load.image("trapjs", "assets/traps/dev/js.png");
    scene.load.image("trapphp", "assets/traps/dev/php.png");
    scene.load.image("trapphp", "assets/traps/dev/wordpress.png");

    // new trap antonin & luca
    scene.load.image("trap-mode-closed", "assets/door/closed.png");
    scene.load.image("trap-mode-opened", "assets/door/opened.png");
    scene.load.image("trap-mode-hitbox", "assets/door/hitbox.png");

    //new trap narjisse et maeva
    scene.load.image("monster", "assets/traps/tibiscuit.jpeg");
    scene.load.image("barnacle", "assets/traps/monster.png");
    scene.load.image("trap-monster-ground", "assets/traps/bloc.png");
    scene.load.image("trap-monster-piques", "assets/traps/pique.png");
    scene.load.image("viseur-1", "assets/traps/viseur.png");

    // new trap karim et rayan
    // scene.load.image("trap-saw-spike", "assets/traps/spike/piege2.png");
    // scene.load.image("trap-saw-platform2", "assets/traps/spike/piege.png");

    // new trap sixte antoine
    scene.load.image("trap-blackHole", "assets/traps/blackHole.png");

    //animation player
    scene.load.image("player-death", "assets/skin/playerTwo-Death.png");
    scene.load.image("player-jump", "assets/skin/playerTwo-Jump.png");
    scene.load.image("player-run", "assets/skin/playerTwo-Run.png");
    scene.load.image("player-walk", "assets/skin/playerTwo-Walk.png");
    scene.load.image("player-idl", "assets/skin/playerTwo.png");
    //bandeau du score et icone du player
    // scene.load.image("string", "assets/traps/dev/.png");
    scene.load.image("blindfold-score", "assets/traps/dev/test2.png");
    scene.load.image("icon-player1", "assets/traps/dev/mario.png");
    scene.load.image("icon-player2", "assets/traps/dev/mario.png");
    scene.load.image("icon-player3", "assets/traps/dev/mario.png");
    scene.load.image("icon-player4", "assets/traps/dev/mario.png");
    scene.load.image("icon-player5", "assets/traps/dev/mario.png");
  }


}