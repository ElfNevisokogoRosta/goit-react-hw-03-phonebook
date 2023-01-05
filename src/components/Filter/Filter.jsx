import React, { Component } from 'react';
import { Input, Container, InputLabel } from './Filter.styled';
class Filter extends Component {
  filterChange = e => {
    this.props.onFilterChange(e.target.value);
  };
  render() {
    return (
      <Container>
        <InputLabel>
          <Input type="text" onChange={this.filterChange} />
        </InputLabel>
      </Container>
    );
  }
}

export default Filter;
