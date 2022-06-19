/**
 * Flip array keys and value
 * loop through each number, get value to lookup (X) after deduct from target(Y)
 * if exist, return the indexs
 */
function twoSum(nums: number[], target: number): number[] {
    let hashMap = new Map<number, number>();
    nums.forEach((value, index) => {
        hashMap.set(value, index);
    });

    for (let i: number = 0; i < nums.length; i++) {
        if ((target > 0 && nums[i] > target) || (target < 0 && nums[i] < target)) continue;
        const numToFind: number = target - nums[i];
        const secondIndex = hashMap.get(numToFind);

        if (typeof secondIndex !== 'undefined' && secondIndex != i) {
            return [i, secondIndex];
        }
    }

    return [];
};