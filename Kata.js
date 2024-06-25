
function amountOfPages(summary = 0){
    let n = 0, res = 0;
    while (res < summary) {
        n++

        res += n.toString().length;
    }

    return n;
}

console.log(amountOfPages(25));
console.log(amountOfPages(1095));