import './App.css';
import { Translate } from './components/Translate';
import { Vowels } from './helpers';

export default function App() {
  // prettier-ignore
  return (
    <>
      <h1>{new Vowels().code('translater')}</h1>
      <p>Traduis en langage <span><span id="uwu">uwu</span></span>.</p>

      <Translate defaultSentence="Écrivez-ici" />

      <footer>dev by <a href="http://g-ongenae.gihub.io">Guillaume Ongenae</a></footer>
    </>
  );
}
