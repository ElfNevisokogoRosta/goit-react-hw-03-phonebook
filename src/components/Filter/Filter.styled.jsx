import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1.33;
  color: #4e95bb;
`;
const Input = styled.input`
  border: none;
  border-radius: 4px;
  font-size: 16px;
  line-height: 1.33;
  margin-top: 12px;
  width: 200px;
  margin-right: auto;
  margin-left: auto;
  height: 18px;
  padding-left: 8px;
  padding-top: 4px;
  padding-bottom: 4px;
`;
export { Input, Container, InputLabel };
