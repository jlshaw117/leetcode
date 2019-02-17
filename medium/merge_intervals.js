const Interval = (start, end) => {
    this.start = start;
    this.end = end;
};

const overlapping = (a,b) => {
    if (b.first < a.last)
};

const merge = (intervals) => {
    
};


let a = new Interval(1,3);
let b = new Interval(2,6);
let c = new Interval(8,10);
let d = new Interval(15,18);
console.log(merge([a,b,c,d]));