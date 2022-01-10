export function armstrong(input) {
  const pot = `${input}`.length;
  const total = `${input}`
    .split("")
    .map(Number)
    .reduce((prev, curr) => prev + curr ** pot, 0);
  return total === Number(input);
}
