import React from 'react';
import { connect } from 'react-redux';
import addCityByName from '../cityAdder';
import addCityByCoords from '../cityAdder';

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
        var addDefaultCity = () =>
            addCityByName(
                "Sankt-Peterburg", //this is the default value,
                'SET_GEOLOCATION',
                this.props.dispatch
            );

        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => addCityByCoords(position.coords.latitude, position.coords.longitude),
                addDefaultCity()
            );
        } else {
            addDefaultCity();
        }
    }
}

export const GeorefRefreshContainer = connect()(GeorefRefresh);
export default GeorefRefreshContainer;
