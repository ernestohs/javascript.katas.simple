export function longest(strings) {
  if (strings.length === 0) return;
  let max = strings[0].length;
  strings.map((v) => (max = Math.max(max, v.length)));
  return (strings.filter((v) => v.length == max) || [])[0];
}

export function stringMode(text) {
  const { max, ...counts } = (text || "").split("").reduce(
    (a, c) => {
      a[c] = a[c] ? a[c] + 1 : 1;
      a.max = a.max < a[c] ? a[c] : a.max;
      return a;
    },
    { max: 0 }
  );

  return Object.entries(counts).filter(([k, v]) => v === max)[0][0];
}

export function anagram(a, b) {
  let result = false;
  let deconstructed = (text) => text.toLowerCase().split("").sort().join();
  if (b.length === a.length) {
    result = deconstructed(a) === deconstructed(b);
  }
  return result;
}

export function areBracketsBalanced(text) {
  const bracketPairs = { "[": "]", "{": "}", "(": ")" };
  const closingBrackets = new Set(Object.values(bracketPairs));
  const open = [];
  for (var char of text) {
    if (closingBrackets.has(char)) {
      if (char === open[open.length - 1]) open.pop();
      else return false;
    }
    if (char in bracketPairs) open.push(bracketPairs[char]);
  }
  return open.length === 0;
}
