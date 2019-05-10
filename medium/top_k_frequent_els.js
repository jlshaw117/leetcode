class MaxHeap {
    constructor() {
        this.store = [];
    }

    swap(i, j) {
        let temp = this.store[i];
        this.store[i] = this.store[j];
        this.store[j] = temp;
    }

    add(el) {
        this.store.push(el);
        this.siftUp();
    }

    siftUp(i = this.store.length - 1) {
        if (i === 0) return;
        let parentIdx = this.getParentIdx(i);
        let parent = this.store[parentIdx];
        let curr = this.store[i];
        if (curr.count > parent.count) {
            this.swap(i, parentIdx);
            this.siftUp(parentIdx);
        }
    }

    getParentIdx(i) {
        return Math.floor((i - 1) / 2);
    }

    delete() {
        this.swap(0, this.store.length - 1);
        let el = this.store.pop();
        this.siftDown();
        return el
    }

    siftDown(i = 0) {
        if (i >= this.store.length - 1) return;
        let [leftIdx, rightIdx] = this.getChildren(i)
        let leftCount = leftIdx >= this.store.length ? -Infinity : this.store[leftIdx].count;
        let rightCount = rightIdx >= this.store.length ? -Infinity : this.store[rightIdx].count;
        let curr = this.store[i];
        let max;
        let maxIdx
        if (leftCount > rightCount) {
            max = leftCount;
            maxIdx = leftIdx;
        } else {
            max = rightCount;
            maxIdx = rightIdx;
        }
        if (curr.count < max) {
            this.swap(i, maxIdx);
            this.siftDown(maxIdx);
        }
    }

    getChildren(i) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        return [left, right];
    }


}

class Ele {
    constructor(val, count) {
        this.val = val;
        this.count = count;
    }
}

var topKFrequent = function (nums, k) {
    let counts = {}
    for (num of nums) {
        num in counts ? counts[num]++ : counts[num] = 1;
    }
    let heap = new MaxHeap();
    for (num in counts) {
        let el = new Ele(num, counts[num]);
        heap.add(el);
    }

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(heap.delete().val);
    }
    return result;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));