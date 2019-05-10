// class MaxHeap {
//     constructor() {
//         this.store = [];
//         this.size = 0
//     }

//     swap(i, j) {
//         let temp = this.store[i];
//         this.store[i] = this.store[j];
//         this.store[j] = temp;
//     }

//     add(el) {
//         this.store.push(el);
//         this.siftUp();
//     }

//     siftUp(i = this.store.length - 1) {
//         if (i === 0) return;
//         let parentIdx = this.getParentIdx(i);
//         let parent = this.store[parentIdx];
//         let curr = this.store[i];
//         if (curr.count > parent.count) {
//             this.swap(i, parentIdx);
//             this.siftUp(parentIdx);
//         }
//     }

//     getParentIdx(i) {
//         return Math.floor((i - 1) / 2);
//     }

//     delete() {
//         this.swap(0, this.store.length - 1);
//         let el = this.store.pop();
//         this.siftDown();
//         return el
//     }

//     siftDown(i = 0) {
//         if (i >= this.store.length - 1) return;
//         let [leftIdx, rightIdx] = this.getChildren(i)
//         let leftCount = leftIdx >= this.store.length ? -Infinity : this.store[leftIdx].count;
//         let rightCount = rightIdx >= this.store.length ? -Infinity : this.store[rightIdx].count;
//         let curr = this.store[i];
//         let max;
//         let maxIdx
//         if (leftCount > rightCount) {
//             max = leftCount;
//             maxIdx = leftIdx;
//         } else {
//             max = rightCount;
//             maxIdx = rightIdx;
//         }
//         if (curr.count < max) {
//             this.swap(i, maxIdx);
//             this.siftDown(maxIdx);
//         }
//     }

//     getChildren(i) {
//         let left = i * 2 + 1;
//         let right = i * 2 + 2;
//         return [left, right];
//     }


// }

// class Ele {
//     constructor(val, count) {
//         this.val = val;
//         this.count = count;
//     }
// }

// var topKFrequent = function (nums, k) {
//     let counts = {}
//     for (num of nums) {
//         num in counts ? counts[num]++ : counts[num] = 1;
//     }
//     let heap = new MaxHeap();
//     for (num in counts) {
//         let el = new Ele(num, counts[num]);
//         heap.add(el);
//     }

//     let result = [];
//     for (let i = 0; i < k; i++) {
//         result.push(heap.delete().val);
//     }
//     return result;
// };

class MinHeap {
    constructor(max) {
        this.store = [];
        this.size = 0;
        this.max = max;
    }

    swap(i, j) {
        let temp = this.store[i];
        this.store[i] = this.store[j];
        this.store[j] = temp;
    }

    add(el) {
        if (this.size >= this.max && el.count < this.store[0].count){
            return;
        } else if (this.size >= this.max) {
            this.delete();
        }
        this.store.push(el);
        this.siftUp();
        this.size++;
    }

    siftUp(i = this.store.length - 1) {
        if (i === 0) return;
        let parentIdx = this.getParentIdx(i);
        let parent = this.store[parentIdx];
        let curr = this.store[i];
        if (curr.count < parent.count) {
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
        this.size--;
        return el;
    }

    siftDown(i = 0) {
        if (i >= this.store.length) return;
        let [leftIdx, rightIdx] = this.getChildren(i);
        let leftCount = leftIdx >= this.store.length ? Infinity : this.store[leftIdx].count;
        let rightCount = rightIdx >= this.store.length ? Infinity : this.store[rightIdx].count;
        let curr = this.store[i];
        let min;
        let minIdx;
        if (leftCount < rightCount) {
            min = leftCount;
            minIdx = leftIdx;
        } else {
            min = rightCount;
            minIdx = rightIdx;
        }
        if (curr.count > min) {
            this.swap(i, minIdx);
            this.siftDown(minIdx);
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
    let counts = {};
    for (let num of nums) {
        num in counts ? counts[num]++ : counts[num] = 1;
    }
    let heap = new MinHeap(k);
    for (let num in counts) {
        let el = new Ele(num, counts[num]);
        heap.add(el);
    }

    let result = [];
    for (let i = 0; i < k; i++) {
        result.unshift(heap.delete().val);
    }
    return result;
};

console.log(topKFrequent([5, 2, 5, 3, 5, 3, 1, 1, 3], 2));