import { Vowels } from './Vowels';

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
  decode(sentence = '') {
    let newSentence = '';
    const letters = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa'];

    for (let i = 0; i < sentence.length; i++) {
      // Only replace from 1 to 6 because there's no case of 7 consecutive vowels in french
      // See http://cruciverbiste.club/index.php?id_cms=172&controller=cms
      if (
        /[1-6]/.test(sentence[i]) &&
        (i === 0 || /\D/.test(sentence[i - 1])) &&
        (i === sentence.length - 1 || /\D/.test(sentence[i + 1]))
      ) {
        newSentence += letters[Number(sentence[i]) - 1];
      } else {
        newSentence += sentence.charAt(i);
      }
    }

    return new Vowels().decode(newSentence);
  }
}
