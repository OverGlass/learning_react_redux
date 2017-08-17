import { combineReducers } from 'redux';
import booksReducer from './reducer_books';
import ActiveBook from './reducer_activeBook';

const rootReducer = combineReducers({
    books : booksReducer,
    activeBook : ActiveBook,
});

export default rootReducer;
