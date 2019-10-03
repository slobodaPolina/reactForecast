import React from 'react';

function SearchBar() {
  return (
    <div>
        <div class="search-bar">
            <input id="search-input" type="search"/>
            <button class="search-button"></button>
        </div>
        <div id="suggestions"></div>
        <div class="error-message">Seems like the city is not valid</div>
    </div>
  );
}

export default SearchBar;
