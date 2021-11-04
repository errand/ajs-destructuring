import setWeaponDescription from './setWeaponDescription';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
};

console.log(setWeaponDescription(character));
