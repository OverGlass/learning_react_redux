import React, {Component} from 'react';

//REACT-REDUX
import { connect } from 'react-redux';

class BookDetails extends Component {

    render() {

        if(!this.props.book){
            return <div> Selectionnez un livre pour commencer !</div>;
        }

        return (
            <div>
                <h1>Detail du livre</h1>
                <h4>Titre : {this.props.book.title}</h4>
                <div>Nombre de pages : {this.props.book.pages}</div>
            </div>
        );
    }

}



// Prends les states (data) des reducers et les converties en objet props
function mapStateToProps(state){
    return {
        //activeBook correspond a l'index des reducers nommé activeBook
        book : state.activeBook

    }
}


export default connect(mapStateToProps)(BookDetails);



