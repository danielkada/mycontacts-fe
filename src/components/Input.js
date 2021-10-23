import styled from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  background: #fff;
  height: 52px;
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  outline: none;
  padding: 0 16px;
  font-size: 16px;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
  }
`;
