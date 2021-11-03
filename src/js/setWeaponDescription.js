/** @module setWeaponDescription */
/**
 * Setting default value for weapon's secret description
 * @param {Object} character - Input character object to destruct and proxy.
 * @param {(string|Object[])} values - Array with keys, which will be used for sorting.
 * @return  {Array.<Object>} The sorted array of objects.
 */
export default function setWeaponDescription(character) {
  if (typeof character === 'object' && !Array.isArray(character) && character !== null) {
    if ('special' in character) {
      const { special } = character;
      special.forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        (el ?? {}).description ??= 'Описание недоступно';
      });
      return special;
    }
  }
  throw new Error('Character argument should be an Object');
}
