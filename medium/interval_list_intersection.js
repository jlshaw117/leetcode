// Brute Force
// const inRange = (num, interval) => {
//     if (num >= interval.start && num <= interval.end) return true;
//     return false;
// };

// const intervalIntersection = (intervals1, intervals2) => {
//     if (intervals1.length === 0 || intervals2.length === 0) return [];
//     let idx1 = 0;
//     let idx2 = 0;
//     let result = [];
//     let newInterval = new Interval();
//     let overlap = false;
//     let end1 = intervals1.length - 1;
//     let end2 = intervals2.length - 1;
//     let min = Math.min(intervals1[0].start, intervals2[0].start);
//     let max = Math.max(intervals1[end1].end, intervals2[end2].end);

//     for (; min <= max; min++) {
//         if (min > intervals1[idx1].end) idx1++;
//         if (min > intervals2[idx2].end) idx2++;
//         if (idx1 >= intervals1.length || idx2 >= intervals2.length) break;

//         if (!overlap && inRange(min, intervals1[idx1]) && inRange(min, intervals2[idx2])) {
//             overlap = true;
//             newInterval.start = min;
//         }
//         if (overlap) {
//             if (min === intervals1[idx1].end || min === intervals2[idx2].end) {
//                 newInterval.end = min;
//                 overlap = false;
//                 result.push(newInterval);
//                 newInterval = new Interval();
//             }
//         }
//     }

//     return result;
// };

// Optomized

function Interval(start, end) {
    this.start = start;
    this.end = end;
}

const overlap = (interval1, interval2) => {
    if (interval1.start >= interval2.start && interval1.start <= interval2.end) return true;
    if (interval1.end >= interval2.start && interval1.end <= interval2.end) return true;
    if (interval2.start >= interval1.start && interval2.start <= interval1.end) return true;
    if (interval2.end >= interval1.start && interval2.end <= interval1.end) return true;
    return false;
};

const intervalIntersection = (intervals1, intervals2) => {
    let idx1 = 0;
    let idx2 = 0;
    let result = [];

    while (idx1 < intervals1.length && idx2 < intervals2.length) {
        if (overlap(intervals1[idx1], intervals2[idx2])) {
            let start = Math.max(intervals1[idx1].start, intervals2[idx2].start);
            let end = Math.min(intervals1[idx1].end, intervals2[idx2].end);
            result.push(new Interval(start, end));
        }
        if (intervals1[idx1].end < intervals2[idx2].end) {
            idx1++;
        } else {
            idx2++;
        }
    }

    return result;
};
