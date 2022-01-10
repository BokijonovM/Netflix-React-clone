import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Loading from './Loading'
import DisplayMovies from './DisplayMovies'
import './style.css'

export default class Section extends React.Component {
    state = {
        movieList: [],
        isLoading: false,
        errorHandle: false
    }

    componentDidMount = async () => {
        try {

            let movieRes = await fetch('http://www.omdbapi.com/?apikey=15c1c355&s=' + this.props.title)

            if (movieRes.ok) {

                let movies = await movieRes.json()
                let sortedMovies = movies.Search.sort(function (a, b) {
                    return (a.Year < b.Year) ? -1 : (a.Year > b.Year) ? 1 : 0;
                }).reverse();
                this.setState({
                    movieList: [...sortedMovies],
                    isLoading: false
                })
            } else {
                this.setState({
                    movieList: [],
                    isLoading: false,
                    errorHandle: true
                })
            }

        } catch (err) {
        }
    }

    render() {

        return (
            <>
                <Container className="bodySectionBG px-4" fluid>
                    <h4 className="mb-n2 mt-2">
                        {this.props.Title} Movies
                    </h4>
                    <Row sm={1} md={2} lg={4} className="row-cols-1 px-3 row__posters">
                        {this.state.isLoading && (<Loading></Loading>)}


                        <DisplayMovies movieList={this.state.movieList} />
                    </Row>

                </Container>
            </>
        )
    }
}