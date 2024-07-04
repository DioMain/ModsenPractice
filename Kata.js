function arrayDiff(a = [], b = []) {
  let res = [];

  a.forEach(element => {
    if (!b.includes(element))
      res.push(element);
  });

  return res;
}

console.log(arrayDiff([1, 2, 2], [1]));