import styled from "styled-components";
import { useRestCountriesStore } from "../states/store";

const CountriesCards = () => {
  // countries state where are whole data
  const countriesInfo = useRestCountriesStore((store) => store.countriesInfo);

  console.log(countriesInfo);

  return (
    <CardsWrapper>
      {countriesInfo.map((country, index) => {
        return (
          <div key={index} className="card">
            <img className="flag" src={country.flags.png} />

            <div className="info">
              <h2>{country.name.common}</h2>

              <div className="about">
                <h5>
                  <span>Population</span>:{country.population}
                </h5>
                <h5>
                  <span>Region</span>:{country.region}
                </h5>
                <h5>
                  <span>Capital</span>:{country.capital}
                </h5>
              </div>
            </div>
          </div>
        );
      })}
    </CardsWrapper>
  );
};

export default CountriesCards;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 30px;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 264px;
    gap: 20px;
    background: white;
    padding-bottom: 45px;

    .flag {
      width: 100%;
    }

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      gap: 15px;
      padding-left: 20px;

      h2 {
        font-weight: bold;
        color: black;
      }

      .about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        gap: 7px;

        span {
          color: black;
        }
        h5 {
          color: #808080;
        }
      }
    }
  }
`;
