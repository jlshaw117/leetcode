const numberToWords = (int) => {
    if (int === 0) return 'Zero';

    const ones = {
        0: '',
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: 'Five',
        6: 'Six',
        7: 'Seven',
        8: 'Eight',
        9: 'Nine'
    };

    const teens = {
        10: 'Ten',
        11: 'Eleven',
        12: 'Twelve',
        13: 'Thirteen',
        14: 'Fourteen',
        15: 'Fifteen',
        16: 'Sixteen',
        17: 'Seventeen',
        18: 'Eighteen',
        19: 'Nineteen'
    };

    const tens = {
        2: 'Twenty',
        3: 'Thirty',
        4: 'Forty',
        5: 'Fifty',
        6: 'Sixty',
        7: 'Seventy',
        8: 'Eighty',
        9: 'Ninety'
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
        let str = '';

        if (int < 100) {
            rem = int % 10;
            prefix = Math.floor(int / 10);
            if (rem) {
                return tens[prefix] + ' ' + ones[rem];
            } else {
                return tens[prefix];
            }
        } else if (int < 1000) {
            rem = int % 100;
            prefix = Math.floor(int / 100);
            if (rem) {
                return ones[prefix] + ' Hundred ' + rec(rem);
            } else {
                return ones[prefix] + ' Hundred';
            }
        } else if (int < 1000000) {
            rem = int % 1000;
            prefix = Math.floor(int / 1000);
            if (rem) {
                return rec(prefix) + ' Thousand ' + rec(rem);
            } else {
                return rec(prefix) + ' Thousand';
            }
        } else if (int < 1000000000) {
            rem = int % 1000000;
            prefix = Math.floor(int / 1000000);
            if (rem) {
                return rec(prefix) + ' Million ' + rec(rem);
            } else {
                return rec(prefix) + ' Million';
            }
        } else {
            rem = int % 1000000000;
            prefix = Math.floor(int / 1000000000);
            if (rem) {
                return rec(prefix) + ' Billion ' + rec(rem);
            } else {
                return rec(prefix) + ' Billion';
            }

        }
    };

    return rec(int);
};

console.log(numberToWords(9999999990));