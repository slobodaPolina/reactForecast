import React from 'react';
import Forecast from './Forecast';
import SmallPreview from './SmallPreview';

class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [{
                name: "Cair",
                main: {
                    temp: 27,
                    pressureMmHg: 700,
                    humidity: 40
                },
                weather: [{
                    main: "Clear",
                    description: "Cool yeah"
                }],
                wind: {
                    speed: 3
                },
                coord: {
                    lon: 23,
                    lat: 45
                }
            }]
        };
    }

    render() {
        return (
            <div className="favorites">
                {this.state.cities.map((city, i) => {
                    return (
                        <div className="smallCityCard">
                            <SmallPreview data={city}/>
                            <Forecast data={city}/>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Favorites;
