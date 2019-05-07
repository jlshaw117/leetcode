/**
 * Initialize your data structure here.
 */
var Node = function () {
    this.children = {};
    this.terminal = false;
}

var Trie = function () {
    this.root = new Node();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word, node = this.root) {
    if (!word.length) {
        node.terminal = true;
        return;
    }

    let letter = word[0];
    if (!node.children[letter]) node.children[letter] = new Node();
    this.insert(word.slice(1), node.children[letter]);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word, node = this.root) {
    if (!word.length) return node.terminal;

    let letter = word[0];
    if (node.children[letter]) {
        return this.search(word.slice(1), node.children[letter]);
    } else {
        return false;
    }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix, node = this.root) {
    if (!prefix.length) return true;

    let letter = prefix[0];
    if (node.children[letter]) {
        return this.startsWith(prefix.slice(1), node.children[letter]);
    } else {
        return false;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */