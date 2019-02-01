const strStr = (haystack, needle) => {
    if (needle.length === 0) return 0;
    for (let idx = 0; idx < haystack.length; idx++) {
        let subStr = haystack.slice(idx, idx + needle.length);
        if (subStr === needle) return idx;
    }
    
    return -1;
};