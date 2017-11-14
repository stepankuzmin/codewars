// https://www.codewars.com/kata/a-chain-adding-function

function add(n) {
  const f = m => add(n + m);
  f.valueOf = () => n;
  return f;
}
