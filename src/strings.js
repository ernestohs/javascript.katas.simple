export function longest(strings) {
  if (strings.length === 0) return;
  let max = strings[0].length;
  strings.map((v) => (max = Math.max(max, v.length)));
  return (strings.filter((v) => v.length == max) || [])[0];
}
