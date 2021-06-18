import React, {Component} from 'react';
import {
    Link
} from "react-router-dom";



class Search extends Component {

    state = {value: ''}

    onChange = (event) => {
        this.setState({value : event.target.value})
    }

    clearValue = () => {
        this.setState({value : ""})
    }

    search = (event) => {
        event.preventDefault();
        this.props.handleSearch(this.state.value)
    }

    render =() => {return (<div className="search-books-bar">
        <Link to={'/'}>
        <button className="close-search" >Close</button>
        </Link>
        <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <form onSubmit={this.search}>
            <input type="text" placeholder="Search by title or author" onChange={this.onChange} />
                </form>

        </div>
    </div>)}

}



export default Search;

