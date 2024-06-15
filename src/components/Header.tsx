import styled from "styled-components";
import moon from "../../src/assets/icon-moon.svg";
import sun from "../../src/assets/icon-sun.svg";

import { useRestCountriesStore } from "../states/store";

const Header = () => {
  //state
  const darkMode = useRestCountriesStore((store) => store.darkMode);

  //setState
  const setDarkmode = useRestCountriesStore((store) => store.setDarkMode);

  console.log(darkMode);
  return (
    <HeaderContainer darkMode={darkMode}>
      <p className="title">Where in the world?</p>
      <div className="selectMode">
        <img
          className="moon"
          src={darkMode ? sun : moon}
          alt="moon icon"
          onClick={() => setDarkmode(!darkMode)}
        />
        <p className="dark">Mode</p>
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div<{ darkMode: boolean }>`
  width: 100%;
  height: 80px;
  background-color: ${({ darkMode }) => (darkMode ? "black" : "white")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .title {
    font-size: 15px;
    font-weight: bold;
    color: ${(props) => (props.darkMode ? "white" : "black")};
  }

  .selectMode {
    display: flex;
    width: 84px;
    align-items: center;
    justify-content: center;
    gap: 5px;

    .moon {
      width: 15px;
      height: 15px;
    }

    .dark {
      font-size: 13px;
      color: ${(props) => (props.darkMode ? "white" : "black")};
    }
  }
`;
