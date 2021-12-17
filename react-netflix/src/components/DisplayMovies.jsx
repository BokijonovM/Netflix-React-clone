import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardSearch from './CardSearch'

class DisplayMovies extends React.Component {
    render() { 
        return (<>
              {this.props.movieList.map(movie => <CardSearch key={movie.imdbID} movie={movie}></CardSearch>)}
        </>);
    }
}
 
export default DisplayMovies;