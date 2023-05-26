class DoorMainTrap extends Trap {
  doorTrap
  openedTrap

  constructor(scene, x, y) {
    super(scene, x, y)

    this.x = x
    this.y = y

    this.doorTrap = new DoorTrap(this.scene, x, y);
    // this.scene.traps.push(doorTrap);

    this.openedTrap = new OpenedTrap(this.scene, x, y);
    // this.scene.traps.push(openedTrap);
  }

  setX(x) {
    this.openedSprite.x = x
    this.hitboxSprite.x = x
    this.doorSprite.x = x
  }

  setY(y) {
    this.openedSprite.y = y
    this.hitboxSprite.y = y
    this.doorSprite.y = y
  }

  update(time) {
    this.setup()

    this.doorTrap.update(time)
    this.openedTrap.update(time)

  }
}