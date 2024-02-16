import {
  generatePiramid,
  generateRandomPassword,
  filterNames,
  operateNumArray,
  countWords,
} from './helpers.js';

console.log(generatePiramid(7));
console.log('generateRandomPassword: ', generateRandomPassword(8));
console.log(
  'filterNames: ',
  filterNames(['Pepe', 'Margarita', 'Sol', 'Manolo'], 6)
);
console.log('operateNumArray: ', operateNumArray([2, 8, 3, 14, 7, 2]));
console.log('countWords: ', countWords('Hola me llamo Pedro'));
