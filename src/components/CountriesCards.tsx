import { useRestCountriesStore } from "../states/store";

const CountriesCards = () => {
  // countries state where are whole data
  const countriesInfo = useRestCountriesStore((store) => store.countriesInfo);

  console.log(countriesInfo);

  return <div>CountriesCards</div>;
};

export default CountriesCards;
