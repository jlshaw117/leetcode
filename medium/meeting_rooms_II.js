const isOverlap = (interval1, interval2) => {
    // takes 2 intervals and returns a boolean
    return (interval2[0] < interval1[1]);
};

const minMeetingRooms = (intervals) => {
    // takes an array of 2pls [start,end] and returns an the min num rooms
    // required so no meetings overlap
    let sorted = intervals.sort((a,b) => a[0] - b[0]);
    let rooms = [];
    for (let interval of sorted) {
        let placed = false;
        for (let room of rooms) {
            if (isOverlap(room[room.length - 1], interval)) continue;
            room.push(interval);
            placed = true;
            break;
        }
        if (!placed) rooms.push([interval]);
    }

    return rooms.length;
};

console.log(minMeetingRooms([[7, 10], [2, 4]]));