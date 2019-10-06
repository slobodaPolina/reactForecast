import React from 'react';
import { connect } from 'react-redux';
import addCityByName from '../cityAdder';

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
                        <form onSubmit={this.handleSearch}>
                            <input id="search-input" type="search"
                                placeholder="Добавить новый город" value={this.state.city} onChange={this.handleInputChange}/>
                            <button className="search-button roundButton">+</button>
                        </form>
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
        event.preventDefault();
        if (this.props.favorites.find(city => city.name === this.state.city)) {
            this.setState({isCityValid: false});
        } else {
            addCityByName(
                this.state.city,
                'ADD_FAVORITE',
                this.props.dispatch,
                () => this.setState({isCityValid: true}),
                () => this.setState({isCityValid: false})
            );
        }
    }
}

export const SearchBarContainer = connect(
    state => ({ favorites: state.favorites })
)(SearchBar);

export default SearchBarContainer;
