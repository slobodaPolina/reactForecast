import React from 'react';
import { connect } from 'react-redux';
import { addCityByGeolocation } from '../cityAdder';

class GeorefRefresh extends React.Component {
    render() {
        return (
            <button className="georefRefresh"
                onClick={() => this.props.dispatch(addCityByGeolocation)}>
                    Обновить геолокацию
            </button>
        );
    }
}

export const GeorefRefreshContainer = connect()(GeorefRefresh);
export default GeorefRefreshContainer;
