const inRange = (num, interval) => {
    if (num >= interval.start && num <= interval.end) return true;
    return false;
};

const intervalIntersection = (intervals1, intervals2) => {
    if (intervals1.length === 0 || intervals2.length === 0) return [];
    let idx1 = 0;
    let idx2 = 0;
    let result = [];
    let newInterval = new Interval();
    let overlap = false;
    let end1 = intervals1.length - 1;
    let end2 = intervals2.length - 1;
    let min = Math.min(intervals1[0].start, intervals2[0].start);
    let max = Math.max(intervals1[end1].end, intervals2[end2].end);

    for (; min <= max; min++) {
        if (min > intervals1[idx1].end) idx1++;
        if (min > intervals2[idx2].end) idx2++;
        if (idx1 >= intervals1.length || idx2 >= intervals2.length) break;

        if (!overlap && inRange(min, intervals1[idx1]) && inRange(min, intervals2[idx2])) {
            overlap = true;
            newInterval.start = min;
        }
        if (overlap) {
            if (min === intervals1[idx1].end || min === intervals2[idx2].end) {
                newInterval.end = min;
                overlap = false;
                result.push(newInterval);
                newInterval = new Interval();
            }
        }
    }

    return result;
};

// console.log(intervalIntersection([[0, 2], [5, 10], [13, 23], [24, 25]], [[1, 5], [8, 12], [15, 24], [25, 26]]));