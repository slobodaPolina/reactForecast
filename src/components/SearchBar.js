import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import getCityCodeByName from '../vocabulary/vocabulary';

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
        this.addFavouriteCity = this.addFavouriteCity.bind(this);
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

    handleSearch(event) {
        if (this.props.favorites.find(city => city.name === this.state.city)) {
            this.setState({isCityValid: false});
        } else {
            this.addFavouriteCity(this.state.city);
        }
    }

    addFavouriteCity(cityName) {
        function preprocessData(data) {
            data.main.temp = (data.main.temp - 273.15).toFixed(1);
            data.main.pressureMmHg = (data.main.pressure * 0.75).toFixed(2);
            return data;
        }

        var cityCode = getCityCodeByName(cityName);
        if (cityCode) {
            var city = {"coord":{"lon":145.77,"lat":-16.92},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"base":"stations","main":{"temp":300.15,"pressure":1007,"humidity":74,"temp_min":300.15,"temp_max":300.15},"visibility":10000,"wind":{"speed":3.6,"deg":160},"clouds":{"all":40},"dt":1485790200,"sys":{"type":1,"id":8166,"message":0.2064,"country":"AU","sunrise":1485720272,"sunset":1485766550},"id":2172797,"name":"Cairns","cod":200};
            this.setState({isCityValid: true});
            this.props.dispatch({
                type: 'ADD_FAVORITE',
                city: preprocessData(city)
            });
            /*axios.get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?id=' + cityCode + '&appid=c21880c5125c247d642c0e4058a0a704')
                .then(({ data }) => {
                    this.setState({isCityValid: true});
                    this.props.dispatch({
                        type: 'ADD_FAVORITE',
                        city: preprocessData(data)
                    });
                }).catch(error => {
                    this.setState({isCityValid: false});
                });*/
        } else {
            this.setState({isCityValid: false});
        }
    }

}

export const SearchBarContainer = connect(
    state => ({ favorites: state.favorites })
)(SearchBar);

export default SearchBarContainer;
