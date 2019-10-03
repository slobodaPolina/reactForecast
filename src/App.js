import React from 'react';

function App() {
  return (
    <div className="App">
        <div>Погода здесь</div>
        <button>Обновить геолокацию</button>

        <div id="main_city_preview"></div>
        <div id="main_city_info"></div>

        <div>Избранное</div>
        <div class="search-bar">
            <input id="search-input" type="search"/>
            <button class="search-button"></button>
        </div>
        <div id="suggestions"></div>
        <div class="error-message">Seems like the city is not valid</div>

        <div id="other_cities">
            <div class="other_city_preview"></div>
            <div class="other_city_info"></div>
        </div>
    </div>
  );
}

export default App;
