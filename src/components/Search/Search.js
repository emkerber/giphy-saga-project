import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Search() {
  const dispatch = useDispatch();

  // value entered in search input
  const [searchTerm, setSearchTerm] = useState('');

  // runs when Submit clicked
  let handleSubmit = (event) => {
    // prevent default page refresh
    event.preventDefault();

    // console.log('Submit clicked');

    // send searchTerm to fetchSearchGifs saga
    dispatch({ type: 'FETCH_SEARCH_GIFS', payload: searchTerm });

    // clear the input
    setSearchTerm('');
  }

  return(
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="search-term">Search Giphy for...</label>
        <input 
          type="text" 
          id="search-term" 
          value={searchTerm} 
          onChange={event => setSearchTerm(event.target.value)}
        />

        <br />

        <button type="submit">Submit</button>

      </form>
    </>
  );
}

export default Search;