import styled from "styled-components";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";
import { useRestCountriesStore } from "./states/store";
import Home from "./pages/Home";

function App() {
  //setState for fetchountries function

  const setCountriesInfo = useRestCountriesStore(
    (store) => store.setCountriesInfo
  );

  useEffect(() => {
    //when website will be open to catch data imediatelly
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,nativeName,population,region,subregion,capital,tld,currencies,languages"
        );

        setCountriesInfo(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <AppWrapper>
      <Header />
      <Home />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #f2f2f2;
  flex-direction: column;
  align-items: center;
`;
