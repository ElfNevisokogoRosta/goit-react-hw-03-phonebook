import React, { Component } from 'react';
import { ButtonStyled } from './Button.styled';
class Button extends Component {
  deleteContact = e => {
    this.props.deleteContact(e.target.id);
  };
  render() {
    const { id } = this.props;
    return (
      <ButtonStyled onClick={this.deleteContact} id={id}>
        Delete
      </ButtonStyled>
    );
  }
}

export default Button;
