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

   let oneZeroArray = [];
   let oneZeroLetterArray = [];
   let dotsDashesArray = [];
   let letterArray = [];

   let n = 0;
   while (n < expr.length) {
   oneZeroArray.push(expr.slice(n, n + 10));
   n = n + 10; };

   let m = 0;
   while (m < oneZeroArray.length) {
   let a = 0;
   while (a <= 10) {
   if (oneZeroArray[m].slice(a, a + 2) === '10') {
   oneZeroLetterArray.push('.');
   } else if (oneZeroArray[m].slice(a, a + 2) === '11') {
    oneZeroLetterArray.push('-');
   } else if (oneZeroArray[m].slice(a, a + 2) === '**') {
    oneZeroLetterArray.push('');}
    a = a + 2;
   };
   dotsDashesArray.push(oneZeroLetterArray.join(''));
   oneZeroLetterArray.length = 0;
   m++;
   };

   let b = 0;
   while (b < dotsDashesArray.length) {
   if (dotsDashesArray[b] === '') {
   letterArray.push(' ');
   } else {
   letterArray.push(MORSE_TABLE[dotsDashesArray[b]]);
   }
   b++;
   };

   return letterArray.join('');

};

module.exports = {
    decode
}