import styled from "styled-components";
import CountriesCards from "../components/CountriesCards";

const Home = () => {
  return (
    <HomeWrapper>
      <CountriesCards />
    </HomeWrapper>
  );
};

export default Home;

const HomeWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
