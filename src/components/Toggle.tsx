import styled from "styled-components";
import moon from "../../src/assets/icon-moon.svg";
import sun from "../../src/assets/icon-sun.svg";
import { useRestCountriesStore } from "../states/store";

const Toggle = () => {
  //state
  const darkMode = useRestCountriesStore((store) => store.darkMode);

  //setState
  const setDarkMode = useRestCountriesStore((store) => store.setDarkMode);

  return (
    <ToggleWrapper className="selectMode" $darkMode={darkMode}>
      <button
        className="toggleButton"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle dark mode"
      >
        <img
          className="icon"
          src={darkMode ? sun : moon}
          alt={darkMode ? "sun icon" : "moon icon"}
        />
      </button>
      <p className="dark">Mode</p>
    </ToggleWrapper>
  );
};

export default Toggle;

const ToggleWrapper = styled.div<{ $darkMode: boolean }>`
  display: flex;
  width: 84px;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .toggleButton {
    border: none;
    background: none;
  }

  .icon {
    width: 13px;
    height: 13px;
  }

  .dark {
    font-size: 13px;
    color: ${(props) => (props.$darkMode ? "white" : "black")};
  }
`;
