import { Component } from 'react';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  deleteContact = id => {
    const { value } = id.target;
    this.props.onClick(value);
  };

  render() {
    const { contacts } = this.props;

    return (
      <ul className={css.contacts}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={css.contacts__item}>
              <p className={css.contacts__name}> {contact.name} </p>
              <p className={css.contacts__number}>{contact.number} </p>
              <button
                type="submit"
                value={contact.id}
                onClick={this.deleteContact}
                className={css.contacts__button}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
};
