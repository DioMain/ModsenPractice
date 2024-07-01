function rgb(r = 0, g = 0, b = 0) {
    r = r < 0 ? 0 : r; r = r > 255 ? 255 : r;
    g = g < 0 ? 0 : g; g = g > 255 ? 255 : g;
    b = b < 0 ? 0 : b; b = b > 255 ? 255 : b;

    let sr = r.toString(16).length == 1 ? `0${r.toString(16)}` : r.toString(16);
    let sg = g.toString(16).length == 1 ? `0${g.toString(16)}` : g.toString(16);
    let sb = b.toString(16).length == 1 ? `0${b.toString(16)}` : b.toString(16);
  
    return `${sr.toUpperCase()}${sg.toUpperCase()}${sb.toUpperCase()}`;
}

console.log(rgb(173, 255,  47));
console.log(rgb(0, 0,  -20));