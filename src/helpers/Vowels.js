import levenshtein from 'js-levenshtein';

/**
 * Single vowel translation
 */
export class Vowels {
  constructor() {
    this.words = [];
  }

  /**
   * Load french dictionary
   */
  async fetchWords() {
    const response = await fetch('https://raw.githubusercontent.com/g-ongenae/Morphalou-Crawler/result/result.txt');
    this.words = (await response.text()).split('\n').filter((word) => !/[\s]/g.test(word));
  }

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
  decode(sentence = '') {
    return sentence
      .split(/\b/)
      .map((word) => {
        // Ignore spaces and typography
        if (/\W|\d/.test(word)) {
          return word;
        }

        const simplifiedWord = word.replace(/[aeiouy]/g, 'a');

        // Find words of the same length and modify them to correct levenshtein distance
        // Then find the closest word in the distance of levenshtein
        return this.words
          .filter((w) => word.length === w.length)
          .map((w) => ({ word: w, distance: levenshtein(w.replace(/[aeiouy]/g, 'a'), simplifiedWord) }))
          .reduce((acc, w) => (w.distance <= acc.distance ? w : acc), { distance: 50, word: '' }).word;
      })
      .join('');
  }
}
