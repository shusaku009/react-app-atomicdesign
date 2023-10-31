import styled from "styled-components"

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  background-color: #11999ef;
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 9999px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
