import { useState } from 'react';

function Search() {

  const [searchTerm, setSearchTerm] = useState('');

  let handleSubmit = (event) => {
    event.preventDefault();

    console.log('Submit clicked');
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