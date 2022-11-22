export const longest = (strings) => {
  // guard clause for empty array or array with non string elements
  if (!strings.length > 0 || !strings.every((el) => typeof el === 'string')) return

  // return the longest string in the array
  return strings.reduce((longest, cur) => {
    if (longest.length < cur.length) return cur
    return longest
  }, '')
}

export const stringMode = (str) => {
  // object with the frequency of each character
  const freq = Array.from(str).reduce((dict, char) => {
    if (!dict[char]) dict[char] = 0
    ++dict[char]
    return dict
  }, {})

  // key with the highest value on freq
  const mode = Object.keys(freq)
    .reverse() // tests require first element in case of tie
    .reduce((highest, cur) => (freq[highest] > freq[cur] ? highest : cur))

  return mode
}

export const anagram = (strings) => {
  const w0 = Array.from(strings[0].toLowerCase().replaceAll(' ', ''))
  const w1 = Array.from(strings[1].toLowerCase().replaceAll(' ', ''))

  // if cleaned inputs aren't the same length, it won't be an anagram
  if (w0.length !== w1.length) return false

  w0.forEach((w0El) => {
    // if w0 has a char that is not in w1 -> return false
    if (!w1.includes(w0El)) return false

    w1.splice(w1.indexOf(w0El), 1)
  })

  return w1.length < 1
}

export const areBracketsBalanced = (str) => {
  if (!str) return false

  const braceTypes = ['{', '}', '[', ']', '(', ')']
  const bracePairs = ['{}', '[]', '()']

  const braces = Array.from(str).filter((char) => {
    if (braceTypes.includes(char)) return char
  })

  // odd number of braces can't be balanced
  if (braces.length % 2 !== 0) return false

  // create character pairs from the ends to the middle
  for (let i = 0; i < braces.length / 2; i++) {
    // use iterator instead of for - every
    const testPair = braces.at(i) + braces.at(-i - 1)

    // test against bracePairs, if any check fails str isn't balanced
    if (!bracePairs.includes(testPair)) return false
  }
  // otherwise the string is balanced
  return true
}

export const palindrome = (str) => {
  const text = str.toLowerCase().replaceAll(' ', '')
  for (let i = 0; i < text.length / 2; i++) {
    // use iterator instead of for - every
    if (text.at(i) !== text.at(-i - 1)) return false
  }
  return true
}
