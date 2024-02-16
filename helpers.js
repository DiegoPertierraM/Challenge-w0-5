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

// -- 7

// -- 8

// -- 9

// -- 10

// -- 11
