import React, { Component } from 'react';
import { Numbers } from '../helpers';

/**
 * Translate component
 *
 * Display two textarea and translate the text from
 * one textarea to the other each time its value is changed.
 */
export class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coded: new Numbers().code(props.defaultSentence),
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
          decoded: new Numbers().decode(value),
        });
        break;

      case 'decoded':
        this.setState({
          decoded: value,
          coded: new Numbers().code(value),
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
