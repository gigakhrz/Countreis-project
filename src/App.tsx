import styled from "styled-components";
import Header from "./components/Header";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,nativeName,population,region,subregion,capital,tld,currencies,languages"
        );
        const data = response.data;
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCountries();
  }, []);
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #f2f2f2;
`;
