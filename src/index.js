const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {


    let exprItem = '';
    for (let i = 0; i < expr.length; i++) {
        exprItem = expr.match(/(.{1,10})/g)
    }
    for (let i = 0; i < exprItem.length; i++) {
        exprItem[i] = exprItem[i].split('00').join('')
    }
    console.log(exprItem)

    let b = []
    let c = []


    for (let key in MORSE_TABLE) {
        let a = []
        for (let i = 0; i < key.length; i++) {
            if (key[i] === '.') { a[i] = '10' } else if (key[i] === '-') { a[i] = '11' }
        }
        b = a.join('')

        for (let i = 0; i < exprItem.length; i++) { if (exprItem[i] === b) { c[i] = MORSE_TABLE[key] } else if (exprItem[i] === '**********') { c[i] = ' ' } }

    }
    return (c.join(''))
}

module.exports = {
    decode
}