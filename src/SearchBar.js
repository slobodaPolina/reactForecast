import React from 'react';

function SearchBar() {
  return (
    <div>
        <div class="search-bar row">
            <div class="bigText">Избранное</div>
            <div>
                <input id="search-input" type="search" placeholder="Добавить новый город"/>
                <button class="search-button roundButton">+</button>
            </div>
        </div>
        <div id="suggestions"></div>
        <div class="error-message">Seems like the city is not valid</div>
    </div>
  );
}

export default SearchBar;
