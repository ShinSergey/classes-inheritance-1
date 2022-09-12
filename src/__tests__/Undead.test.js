import Undead from '../Characters/Undead';

test('Create Undead', () => {
  const received = new Undead('Bob', 'Undead');
  const expected = {
    name: 'Bob',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
