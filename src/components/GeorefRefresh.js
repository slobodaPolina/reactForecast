import React from 'react';
import { connect } from 'react-redux';
import addCityByName from '../cityAdder';

class GeorefRefresh extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    render() {
        return (
            <button className="georefRefresh" onClick={this.handleSearch}>Обновить геолокацию</button>
        );
    }

    handleSearch(event) {
        var cityName = "Sankt-Peterburg"; //this is the default value
        // here check georeference - city name
        if (false) {
            // if i can get the real cityName, cityNmae = ...
        }
        addCityByName(
            cityName,
            'SET_GEOLOCATION',
            this.props.dispatch
        );
    }
}

export const GeorefRefreshContainer = connect()(GeorefRefresh);
export default GeorefRefreshContainer;
