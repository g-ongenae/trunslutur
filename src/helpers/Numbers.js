/**
 * Vowels transformation by counter
 */
export class Numbers {
  /**
   * Replace all vowels to their count by groups
   *
   * @example
   *  - 'Replace all vowels to their count by groups'
   *  - 'R1pl1ce 1ll v1w1ls t1 th2r c2nt by gr2ps'
   */
  code(sentence = '') {
    let sum = 0;

    const newSentence = sentence.split('').reduce((accumulator, letter) => {
      // TODO Extract and build regexes
      if (/[aáàâäãåāeéèêëęėēiìîïìįoòôöóõøōuùûüúūyÿ]/i.test(letter)) {
        sum += 1;
      } else if (/[æœ]/i.test(letter)) {
        sum += 2;
      } else {
        const tmp = sum === 0 ? letter : `${sum}${letter}`;
        sum = 0;
        accumulator.push(tmp);
      }

      return accumulator;
    }, []);

    // Fix last char of the sentence is missing due to being a a vowel
    if (sum !== 0) {
      newSentence.push(sum);
    }

    return newSentence.join('');
  }

  /**
   * Transform a text from a vowels as count to a readable format
   */
  // TODO Implement this method
  decode(sentence = '') {
    // NOTE: Easy solution
    // 1. Replace the numbers by a random vowels
    //    Except if two numbers are consecutive
    //    (as a word of 10 vowels shouldn't exists and numbers to exists)
    // 2. Call Vowels.decode which will do the hard work
    return sentence;
  }
}
