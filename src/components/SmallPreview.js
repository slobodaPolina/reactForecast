import React from 'react';
import Image from './Image';

class SmallPreview extends React.Component {
    render() {
        return (
            <div className="row SmallPreviewContainer">
                <div className="width45 row">
                    <div className="cityTitle">{this.props.city.name}</div>
                    <div className="cityTemp">{this.props.city.main.temp} °C</div>
                    <div className="width36px">
                        <Image name={this.props.city.weather[0].main}/>
                    </div>
                </div>
                <button className="roundButton removeButton"
                    onClick={this.props.removeCity}>+</button>
            </div>
        );
    }
}

export default SmallPreview;
