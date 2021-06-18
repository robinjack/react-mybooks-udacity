import React, {Component} from 'react';




class ShelfChanger extends Component {

    state = {}
    handleChange = (event) => {
        event.preventDefault();
        this.props.changeShelf({id: this.props.bookId}, event.target.value)
    }

    render =() => {return (
        <div className="book-shelf-changer">
        <select value ={this.props.shelf} onChange={this.handleChange}>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
    </select>
        </div>)}

}



export default ShelfChanger;

