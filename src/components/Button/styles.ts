import styled from 'styled-components';

export const ButtonUI = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: #3b5cb8;
  letter-spacing: 0.48px;
  text-transform: uppercase;
  background: #ffffff;
  border: solid 1px #3b5cb8;
  -webkit-box-shadow: 1px 1px 1px 1px #00000029;
  box-shadow: 1px 1px 1px 1px #00000029;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  padding: 7px 13px;

  &:hover {
    cursor: pointer;
    background: #f4f4f4;
  }
`;
