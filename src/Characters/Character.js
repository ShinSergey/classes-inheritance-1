export default class Character {
  constructor(name, type) {
    if (name.length < 1 || name.length > 9) {
      throw new Error('Параметр name должен содержать от 2 до 10 символов');
    }
    if (type !== 'Bowerman' || type !== 'Swordsman' || type !== 'Magician' || type !== 'Daemon' || type !== 'Undead' || type !== 'Zombie') {
      throw new Error('Класс не найден');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
