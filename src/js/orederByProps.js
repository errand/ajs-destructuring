/** @module setWeaponDescription */
/**
 * Setting default value for weapon's secret description
 * @param {Object} character - Input character object to destruct and proxy.
 * @param {(string|Object[])} values - Array with keys, which will be used for sorting.
 * @return  {Array.<Object>} The sorted array of objects.
 */
export default function setWeaponDescription(character) {
  if (typeof character === 'object' && !Array.isArray(character) && character !== null) {

  }
  throw new Error('Character argument should be an Object');
}
