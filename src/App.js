import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from "./Library";
import Search from "./Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelves : ["wantToRead", "currentlyReading", "read"],
    books : [],
    searchResults : []
  }



  componentDidMount() {
    BooksAPI.getAll().then((books) =>
    {
      this.setState({books: books})
    })
  }



  handleChangeShelf = (inputBook, shelf) => {
      this.setState((prevState) => ({books : prevState.books.map((book) => {
      return book.id !== inputBook.id? book : {...book, shelf:shelf};
      }),
        searchResults : prevState.searchResults.map((book) => {
          return book.id !== inputBook.id? book : {...book, shelf:shelf};
        })

      }));

      BooksAPI.update({id:inputBook.id}, shelf);
  }


  handleSearch = (query) => {
    return query.length > 0 ?
    BooksAPI.search(query).then((results) =>
    {
      console.log("results", results);
      this.setState({searchResults: results.length > 0 ? results : []})
    }) : null;
    }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={'/'} render={ () => {
            return (
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <Library shelves={this.state.shelves} books={this.state.books} changeShelf={this.handleChangeShelf}

                  />
                  <div className="open-search">
                    <Link to={'/search'} className={'link-search'}> Search </Link>
                  </div>
                </div>
            )}

          } />
        <Route path={'/search'} render = { () => {
          return (<div className="search-books">
            <Search handleSearch={this.handleSearch}/>
            <div className="search-books-results">
              <Library shelves={[...this.state.shelves, "none"]} books={this.state.searchResults} changeShelf={this.handleChangeShelf}
              search={true}
              />
            </div>
          </div>)
        }} />
        </Switch>
      </Router>
    )
  }
}

export default BooksApp
