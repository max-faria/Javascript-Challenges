function recursiveChunks(n) {
  if (n === 0) {
    return "";
  }
  if (n === 1) {
    return "chunk";
  } else {
    return "chunk-" + recursiveChunks(n - 1);
  }
}
const n = 2;
console.log(`Using recursive funcstion for n = ${n}: ${recursiveChunks(n)}`);

//using ternary operator
function recursiveTernary(n) {
  if (n === 0) return "";
  return n === 1 ? "chunk" : "chunck-" + recursiveTernary(n - 1);
}

console.log(
  `Using recursive ternary function for n = ${n}: ${recursiveTernary(n)}`
);
