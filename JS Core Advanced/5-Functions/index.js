/**
 * 
 * @param {Number[]} arr 
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let buf = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = buf;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([4, 1, 12, 2, 6]));