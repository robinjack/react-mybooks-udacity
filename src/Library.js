import React, {Component} from 'react';
import BookList from "./BookList";




class Library extends Component {

    isShelf = (bookShelf, testShelf) => {return testShelf === "none" ? bookShelf === undefined : bookShelf === testShelf};

    render =() => {
        console.log(this.props.books);
        return this.props.books ?
             (
                 <div>
        <ul className="list-books-content">


                {this.props.shelves.map(
                    (shelf) => {
                        return (<BookList key={shelf} shelf={shelf}
                                          books={this.props.books.filter((book) => {return this.isShelf(book.shelf, shelf)})}
                                          changeShelf={this.props.changeShelf}
                        /> )
                    }
                )}

        </ul>
                 </div>

    ) : null}

}



export default Library;

