import React, {Component} from 'react';
import BookList from "./BookList";




class Library extends Component {


    getBookShelfFromBooks  = (inputBook) => {
        let book = this.props.currentBooks.filter((book) => {return book.id === inputBook.id })[0]

        return book? book.shelf : "none";
    }

    isShelf = (bookShelf, testShelf) => {
        return testShelf === "none" ?
            bookShelf === "none" :
            bookShelf === testShelf};

    render =() => {

        const shelfFunc = this.props.currentBooks ?
            this.getBookShelfFromBooks :
            (book) => {return book.shelf}

        return this.props.books ?
             (
                 <div>
        <ul className="list-books-content">


                {this.props.shelves.map(
                    (shelf) => {
                        return (<BookList key={shelf} shelf={shelf}
                                          books={this.props.books.filter((book) =>
                                          {return this.isShelf(
                                              shelfFunc(book)
                                              , shelf)})}
                                          changeShelf={this.props.changeShelf}
                        /> )
                    }
                )}

        </ul>
                 </div>

    ) : null}

}



export default Library;

