import styled from "styled-components";

import { useRestCountriesStore } from "../states/store";
import Toggle from "./Toggle";

const Header = () => {
  //state
  const darkMode = useRestCountriesStore((store) => store.darkMode);

  return (
    <HeaderContainer $darkMode={darkMode}>
      <p className="title">Where in the world?</p>
      <Toggle />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div<{ $darkMode: boolean }>`
  width: 100%;
  height: 80px;
  background-color: ${({ $darkMode }) => ($darkMode ? "#202C36" : "white")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .title {
    font-size: 15px;
    font-weight: bold;
    color: ${(props) => (props.$darkMode ? "white" : "black")};
  }
`;
