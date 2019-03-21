const merge = (nums1, m, nums2, n) => {
   
    let totalLength = m + n;
    for (let i = 0; i < totalLength; i++) {
        let num;
        if (m > 0 && nums2.length > 0) {
            if (nums1[0] < nums2[0]) {
                num = nums1.shift();
                m--;
            } else {
                num = nums2.shift();
            }
        } else {
            if (m) {
                num = nums1.shift();
                m--;
            } else if (nums2.length) {
                num = nums2.shift();
            }
        }
        nums1.push(num);
    }
    nums1.splice(0,n);
};