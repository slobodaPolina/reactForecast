import React from 'react';
import { connect } from 'react-redux';
import Image from './Image';

class SmallPreview extends React.Component {
    render() {
        return (
            <div className="row SmallPreviewContainer">
                <div className="width45 row">
                    <div className="cityTitle">{this.props.data.name}</div>
                    <div className="cityTemp">{this.props.data.main.temp} °C</div>
                    <div className="width36px">
                        <Image name={this.props.data.weather[0].main}/>
                    </div>
                </div>
                <button className="roundButton removeButton"
                    onClick={() => {this.props.removeCity(this.props.data.name)}}>+</button>
            </div>
        );
    }
}

export const SmallPreviewContainer = connect(
    (state, ownProps) => {
        return({ city: state.city }); //TODO ???
    },
    (dispatch, ownProps) => {
        return({
            removeCity: itemState => dispatch({
                type: 'REMOVE_FAVOURITE',
                city: (ownProps.data.name)
            })
        });
    }
)(SmallPreview);

export default SmallPreviewContainer;
