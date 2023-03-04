function Search() {

  let handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Submit clicked');
  }

  return(
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="search-term">Search Giphy for...</label>
        <input type="text" id="search-term" />

        <br />

        <button type="submit">Submit</button>

      </form>
    </>
  );
}

export default Search;