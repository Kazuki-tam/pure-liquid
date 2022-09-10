/**
 * Trim Text Function
 * @param { String } text - Target text
 * @param { Number } trimLength - Word count
 * @param { string } afterText - Character string given after trimming
 * @returns { string } - Trimed text
 */

function trimTxt(text: string, trimLength: number = 50, afterText: string = "…"): string {
  if (text.length < trimLength) {
    return text;
  }
  return text.substring(0, trimLength) + afterText;
}

export { trimTxt };
