import React from 'react'
import CardSearch from './CardSearch'
import { Link } from 'react-router-dom';

class DisplayMovies extends React.Component {
    render() {
        return (<>
            {this.props.movieList.map(movie =>
            <Link to={movie.imdbID} >

                <CardSearch key={movie.imdbID} movie={movie}></CardSearch>
            </Link>
            )}
        </>);
    }
}

export default DisplayMovies;