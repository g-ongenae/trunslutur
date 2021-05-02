/**
 * Single vowel translation
 */
export class Vowels {
  /**
   * Get a random vowel (without accentuation)
   */
  getRandomVowel() {
    const letters = ['a', 'e', 'i', 'o', 'u', 'y'];
    return letters[Math.floor(Math.random() * letters.length)];
  }

  /**
   * Replace all vowels to the same one randomly chosen
   */
  code(sentence = '') {
    const vowel = this.getRandomVowel();

    // TODO Extract and build regexes
    return sentence
      .replace(/[aáàâäãåāeéèêëęėēiìîïìįoòôöóõøōuùûüúūyÿ]/g, vowel)
      .replace(/[æœ]/g, `${vowel}${vowel}`)
      .replace(/[AÁÀÂÂÄÃÅĀEÉÈÊËĘĖĒIÎÏÌÍĮĪOÔÖÒÓÕØŌUÛÙÜÚŪYŸ]/g, vowel.toUpperCase())
      .replace(/[ÆŒ]/g, `${vowel.toUpperCase()}${vowel.toUpperCase()}`);
  }

  /**
   * Transform a text from a single vowel to a readable format
   */
  // TODO Implement this method
  decode(sentence = '') {
    // NOTE: Possible solution
    // 1. Split sentence into words
    // 2. For each word replace it with the first word with the closest distance of levenshtein
    // TODO In the future
    // 3. Check the meaning of the word in the context of the new sentence
    return sentence;
  }
}
