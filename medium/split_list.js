const splitListToParts = (root, k) => {
    let len = 0;
    let curr = root;
    while (curr) {
        len++;
        curr = curr.next;
    }

    let subLen = Math.floor(len / k);
    let rem = len % k;

    let result = [];
    curr = root;
    while (result.length < k) {
        result.push(curr);
        let pre;
        for (let i = 0; i < subLen; i++) {
            pre = curr;
            curr = curr.next;
        }
        if (rem) {
            pre = curr;
            curr = curr.next;
            rem--;
        }
        if (pre) pre.next = null;
    }
    return result;
};