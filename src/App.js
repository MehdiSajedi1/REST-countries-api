import React, { useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppContext } from './context/app-context';
import axios from 'axios';
import './sass/app.scss';
import Header from './components/Utilities/Header';
import SearchFilter from './components/Home/SearchFilter';
import Countries from './components/Home/Countries';
import CountryDetails from './components/DetailsPage/CountryDetails';
import Loading from './components/Utilities/Loading';
import CountriesShownText from './components/Home/CountriesShownText';
import Footer from './components/Home/Footer';
import PageNotFound from './components/Utilities/PageNotFound';
import countries from './data/countries.json';

const countryCodesToNames = new Map();

function App() {
  const { appState, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: 'GET-DARK-STORAGE' });
  }, [dispatch]);

  useEffect(() => {
    appState.darkMode && document.body.classList.add('darkmode');
    !appState.darkMode && document.body.classList.remove('darkmode');
  }, [appState.darkMode]);

  const createCountryKeyPairs = (countries) => {
    countries.forEach((country) => {
      countryCodesToNames.set(country.alpha3Code, country.name);
    });
  };

  useEffect(() => {
    // const fetchCountries = async () => {
    //   dispatch({ type: 'TOGGLE-LOADING' });
    //   try {
    //     // const res = await axios.get('https://restcountries.eu/rest/v2/all');
    //     const res = await axios.get('https://restcountries.com/v3/all');
    //     dispatch({ type: 'SET-ALL-COUNTRIES', payload: res.data });
    //     createCountryKeyPairs(res.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    //   dispatch({ type: 'TOGGLE-LOADING' });
    // };
    // fetchCountries();

    dispatch({ type: 'SET-ALL-COUNTRIES', payload: countries });
    createCountryKeyPairs(countries);
  }, [dispatch]);

  const idxOfFirstPost =
    appState.currentPage * appState.countriesPerPage -
    appState.countriesPerPage;
  const idxOfLastPost = appState.currentPage * appState.countriesPerPage;

  useEffect(() => {
    dispatch({
      type: 'SET-CURRENT-COUNTRIES',
      payload: { idxFirst: idxOfFirstPost, idxLast: idxOfLastPost },
    });
  }, [
    dispatch,
    appState.countries,
    appState.totalCountries,
    appState.currentPage,
    idxOfFirstPost,
    idxOfLastPost,
  ]);

  useEffect(() => {
    dispatch({ type: 'RESET-TO-FIRST-PAGE' });
  }, [dispatch, appState.totalCountries, appState.sortBy]);

  return (
    <main className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <SearchFilter />
            {appState.isLoading && <Loading page="home" />}
            {!appState.isLoading && (
              <>
                <CountriesShownText location="top" />
                <Countries />
                <Footer />
              </>
            )}
          </Route>
          <Route exact path="/details/:id">
            <CountryDetails countryCodesToNames={countryCodesToNames} />
          </Route>
          <Route>{PageNotFound}</Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
