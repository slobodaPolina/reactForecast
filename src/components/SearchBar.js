import React from 'react';
import { connect } from 'react-redux';

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
        this.props.dispatch({
            type: 'ADD_FAVORITE',
            cityName: this.state.city,
            successCallback: () => this.setState({isCityValid: true}),
            failureCallback: () => this.setState({isCityValid: false})
        });
    }
}

export const SearchBarContainer = connect()(SearchBar);

export default SearchBarContainer;
