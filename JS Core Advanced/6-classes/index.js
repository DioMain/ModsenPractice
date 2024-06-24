class Rect {
    x;
    y;

    constructor(x, y) {
        this.x = x; this.y = y;
    }

    GetSquare() {
        return  this.x * this.y;
    }

    GetPerimeter() {
        return this.x + this.y;
    }
}

let rect = new Rect(4, 7);

console.log(`x: ${rect.x} - y: ${rect.y}`);
console.log(`S = ${rect.GetSquare()}`);
console.log(`P = ${rect.GetPerimeter()}`);