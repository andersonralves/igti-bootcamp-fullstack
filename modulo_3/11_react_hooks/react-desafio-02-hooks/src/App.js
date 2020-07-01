import React, { useState, useEffect } from 'react';
import Countries from './components/countries/Countries';
import Header from './components/header/Header';

export default function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filteredPopulation, setFilteredPopulation] = useState(0);
  const [userFilter, setUserFilter] = useState('');

  useEffect(() => {
    const getCountries = async () => {
      const url = 'https://restcountries.eu/rest/v2/all';
      const res = await fetch(url);
      let allCountries = await res.json();

      allCountries = allCountries.map(
        ({ name, numericCode, flag, population }) => {
          return {
            id: numericCode,
            name,
            filterName: name.toLowerCase(),
            flag,
            population,
          };
        }
      );

      setAllCountries(allCountries);
      setFilteredCountries([...allCountries]);
    };

    getCountries();
  }, []);

  const calculateTotalPopulationFrom = (countries) => {
    const totalPopulation = countries.reduce((accumulator, current) => {
      return accumulator + current.population;
    }, 0);

    return totalPopulation;
  };

  const handleChangeFilter = (newText) => {
    setUserFilter(newText);

    const filterLowerCase = newText.toLowerCase();

    const filteredCountries = allCountries.filter((country) =>
      country.filterName.includes(filterLowerCase)
    );

    const filteredPopulation = calculateTotalPopulationFrom(filteredCountries);

    setFilteredCountries(filteredCountries);
    setFilteredPopulation(filteredPopulation);
  };

  return (
    <>
      <div className="container">
        <h1 style={styles.centeredTitle}>React Countries</h1>
        <Header
          filter={userFilter}
          countryCount={filteredCountries.length}
          totalPopulation={filteredPopulation}
          onChangeFilter={handleChangeFilter}
        />

        <Countries countries={filteredCountries} />
      </div>
    </>
  );
}

const styles = {
  centeredTitle: {
    textAlign: 'center',
  },
};
