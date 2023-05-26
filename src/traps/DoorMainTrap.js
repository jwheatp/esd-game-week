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

  update(time) {
    this.setup()

    this.doorTrap.update(time)
    this.openedTrap.update(time)

  }
}