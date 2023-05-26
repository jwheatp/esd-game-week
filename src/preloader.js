class Preloader {
  constructor(scene) {
    // scene.load.image("scene1", "assets/scene1.jpg");
    scene.load.image("scene1", "assets/scene1.jpg");
    scene.load.image("scene2", "assets/scene2.jpg");

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
    scene.load.audio("hit", "assets/audio/bruh.mp3");
    scene.load.audio("fall", "assets/audio/wow.mp3");

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
    scene.load.image("trap-saw-spike", "assets/traps/spike/piege2.png");
    scene.load.image("trap-saw-platform2", "assets/traps/spike/piege.png");

    // new trap sixte antoine
    scene.load.image("trap-blackHole", "assets/traps/blackHole.png");

    //animation player
    //skin1
    scene.load.image("player-1-death", "assets/skin/playerOne-all/playerOne-Death.png");
    scene.load.image("player-1-jump", "assets/skin/playerOne-all/playerOne-Jump.png");
    scene.load.image("player-1-run", "assets/skin/playerOne-all/playerOne-Run.png");
    scene.load.image("player-1-walk", "assets/skin/playerOne-all/playerOne-Walk.png");
    scene.load.image("player-1-idl", "assets/skin/playerOne-all/playerOne.png");

    scene.load.image("player-1-move1", "assets/skin/playerOne-all/victoryDanceOne/move1.png");
    scene.load.image("player-1-move2", "assets/skin/playerOne-all/victoryDanceOne/move2.png");

    //skin2
    scene.load.image("player-2-death", "assets/skin/playerTwo-all/playerTwo-Death.png");
    scene.load.image("player-2-jump", "assets/skin/playerTwo-all/playerTwo-Jump.png");
    scene.load.image("player-2-run", "assets/skin/playerTwo-all/playerTwo-Run.png");
    scene.load.image("player-2-walk", "assets/skin/playerTwo-all/playerTwo-Walk.png");
    scene.load.image("player-2-idl", "assets/skin/playerTwo-all/playerTwo.png");

    scene.load.image("player-2-move1", "assets/skin/playerTwo-all/victoryDanceTwo/move1.png");
    scene.load.image("player-2-move2", "assets/skin/playerTwo-all/victoryDanceTwo/move2.png");
    scene.load.image("player-2-move3", "assets/skin/playerTwo-all/victoryDanceTwo/move3.png");
    scene.load.image("player-2-move4", "assets/skin/playerTwo-all/victoryDanceTwo/move4.png");

    //skin3
    scene.load.image("player-3-death", "assets/skin/playerThree-all/playerThree-Death.png");
    scene.load.image("player-3-jump", "assets/skin/playerThree-all/playerThree-Jump.png");
    scene.load.image("player-3-run", "assets/skin/playerThree-all/playerThree-Run.png");
    scene.load.image("player-3-walk", "assets/skin/playerThree-all/playerThree-Walk.png");
    scene.load.image("player-3-idl", "assets/skin/playerThree-all/playerThree.png");

    scene.load.image("player-3-move1", "assets/skin/playerThree-all/victoryDanceThree/move1.png");
    scene.load.image("player-3-move2", "assets/skin/playerThree-all/victoryDanceThree/move2.png");

    //skin4
    scene.load.image("player-4-death", "assets/skin/playerFour-all/playerFour-Death.png");
    scene.load.image("player-4-jump", "assets/skin/playerFour-all/playerFour-Jump.png");
    scene.load.image("player-4-run", "assets/skin/playerFour-all/playerFour-Run.png");
    scene.load.image("player-4-walk", "assets/skin/playerFour-all/playerFour-Walk.png");
    scene.load.image("player-4-idl", "assets/skin/playerFour-all/playerFour.png");

    scene.load.image("player-4-move1", "assets/skin/playerFour-all/victoryDanceFour/move1.png");
    scene.load.image("player-4-move2", "assets/skin/playerFour-all/victoryDanceFour/move2.png");
    scene.load.image("player-4-move3", "assets/skin/playerFour-all/victoryDanceFour/move3.png");
    scene.load.image("player-4-move4", "assets/skin/playerFour-all/victoryDanceFour/move4.png");
    scene.load.image("player-4-move5", "assets/skin/playerFour-all/victoryDanceFour/move5.png");
    scene.load.image("player-4-move6", "assets/skin/playerFour-all/victoryDanceFour/move6.png");
    scene.load.image("player-4-move7", "assets/skin/playerFour-all/victoryDanceFour/move7.png");

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
