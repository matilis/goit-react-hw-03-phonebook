import { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  filterContacts = event => {
    const { value } = event.target;

    this.props.onChange(value);
  };

  render() {
    return (
      <div className={css.filter}>
        <h3>Find contact by name</h3>
        <input
          className={css.filter__input}
          onChange={this.filterContacts}
          placeholder="Contact name"
        />
      </div>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
