import React, {Component} from 'react';
import Book from "./Book";



class BookList extends Component {

    render =() => {return (
        <li key={this.props.shelf}>
        <div className={'bookshelf'}>
        <h2 className="bookshelf-title">{this.props.shelf}</h2>
            <ol className={"books-grid"}>
            {this.props.books.map((book) =>
                (<Book
                    bookId={book.id}
                    url={book.imageLinks? book.imageLinks.smallThumbnail : null
                        } title={book.title} author={book.author}
                shelf={book.shelf}
                       changeShelf={this.props.changeShelf}
                />)
            )
            }
        </ol>
        </div>
        </li>
    )}

}



export default BookList;

