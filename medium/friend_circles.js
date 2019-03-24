const findCircleNum = (friendMatrix) => {
    let len = friendMatrix.length;
    let friends = new Array(len);
    let queue = [];
    let count = 0;
    for (let i = 0; i < len; i++) {
        if (!friends[i]) {
            count++;
            friends[i] = true;
            queue.push(i);
            while (queue.length) {
                let friend = friendMatrix[queue.shift()];
                for(let j = 0; j < len; j++) {
                    if(friend[j] && !friends[j]) {
                        friends[j] = true;
                        queue.push(j);
                    }
                }
            }

        }
    }
    return count;
};

