import React, { Component } from 'react';
import Button from 'components/Button/Button';
import { ListElement, ListSecction, Name, Number } from './ContactList.styled';

class ContactList extends Component {
  render() {
    const { data, deleteContact, filter } = this.props;
    const filtredData = data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <ListSecction>
        {filtredData.map(({ name, id, number }) => {
          return (
            <ListElement key={id}>
              <Name>{name}</Name>
              <Number>{number}</Number>
              <Button id={id} deleteContact={deleteContact} />
            </ListElement>
          );
        })}
      </ListSecction>
    );
  }
}

export default ContactList;
