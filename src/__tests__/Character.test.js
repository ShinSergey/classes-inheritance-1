import Character from '../Characters/Character';

test('should create character', () => {
  const newChar = new Character('Sergey', 'Magician');

  expect(newChar).toEqual({
    name: 'Sergey',
    type: 'Magician',
    health: 100,
    level: 1,
  });
});

test('should throw error with name', () => {
  expect(new Character('Sergeyyyyy', 'Magician')).toThrow(new Error('Параметр name должен содержать от 2 до 10 символов'));
});

test('should throw error with type', () => {
  expect(new Character('Sergey', 'Berserker')).toThrow(new Error('Класс не найден'));
});
