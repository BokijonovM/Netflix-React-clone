import { Component } from "react";
import { Container, Form, Button, FormControl, Row } from "react-bootstrap";
import Section from "./Section";

class Search extends Component {

    state = {
        search: {
            searchInput: '',
            movies: []
        }
    };

    searchMovies = (e) => {
        e.preventDefault()
        this.setState({
            search: {
                searchInput: e.target.value,
                movies: this.props.theme.filter((movie) => movie.title.toLowerCase().includes(this.state.search.searchInput.toLowerCase())
                )
            }
        }, () => console.log(this.state.search.searchInput))
        if (e.target.value === '') {
            this.setState({
                search: {
                    searchInput: e.target.value,
                    movies: []
                }
            })
        }

    }

    render() {
        return (
            <Container className="xtra-topMargin px-0 mb-5">
                <Row>
                    <h2 className="px-4 ml-2 align-items-center">{this.props.title}</h2>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => this.searchmovies(e)} />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Row>
                <div className="row row-cols-sm-2 row-cols-md-2 row-cols-lg-4 px-3">

                    {this.state.search.movies.map((movie) => <Section getUserSelectedmovie={this.props.getUserSelectedmovie} getDisplayedmovie={this.props.getDisplayedmovie} key={movie.asin} theme={movie} />)}
                </div>
            </Container>
        );
    }
}

export default Search;
