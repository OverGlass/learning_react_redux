/**
 * Created by antonincarlin on 27/12/2016.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {
            query :'',
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onInputChange(e) {
        this.setState({query: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        //Ici on envoie la data à l'action Creators
        this.props.fetchWeather(this.state.query);
        this.setState({query: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    className="form-control"
                    value={this.state.query}
                    onChange={this.onInputChange}
                    placeholder="Cherche ta ville :)"
                    type="text"/>
                <span className="input-group-btn">
                    <button
                        type="submit"
                        className="btn btn-secondary">Recherchez</button>
                </span>
            </form>
        )
    }

}


function MapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null,MapDispatchToProps)(SearchBar);
