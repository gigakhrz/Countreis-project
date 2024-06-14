import styled from "styled-components";

const Header = () => {
  return <HeaderContainer>Header</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
