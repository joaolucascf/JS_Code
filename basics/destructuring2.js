const a = [1, 2, 3, 4, 5, 6];

const [n1, n2, n3, , n5, n6 = 0] = [a[0], a[1], a[2], a[3]];
console.log(n1, n2, n3, n5, n6);

const [[],[,nota, num]] = [[1, 2, 3],[4, 5, 6]];
console.log(nota, num);