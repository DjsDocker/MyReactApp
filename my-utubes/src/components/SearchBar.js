import React from 'react';
import './CSS/SearchBar.css';


class SearchBar extends React.Component {
    state = {searchTerm: ""};

    onInputChange = (event) => {
        this.setState({searchTerm: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    };
   
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label><h4>Search Videos</h4></label>
                        <div className="ui icon input">
                            <input 
                            icon= "search"
                            placeholder="Search your video"
                            type="text" 
                            value={this.state.searchTerm} 
                            onChange={this.onInputChange}
                            />
                            <i aria-hidden="true" 
                               onClick={this.onFormSubmit} 
                               className="search circular link icon">
                            </i>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar;