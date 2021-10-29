/*TWO SUM */ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

/*Palindrome number*/

/**
 * @param {number} x
 * @return {boolean}
 */
 let isPalindrome = function(x) {
    x = x.toString();
    let i = 0;
    let j = x.length - 1;
    let result = true;
 
    while ( i < j) {
        if (x[i] != x[j]) {
            result = false;
            break;
        } 
        i++;
        j--;
    }
 
    return result;
 };