import styled from "styled-components";
import CountriesCards from "../components/CountriesCards";
import { useRestCountriesStore } from "../states/store";

const Home = () => {
  const darkMode = useRestCountriesStore((store) => store.darkMode);

  return (
    <HomeWrapper $darkMode={darkMode}>
      <CountriesCards />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div<{ $darkMode: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => (props.$darkMode ? "#202C36" : "white")};
`;
