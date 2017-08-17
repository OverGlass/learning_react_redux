import React, { Component } from 'react';

//Containers
import BookList from '../containers/bookList';
import BookDetails from '../containers/bookDetails';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetails />
      </div>
    );
  }
}
