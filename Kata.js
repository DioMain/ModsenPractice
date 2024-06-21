function pigIt(str = ""){
    let items = [];

    str.split(" ").forEach((item) => {
        if (item === '!' || item === '?' || item === "." || item === ",")
            items.push(item);
        else
            items.push(`${item.slice(1)}${item[0]}ya`);
    });

    return items.join(' ');
}

console.log(pigIt('Pig latin is cool'));
console.log(pigIt('Hello world !'));