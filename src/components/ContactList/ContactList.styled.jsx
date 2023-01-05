import styled from 'styled-components';
const ListSecction = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  margin-top: 28px;
  padding: 0;
  list-style-type: none;
`;
const ListElement = styled.li`
  margin-left: auto;
  margin-right: auto;
  font-size: 24px;
  color: #4e95bb;
  margin-bottom: 8px;
  display: flex;
`;
const Name = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 28px;
`;
const Number = styled.p`
  margin: 0;
  padding: 0;
  margin-left: 6px;
  font-size: 26px;
  text-align: center;
  display: flex;
  align-items: center;
`;
export { ListSecction, ListElement, Name, Number };
