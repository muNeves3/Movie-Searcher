import React from 'react';

// import { Container } from './styles';

function Search({ handleInput, search }) {
  return(
    <section className="searchBox-wrapper">
        <input type="text" 
            placeholder="Search for a movie" 
            className="searchbox"
            onChange={handleInput} 
            onKeyPress={search}
        />
    </section>
  );
}

export default Search;