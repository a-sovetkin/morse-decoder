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
    let str = expr.split('**********');

    let res = '';
    let decode = '';

    for (let word of str) {
        count = 1;
        for ( let i=0; i < word.length; i=i+2 ) {
            if (word.slice(i, i+2) == '10') res += '.';
            if (word.slice(i, i+2) == '11') res += '-';

            if ( count % 5 == 0) {
                console.log(' true % 5 ');
                decode += MORSE_TABLE[res];
                res = '';
                count = 1;
            }
            else {
                count++;
            }
        }
        decode +=' ';
    }
    decode = decode.trim();
    return decode;
}

module.exports = {
    decode
}