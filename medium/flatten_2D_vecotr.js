class Vector2D {
    constructor(vect) {
        this.store = flatten(vect);
    }

    next() {
        return this.store.shift();
    }

    hasNext() {
        return this.store.length > 0;
    }
}

const flatten = function(arr) {
    if (arr.length === 0) return [];
    let result = [];
    for (let el of arr) {
        if (Array.isArray(el)) {
            result.push(...flatten(el));
        } else {
            result.push(el);
        }
    }
    return result;
};

let vect = new Vector2D([[1, 2], [3], [4]]);

console.log(vect.next() === 1); // return 1
console.log(vect.next() === 2); // return 2
console.log(vect.next() === 3); // return 3
console.log(vect.hasNext() === true); // return true
console.log(vect.hasNext() === true); // return true
console.log(vect.next() === 4); // return 4
console.log(vect.hasNext() === false); // return false