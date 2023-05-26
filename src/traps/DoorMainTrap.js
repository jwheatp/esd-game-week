class DoorMainTrap extends Trap {
  doorTrap;
  openedTrap;

  constructor(scene, x, y) {
    super(scene, x, y);

    this.x = x;
    this.y = y;

    this.doorTrap = new DoorTrap(this.scene, x, y);
    // this.scene.traps.push(doorTrap);

    this.openedTrap = new OpenedTrap(this.scene, x, y);
    // this.scene.traps.push(openedTrap);
  }

  setX(x) {
    this.openedTrap.openedSprite.x = x;
    this.openedTrap.hitboxSprite.x = x;
    this.doorTrap.doorSprite.x = x;

    this.x = x;
  }

  setY(y) {
    this.openedTrap.openedSprite.y = y;
    this.openedTrap.hitboxSprite.y = y;
    this.doorTrap.doorSprite.y = y;

    this.y = y;
  }

  update(time) {
    this.setup();

    this.doorTrap.update(time);
    this.openedTrap.update(time);
  }
}
