class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }

    remove() {
        let nextNode = this.next;
        let prevNode = this.prev;
        nextNode.prev = prevNode;
        prevNode.next = nextNode;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {

    constructor() {
        this.head = new Node(null);
        this.tail = new Node(null);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    removeLast() {
        let node = this.tail.prev;
        let preNode = node.prev;

        preNode.next = this.tail;
        this.tail.prev = preNode;

        return node.key;
    }

    add(node) {
        let nextNode = this.head.next;

        node.next = nextNode;
        nextNode.prev = node;
        this.head.next = node;
        node.prev = this.head;
    }

    updateNode(node) {
        node.remove();
        this.add(node);
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.cache = new LinkedList();
        this.map = {};
    }

    get(key) {
        if (this.map[key]) {
            this.cache.updateNode(this.map[key]);
            return this.map[key].val;
        } else {
            return -1;
        }
    }

    put(key, val) {
        if (this.map[key]) {
            let node = this.map[key];
            node.val = val;
            this.cache.updateNode(node);
        } else {
            if (this.size === this.capacity) {
                let nodeKey = this.cache.removeLast();
                this.map[nodeKey] = null;
                this.size --;
            }

            let newNode = new Node(key, val);
            this.cache.add(newNode);
            this.size ++;

            this.map[key] = newNode;
        }

        return null;
    }
}