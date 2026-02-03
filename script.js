function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = "";

  const special = [
    ['CM', 900],
    ['CD', 400],
    ['XC', 90],
    ['XL', 40],
    ['IX', 9],
    ['IV', 4]
  ];

  for (let i = 0; i < special.length; i++) {
    while (num >= special[i][1]) {
      result += special[i][0];
      num -= special[i][1];
    }
  }

  for (let key in obj) {
    let symbol = obj[key][0];
    let value = obj[key][1];

    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}
