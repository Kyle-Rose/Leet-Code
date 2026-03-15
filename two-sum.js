/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let current = nums[i];
        let compliment = target - current;
        if (map.has(compliment)){
            return ([map.get(compliment), i])
        }
        else{
            map.set(current, i);
        }
    }
};