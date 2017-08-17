import React, {Component} from 'react';

// REACT-REDUX
import { connect } from 'react-redux';

// REDUX
import { bindActionCreators} from 'redux';

// ACTIONS CREATORS
import {selectBook}  from '../actions/index';


class BookList extends Component {

    renderList(){
        return this.props.books.map((book)=> {
            return (
                <li
                    key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}> {book.title} </li>
            );
        });
    }


    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }

}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // Inside a book list
    return {
      books : state.books,
    };
}

//Anything returned in this function will en up as props
//On the BookList container

// En gros, ça ballance les Créateur d'actions en méthode dans l'objet props.
// Je pense que ça passe dans le prototype des reducers

function mapDispatchToProps(dispatch){
    // Whatever is called, the result should be passed
    // In all reducers
    return bindActionCreators({selectBook : selectBook}, dispatch);

}

// Transform le composent BookList en container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);