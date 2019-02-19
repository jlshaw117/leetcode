const Interval = (start, end) => {
    this.start = start;
    this.end = end;
};

const sortByStartValue = (a,b) => {
    if (a.start < b.start) return -1;
    if (a.start === b.start) return 0;
    if (a.start > b.start) return 1;
};

const merge = (intervals) => {
    if (intervals.length === 0) return [];
    let sorted = intervals.sort(sortByStartValue);
    let result = [sorted[0]];
    let idx = 0;
    for (let i = 1; i < intervals.length; i++) {
        if (result[idx].end >= sorted[i].start) {
            if (sorted[i].end > result[idx].end) {
                result[idx].end = sorted[i].end;
            }
        } else {
            idx++;
            result.push(sorted[i]);
        }
    }
    return result;
};



let a = new Interval(1,3);
let b = new Interval(2,6);
let c = new Interval(8,10);
let d = new Interval(15,18);
console.log(merge([a,b,c,d]));