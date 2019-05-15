const isOverlap = (interval1, interval2) => {
    // takes 2 intervals and returns a boolean
    return (interval2[0] < interval1[1]);
};

const canAttendMeetings = (intervals) => {
    let sorted = intervals.sort((a,b) => a[0] - b[0]);
    for (let i = 0; i < sorted.length - 1; i++) {
        if (isOverlap(sorted[i], sorted[i+1])) return false;
    }
    return true;
};

console.log(canAttendMeetings([[7, 10], [2, 4]]));