import { useState, useEffect } from 'react';
import ResultList from './ResultList';
import Form from 'Form';
// Import our search method
import searchAPI from '../utils/API';

const SearchResultContainer = () => {
  // Declare a new state variable, "results"
  const [results, setResults] = useState([]);

  // Method to get search results and set state
  const searchGiphy = async (query) => {
    const { data } = await search(query);
    setResults(data.data);
  };

  // We want to run this method when the component first loads so that we have images of kittens to display
  // The second argument is the dependency array. This means that this method will only run when the component first loads
  useEffect(() => {
    searchGiphy('kittens');
  }, []);

  //stops the page from reloading and updates results
  const onSubmitHandler = (e) => {
    e.preventDefault();

    searchGiphy(search);
  }

  return (
    <div>

      <Form
        serach={search}
        setSearch={setSearch}
        onSubmitHandler={onSubmitHandler}
      />

      <ResultList results={results} />
    </div>
  );
};

export default SearchResultContainer;
