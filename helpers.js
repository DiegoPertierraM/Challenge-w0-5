// -- 1

export const generatePiramid = (height) => {
  let counter = height;
  let piramid = '*';
  piramid = ' '.repeat(height) + piramid;
  for (let i = 0; i < height; i++) {
    piramid += ' '.repeat(counter) + '**'.repeat(i);
    piramid = piramid + '\n';
    counter--;
  }
  return piramid;
};

// -- 2

export const generateRandomPassword = (passwordLength) => {
  if (passwordLength < 6) {
    return 'La contraseña debe contener más de 6 caracteres';
  }
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < passwordLength) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

// -- 3

export const filterNames = (arr, maxLength) => {
  const shortNames = arr.filter((name) => name.length < maxLength);
  return shortNames;
};

// -- 4

const sumArray = (arr) => {
  const sum = arr.reduce((accumulator, value) => accumulator + value, 0);
  return sum;
};

const calcAverage = (arr) => {
  const average = sumArray(arr) / arr.length;
  return average;
};

const calcMedian = (arr) => {
  const median = arr[Math.trunc(arr.length / 2)];
  return median;
};

const calcMode = (arr) => {
  const sortedArray = arr.sort();
  return sortedArray;
  const mode = sumArray(arr) / arr.length;
  return mode;
};

export const operateNumArray = (arr) => {
  const operations = {
    sum: sumArray(arr),
    average: calcAverage(arr),
    median: calcMedian(arr),
    mode: calcMode(arr),
  };
  return operations;
};

// -- 5

export const countWords = (phrase) => {
  return phrase.split(' ').length;
};

// -- 6

export const sortArray = (nameArray) => {
  return nameArray.sort();
};

// -- 7

export const generateEvensAndOdds = (num) => {
  const evenNums = [];
  const oddNums = [];
  const numbers = {
    evens: evenNums,
    odds: oddNums,
  };
  let counter = num;
  while (counter > 0) {
    if (counter % 2 === 0) {
      evenNums.push(counter);
    } else {
      oddNums.push(counter);
    }
    counter--;
  }
  return numbers;
};

// -- 8

export const turnToCamelCase = (str) => {
  if (str === ' ') {
    return 'You must provide some text';
  }
  const textArr = str.split('');
  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] === textArr[i].toUpperCase() && textArr[i] !== '-') {
      return 'The text contains capital letters';
    }
    if (textArr[i] === '_') {
      return 'The text contains underscores';
    }
    if (textArr[i] === '-') {
      textArr.splice(i, 1);
      textArr[i] = textArr[i].toUpperCase();
    }
  }
  return textArr.join('');
};

// -- 9

// -- 10

// -- 11
