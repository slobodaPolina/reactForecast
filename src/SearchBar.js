import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            isCityValid: true
        };
        // Эта привязка обязательна для работы `this` в колбэке.
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {
        let msg = this.state.isCityValid ? "" : <div className="error-message">Seems like the city is not valid</div>;
        return (
            <div>
                <div className="search-bar row">
                    <div className="bigText">Избранное</div>
                    <div>
                        <input id="search-input" type="search"
                            placeholder="Добавить новый город" value={this.state.city} onChange={this.handleInputChange}/>
                        <button className="search-button roundButton" onClick={this.handleSearch}>+</button>
                    </div>
                </div>
                {msg}
            </div>
        );
    }

    handleInputChange(event) {
        this.setState({city: event.target.value});
    }

    handleSearch(event) { //TODO
        var cityName = this.state.city;
        var citiesKeys = {};
        // getCities().forEach(city => citiesKeys[city.name] = city.id});
        var cityCode = citiesKeys[cityName];
        if (cityCode) {
            /*axios.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=' + cityCode + '&appid=c21880c5125c247d642c0e4058a0a704')
                .then(({ data }) => {
                    console.info(data);
                    preprocessData(data);
                    drawData(data);
                }).catch(error => {
                    this.setState({isCityValid: false});
                });*/
        } else {
            this.setState({isCityValid: false});
        }
    }
}

export default SearchBar;
