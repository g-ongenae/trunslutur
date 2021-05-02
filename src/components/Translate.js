import React, { Component } from 'react';

/**
 * Translate component
 *
 * Display two textarea and translate the text from
 * one textarea to the other each time its value is changed.
 */
export class Translate extends Component {
  constructor(props) {
    super(props);
    this.numbers = props.numbers;

    this.state = {
      coded: this.numbers.code(props.defaultSentence),
      decoded: props.defaultSentence,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field, event) {
    const value = event.target.value;

    switch (field) {
      case 'coded':
        this.setState({
          coded: value,
          decoded: this.numbers.decode(value),
        });
        break;

      case 'decoded':
        this.setState({
          decoded: value,
          coded: this.numbers.code(value),
        });
        break;

      default:
        break;
    }

    this.setState({ [field]: event.target.value });
  }

  render() {
    return (
      <>
        <form>
          <label>
            <textarea
              cols="50"
              rows="30"
              value={this.state.decoded}
              onChange={this.handleChange.bind(this, 'decoded')}
            />
            <textarea cols="50" rows="30" value={this.state.coded} onChange={this.handleChange.bind(this, 'coded')} />
          </label>
        </form>
      </>
    );
  }
}
