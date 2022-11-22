/**
 * It takes a number, converts it to a string, gets the length of the string, then uses the length as
 * the exponent for each digit in the number, and finally adds up all the digits to the power of the
 * exponent. If the sum is equal to the original number, then it's an Armstrong number.
 * @param num - The number to check.
 * @returns A boolean value.
 */
export const armstrong = (num) => {
  const text = String(num)
  const exponent = text.length
  const calculation = Array.from(text).reduce((acc, cur) => acc + cur ** exponent, 0)
  return +text === calculation
}
