class MyCircularQueue {
    // k - size of queue
    constructor(k) {
        this.store = new Array(k).fill(null);
        this.size = 0;
        this.maxSize = k;
        this.front = -1;
        this.last = -1;
    }

    // add element to queue
    // val - number
    // return boolean
    enQueue(val) {
        if (this.isFull()) return false;
        if (this.isEmpty()) this.front = 0;
        this.last++;
        if (this.last === this.maxSize) this.last = 0;
        this.store[this.last] = val;
        this.size++;
        return true;
    }

    // remove an element from queue
    // return boolean
    deQueue() {
        if (this.isEmpty()) return false; 
        // let result = this.store[this.front];
        this.store[this.front] = null;
        this.front++;
        if (this.size === 1) {
            this.front = -1;
            this.last = -1;
        } else if (this.front === this.maxSize) {
            this.front = 0;
        }
        this.size--;
        return true;
    }

    // return the first item in queue
    Front() {
        if (this.isEmpty()) return -1;
        return this.store[this.front];
    }

    // return the last item in queue
    Rear() {
        if (this.isEmpty()) return -1;
        return this.store[this.last];
    }

    // return boolean for if queue is empty
    isEmpty() {
        return this.size === 0;
    }

    // return boolean for i queue is full
    isFull() {
        return this.size === this.maxSize;
    }
}

// ["MyCircularQueue", "enQueue", "deQueue", "Front", "deQueue", "Front", "Rear", "enQueue", "isFull", "deQueue", "Rear", "enQueue"]
// [[3], [7], [], [], [], [], [], [0], [], [], [], [3]]

let queue = new MyCircularQueue(3);
console.log(queue.enQueue(7));
console.log(queue.deQueue());
console.log(queue.Front());
console.log(queue.deQueue());
console.log(queue.Front());
console.log(queue.Rear());
console.log(queue.enQueue(0));
console.log(queue.isFull());
console.log(queue.deQueue());
console.log(queue.Rear());
console.log(queue.enQueue(3));