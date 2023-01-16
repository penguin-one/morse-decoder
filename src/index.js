const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const arrWithWords = expr.split('**********'),
  arrWithLetters = [],
  arrReplacement = [],
  arrRes = [];

  for (let i = 0; i < arrWithWords.length; i++) {
  	arrWithLetters.push(arrWithWords[i].match(/.{1,10}/g)
                                       .join());
  }

  for (let j = 0; j < arrWithLetters.length; j++) {
  	arrReplacement.push(arrWithLetters[j].replace(/11/g, '-')
     									                   .replace(/10/g, '.')
     									                   .replace(/0/g, ''));
  }

  for(let k = 0; k < arrReplacement.length; k++) {
  	arrRes.push(arrReplacement[k].split(',').map((item) => MORSE_TABLE[item])
                                            .join(''));
  }

  return arrRes.join(' ');
}

module.exports = {
    decode
}