class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return 2 * idx;
    }

    getRightChild(idx) {
        return 2 * idx + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;
        let parentIdx = this.getParent(idx);
        let parent = this.array[parentIdx];
        if (parent < this.array[idx]) {
            this.array[parentIdx] = this.array[idx];
            this.array[idx] = parent;
            this.siftUp(parentIdx);
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        if (idx > Math.floor((this.array.length - 1) / 2)) return;
        let leftIdx = this.getLeftChild(idx);
        let left = this.array[leftIdx];
        let rightIdx = this.getRightChild(idx);
        let right = this.array[rightIdx] ? this.array[rightIdx] : -Infinity;
        let maxIdx;
        let max;
        if (left >= right) {
            maxIdx = leftIdx;
            max = left;
        } else {
            maxIdx = rightIdx;
            max = right;
        }
        if (this.array[idx] < max) {
            this.array[maxIdx] = this.array[idx];
            this.array[idx] = max;
            this.siftDown(maxIdx);
        }
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let max = this.array[1];
        let el = this.array.pop();
        this.array[1] = el;
        this.siftDown(1);
        return max;
    }
}

var findKthLargest = function (nums, k) {
    let heap = new MaxHeap();
    nums.forEach(num => heap.insert(num))
    for (let i = 1; i < k; i++) {
        heap.deleteMax()
    }
    return heap.deleteMax()
};