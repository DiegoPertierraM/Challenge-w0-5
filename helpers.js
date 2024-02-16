// -- 1

export const generatePiramid = (height) => {
  let piramid = '*';
  for (let i = 1; i < height; i++) {
    console.log(piramid);
    piramid += '**';
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

// -- 4

// -- 5

// -- 6

// -- 7

// -- 8

// -- 9

// -- 10

// -- 11
