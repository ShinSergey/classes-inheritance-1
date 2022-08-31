export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 1 || name.length > 9) {
      throw new Error('Параметр name должен содержать от 2 до 10 символов');
    }
    if (!types.includes(type)) {
      throw new Error('Класс не найден');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
