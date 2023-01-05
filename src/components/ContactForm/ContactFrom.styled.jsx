import styled from 'styled-components';
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
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
const Btn = styled.button`
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 6px;
  border: none;
  padding: 8px 12px;
  color: #fff;
  cursor: pointer;
  background-color: #095077;
`;
export { FormContainer, InputLabel, Input, Btn };
