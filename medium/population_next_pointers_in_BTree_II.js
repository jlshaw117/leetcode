// { 
//     "$id": "1", 
//     "left": { 
//         "$id": "2", 
//         "left": { 
//             "$id": "3", 
//             "left": { 
//                 "$id": "4", 
//                 "left": null, 
//                 "next": null, 
//                 "right": null, 
//                 "val": 2 
//             }, 
//             "next": null, 
//             "right": null, 
//             "val": 0 
//         }, 
//         "next": null, 
//         "right": { 
//             "$id": "5", 
//             "left": { 
//                 "$id": "6", 
//                 "left": null, 
//                 "next": null, 
//                 "right": null, 
//                 "val": 1 
//             }, 
//             "next": null, 
//             "right": { 
//                 "$id": "7", 
//                 "left": { 
//                     "$id": "8", 
//                     "left": null, 
//                     "next": null, 
//                     "right": null, 
//                     "val": 7 
//                 }, 
//                 "next": null, 
//                 "right": null, 
//                 "val": 0 
//             }, 
//             "val": 7 
//         }, 
//         "val": 1 
//     }, 
//     "next": null, 
//     "right": { 
//         "$id": "9", 
//         "left": { 
//             "$id": "10", 
//             "left": null, 
//             "next": null, 
//             "right": null, 
//             "val": 9 
//         }, 
//         "next": null, 
//         "right": { 
//             "$id": "11", 
//             "left": { 
//                 "$id": "12", 
//                 "left": null, 
//                 "next": null, 
//                 "right": null, 
//                 "val": 8 
//             }, 
//             "next": null, 
//             "right": { 
//                 "$id": "13", 
//                 "left": null, 
//                 "next": null, 
//                 "right": null, 
//                 "val": 8 
//             }, 
//             "val": 1 
//         }, 
//         "val": 3 
//     }, 
//     "val": 2 
// }

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
}

// var connect = function (root) {
//     if (!root) return root;

//     let leftNext = root.left ? root.right : true;
//     let rightNext = root.right ? null : true;
//     let nextRoot = root.next;
//     while (nextRoot) {
//         if (leftNext && rightNext) break;
//         if (nextRoot.left) {
//             if (!leftNext) {
//                 leftNext = nextRoot.left;
//             } else {
//                 rightNext = nextRoot.left;
//             }
//         } else if (nextRoot.right) {
//             if (!leftNext) {
//                 leftNext = nextRoot.right;
//             } else {
//                 rightNext = nextRoot.right;
//             }
//         }
//         nextRoot = nextRoot.next;
//     }

//     if (root.left) root.left.next = leftNext;
//     if (root.right) root.right.next = rightNext;

//     connect(root.next);
//     connect(root.left);
//     connect(root.right);

//     return root;
// };

// Optimized

var connect = function (root, visited = new Set()) {
    if (!root) return root;
    if (visited.has(root)) return;
    visited.add(root)
    let leftNext = root.left ? root.right : true;
    let rightNext = root.right ? null : true;
    let nextRoot = root.next;
    while (nextRoot) {
        if (leftNext && rightNext) break;
        if (nextRoot.left) {
            if (!leftNext) {
                leftNext = nextRoot.left;
            } else {
                rightNext = nextRoot.left;
            }
        } else if (nextRoot.right) {
            if (!leftNext) {
                leftNext = nextRoot.right;
            } else {
                rightNext = nextRoot.right;
            }
        }
        nextRoot = nextRoot.next;
    }

    if (root.left) root.left.next = leftNext;
    if (root.right) root.right.next = rightNext;

    connect(root.next, visited);
    connect(root.left, visited);
    connect(root.right, visited);

    return root;
};

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);
let node8 = new Node(8);
let node9 = new Node(9);
let node10 = new Node(10);
let node11 = new Node(11);
let node12 = new Node(12);
let node13 = new Node(13);

node1.left = node2;
node1.right = node9;

node2.left = node3;
node2.right = node5;

node9.left = node10;
node9.right = node11;

node3.left = node4;

node5.left = node6;
node5.right = node7;

node11.left = node12;
node11.right = node13;

node7.left = node8;

connect(node1);