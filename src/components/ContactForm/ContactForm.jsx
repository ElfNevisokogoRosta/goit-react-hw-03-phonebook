import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import { FormContainer, InputLabel, Input, Btn } from './ContactFrom.styled';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameHandler = e => {
    this.setState({
      name: e.target.value.trim(),
    });
  };
  numberHandler = e => {
    this.setState({
      number: e.target.value.trim(),
    });
  };
  sendContact = e => {
    const { name, number } = this.state;
    e.preventDefault();
    if (name || number) {
      this.props.onSubmit({ name, number, id: nanoid() });
      this.setState({ name: '', number: '' });
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.sendContact}>
          <FormContainer>
            {' '}
            <InputLabel>
              <Input
                onChange={this.nameHandler}
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </InputLabel>
            <InputLabel>
              <Input
                onChange={this.numberHandler}
                value={this.state.number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </InputLabel>
            <Btn>Add contact</Btn>
          </FormContainer>
        </form>
      </div>
    );
  }
}

export default ContactForm;
