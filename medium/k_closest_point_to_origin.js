class MinHeap {
    constructor() {
        this.store = [];
    }

    delete() {
        this.swap(0, this.store.length - 1);
        let point = this.store.pop();
        this.siftDown();
        return point.cord;
    }

    siftDown(i=0) {
        if (i >= this.store.length - 1) return;
        let [leftIdx, rightIdx] = this.getChildren(i);
        let leftDist = this.store[leftIdx] ? this.store[leftIdx].distance : Infinity;
        let rightDist = this.store[rightIdx] ? this.store[rightIdx].distance : Infinity;
        let currDist = this.store[i].distance;
        let min = Math.min(leftDist, rightDist);
        let minIdx = leftDist <= rightDist ? leftIdx : rightIdx;
        if (currDist > min) {
            this.swap(i, minIdx);
            this.siftDown(minIdx);
        }
    }

    getChildren(i) {
        return [i * 2 + 1, i * 2 + 2];
    }

    insert(point) {
        this.store.push(point);
        this.siftUp();
    }

    siftUp(i=this.store.length - 1) {
        if (i === 0) return;
        let parentIdx = this.getParent(i);
        let parent = this.store[parentIdx];
        let curr = this.store[i];
        if (curr.distance < parent.distance) {
            this.swap(i, parentIdx);
            this.siftUp(parentIdx);
        }
    }

    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    swap(i, j) {
        let temp = this.store[i];
        this.store[i] = this.store[j];
        this.store[j] = temp;
    }
}

class Point {
    constructor(arr) {
        this.cord = arr;
        this.distance = Math.sqrt(Math.pow(arr[0], 2) + Math.pow(arr[1], 2));
    }
}

var kClosest = function (points, K) {
    let heap = new MinHeap();

    points.forEach(cord => heap.insert(new Point(cord)));

    let result = [];

    while (result.length < K) result.push(heap.delete());

    return result;
};

console.log(...kClosest([[6, 10], [-3, 3], [-2, 5], [0, 2]], 3));