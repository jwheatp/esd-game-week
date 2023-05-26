class DoorMainTrap extends Trap {
  constructor(scene, x, y) {
    super(scene, x, y)

    this.x = x
    this.y = y

    const doorTrap = new DoorTrap(this.scene, x, y);
    this.scene.traps.push(doorTrap);

    const openedTrap = new OpenedTrap(this.scene, x, y);
    this.scene.traps.push(openedTrap);
  }
}