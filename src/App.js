import { Component } from 'react';
import './App.css';
import { Translate } from './components/Translate';
import { Vowels, Numbers } from './helpers';

export default class App extends Component {
  constructor(props) {
    super(props);

    const vowels = new Vowels();

    this.state = {
      vowels,
      numbers: new Numbers(vowels),
    };
  }

  componentDidMount() {
    return this.state.vowels.fetchWords();
  }

  render() {
    // prettier-ignore
    return (
      <>
        <h1>{this.state.vowels.code('translater')}</h1>
        <p>Traduis en langage <span><span id="uwu">uwu</span></span>.</p>

        <Translate defaultSentence="Écrivez-ici" vowels={this.state.vowels} numbers={this.state.numbers} />

        <footer>dev by <a href="http://g-ongenae.gihub.io">Guillaume Ongenae</a></footer>
      </>
    );
  }
}
