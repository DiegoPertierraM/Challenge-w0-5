import {
  generatePiramid,
  generateRandomPassword,
  filterNames,
} from './helpers.js';

console.log(generatePiramid(7));
console.log('generateRandomPassword: ', generateRandomPassword(8));
console.log(
  'filterNames: ',
  filterNames(['Pepe', 'Margarita', 'Sol', 'Manolo'], 6)
);
