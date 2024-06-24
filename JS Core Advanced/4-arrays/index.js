/**
 * 
 * @param {Number[]} arr 
 */
function halfSum(arr) {
    let sum = 0;

    for (let i = 0; i < Math.round(arr.length / 2); i++) 
        sum += arr[i];

    return sum;
}

console.log(halfSum([1, 2, 3, 4]));