import React, { Component } from "react";

class SearchBar extends Component{

    constructor(props) {
       super(props);

        this.state = {
            term: '',
        }
    }


    render() {


        return (
            <div className="searchBar">
                <input
                    type="text"
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Recherche sur Youtube"
                />

            </div>
        );
    }

    onInputChange(term) {

        if(term !== ''){var query = term} else {query = this.props.defaultTerm}

        this.setState({term});
        this.props.onInputChange(query);
    }
}



export default SearchBar;