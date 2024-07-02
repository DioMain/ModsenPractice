function score(dice = []) {
    let dicemap = new Map();
    let result = 0;

    dice.forEach(i => {
        if (dicemap.has(i))
            dicemap.set(i, dicemap.get(i) + 1);
        else
            dicemap.set(i, 1);
    });

    dicemap.forEach((count, value) => {
        switch (value) {
            case 1:
                if (count >= 3)
                    result += 1000 + (100 * (count - 3));
                else
                    result += 100 * count;
                break;
            case 2:
                if (count >= 3)
                    result += 200;
                break;
            case 3:
                if (count >= 3)
                    result += 300;
                break;
            case 4:
                if (count >= 3)
                    result += 400;
                break;
            case 5:
                if (count >= 3)
                    result += 500 + (50 * (count - 3));
                else
                    result += 50 * count;
                break;
            case 6:
                if (count >= 3)
                    result += 600
                break;
        }
    });

    return result;
}

console.log(score([2, 3, 4, 6, 2]));