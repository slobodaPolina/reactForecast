import React from 'react';
import { connect } from 'react-redux';
import MainPreview from './MainPreview';
import Forecast from './Forecast';

class MainBlock extends React.Component {
    render() {
        return (
            <div className="row main">
                <MainPreview data={this.props.data}/>
                <div className="width45">
                    <Forecast data={this.props.data}/>
                </div>
            </div>
        );
    }
}

export const MainBlockContainer = connect(
    state => ({ data: state.geolocation })
)(MainBlock);

export default MainBlockContainer;
