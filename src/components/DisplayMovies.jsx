import React from 'react'
import Search from './Search'

class DisplayMovies extends React.Component {
    render() {
        return (
            <>
                {
                    this.props.movieList.map(movie => <Search key={movie.imdbID} movie={movie}></Search>)}
            </>);
    }
}

export default DisplayMovies;