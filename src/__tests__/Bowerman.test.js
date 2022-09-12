import Bowerman from '../Characters/Bowerman';

test('Create Bowerman', () => {
  const received = new Bowerman('Bob', 'Bowerman');
  const expected = {
    name: 'Bob',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});
