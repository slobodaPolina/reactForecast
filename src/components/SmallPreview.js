import React from 'react';
import { connect } from 'react-redux';
import Image from './Image';

class SmallPreview extends React.Component {
    render() {
        const handleOnClick = () => {
            this.props.handleOnClick(this.props.data.name);
        };
        return (
            <div className="row SmallPreviewContainer">
                <div className="width45 row">
                    <div className="cityTitle">{this.props.data.name}</div>
                    <div className="cityTemp">{this.props.data.main.temp} °C</div>
                    <div className="width36px">
                        <Image name={this.props.data.weather[0].main}/>
                    </div>
                </div>
                <button className="roundButton removeButton" onClick={this.handleOnClick}>+</button>
            </div>
        );
    }
}

const addFavouriteAction = (name) => ({
    type: 'REMOVE_FAVOURITE',
    city: name
});

export const SmallPreviewContainer = connect(
    (state, ownProps) => {
        return({ cityName: state.cityName });
    },
    (dispatch, ownProps) => {
        return({
            handleOnClick: itemState => dispatch(addFavouriteAction(ownProps.prop))
        });
    }
)(SmallPreview);

export default SmallPreviewContainer;
