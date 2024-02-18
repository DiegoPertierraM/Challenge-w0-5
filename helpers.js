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
  const numbers = arr;
  const count = {};
  numbers.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });
  let mode;
  let maxCount = 0;
  for (const num in count) {
    if (count[num] > maxCount) {
      mode = num;
      maxCount = count[num];
    }
  }
  return Number(mode);
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
  while (counter < 0) {
    if (counter % 2 === 0) {
      evenNums.push(counter);
    } else {
      oddNums.push(counter);
    }
    counter++;
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

// -- Adicional - 1

const turnToKebabCase = (str) => {
  const textArr = str.split('');
  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] === textArr[i].toUpperCase()) {
      textArr[i] = textArr[i].toLowerCase();
      textArr.splice(i, 0, '-');
    }
  }
  return textArr.join('');
};

const turnToSnakeCase = (str) => {
  const textArr = str.split('');
  for (let i = 0; i < textArr.length; i++) {
    if (textArr[i] === textArr[i].toUpperCase()) {
      textArr[i] = textArr[i].toLowerCase();
      textArr.splice(i, 0, '_');
    }
  }
  return textArr.join('');
};

const turnToPascalCase = (str) => {
  const textArr = str.split('');
  textArr[0] = textArr[0].toUpperCase();
  return textArr.join('');
};

export const turnToAllCases = (str) => {
  if (str === ' ') {
    return 'You must provide some text';
  }
  const allCases = {
    kebabCase: turnToKebabCase(str),
    snakeCase: turnToSnakeCase(str),
    camelCase: str,
    pascalCase: turnToPascalCase(str),
  };
  return allCases;
};

// -- Adicional - 2

function accentuateVowel(letter) {
  const accents = {
    a: 'á',
    e: 'é',
    i: 'í',
    o: 'ó',
    u: 'ú',
    A: 'Á',
    E: 'É',
    I: 'Í',
    O: 'Ó',
    U: 'Ú',
  };
  return accents[letter] || letter;
}

function removeAccents(letter) {
  const vowels = {
    á: 'a',
    é: 'e',
    í: 'i',
    ó: 'o',
    ú: 'u',
    Á: 'A',
    É: 'E',
    Í: 'I',
    Ó: 'O',
    Ú: 'U',
  };
  return vowels[letter] || letter;
}

export const switchTextAccents = (str) => {
  const strArr = str.split('');
  const accents = ['Á', 'É', 'Í', 'Ó', 'Ú', 'á', 'é', 'í', 'ó', 'ú'];
  const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < strArr.length; i++) {
    if (accents.includes(strArr[i])) {
      strArr[i] = removeAccents(strArr[i]);
    } else if (vowels.includes(strArr[i])) {
      strArr[i] = accentuateVowel(strArr[i]);
    }
  }
  return strArr.join('');
};

// -- Adicional - 3

export const switchUpperAndLowerCase = (str) => {
  const strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      strArr[i] = strArr[i].toLowerCase();
    } else {
      strArr[i] = strArr[i].toUpperCase();
    }
  }
  return strArr.join('');
};
