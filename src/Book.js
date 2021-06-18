import React, {Component} from 'react';
import ShelfChanger from "./ShelfChanger";




class Book extends Component {

    render =() => {return ( <li key={this.props.bookId}>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.url})` }}></div>
                <ShelfChanger shelf={this.props.shelf} changeShelf={this.props.changeShelf} bookId={this.props.bookId}/>
            </div>
            <div className="book-title">{this.props.title}</div>
            <div className="book-authors">{this.props.author}</div>
        </div>
    </li>)}

}



export default Book;

