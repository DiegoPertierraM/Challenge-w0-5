import {
  generatePiramid,
  generateRandomPassword,
  filterNames,
  operateNumArray,
  countWords,
  sortArray,
  generateEvensAndOdds,
  turnToCamelCase,
  turnToAllCases,
} from './helpers.js';

console.log(generatePiramid(7));
console.log('generateRandomPassword: ', generateRandomPassword(8));
console.log(
  'filterNames: ',
  filterNames(['Pepe', 'Margarita', 'Sol', 'Manolo'], 6)
);
console.log('operateNumArray: ', operateNumArray([2, 8, 3, 14, 7, 2]));
console.log('countWords: ', countWords('Hola me llamo Pedro'));
console.log('sortArray: ', sortArray(['Casa', 'Palmera', 'Boda', 'Xilófono']));
console.log('generateEvensAndOdds: ', generateEvensAndOdds(23));
console.log('turnToCamelCase: ', turnToCamelCase('random-word'));
console.log('turnToAllCases: ', turnToAllCases('anotherRandomWord'));
