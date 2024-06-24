"use strict";

function task1(arr = [], num = 0) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        if (element == num)
            return true;
    }

    return false;
}

console.log(task1([1, 2, 3], 2));