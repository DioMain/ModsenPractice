function solution() {
    let args = new Map();

    for (let i = 0; i < arguments.length; i++) {
        const element = array[i];

        if (args.has(element))
            return true;

        args.set(element, true);
    }

    return false;
}