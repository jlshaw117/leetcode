const numberToWords = (int) => {
    if (int === 0) return 'zero';

    const ones = {
        0: '',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };

    const teens = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };

    const tens = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninty'
    };

    const rec = (int) => {
        if (int < 20) {
            if(int < 10) {
                return ones[int];
            } else {
                return teens[int];
            }
        }
        let rem;
        let prefix;

        if (int < 100) {
            rem = int % 10;
            prefix = Math.floor(int / 10);
            return tens[prefix] + ' ' + ones[rem];
        } else if (int < 1000) {
            rem = int % 100;
            prefix = Math.floor(int / 100);
            return ones[prefix] + ' hundred ' + rec(rem);
        } else if (int < 1000000) {
            rem = int % 1000;
            prefix = Math.floor(int / 1000);
            return rec(prefix) + ' thousand ' + rec(rem);
        } else if (int < 1000000000) {
            rem = int % 1000000;
            prefix = Math.floor(int / 1000000);
            return rec(prefix) + ' million ' + rec(rem);
        } else {
            rem = int % 1000000000;
            prefix = Math.floor(int / 1000000000);
            return rec(prefix) + ' billion ' + rec(rem);

        }
    };

    return rec(int);
};

console.log(numberToWords(9999999990));