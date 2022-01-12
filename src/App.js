import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import TvShows from './components/TvShows'
import Section from './components/Section'
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

class App extends Component {
  state = {
    searchResult: [],
    search: ""
  }
  showSearchResult = async (searchQuery) => {
    this.setState({ search: searchQuery })
    try {
        let response = await fetch("http://www.omdbapi.com/?apikey=82ebb69a&s=" + searchQuery, {
            method: "GET"
        })
        let data = await response.json()
        this.setState({searchResult:data})
        this.setState({search:searchQuery})
        console.log(data)
      

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <Router>
      <div className="App">
        
      <NavBar showSearchResult ={this.showSearchResult}/>
      <Routes>
        <Route path='/tv-shows' element={<TvShows />}/>
        <Route path='/movieDetail/:movieID' element={<MovieDetails />} />
      </Routes>

        
      {this.state.search && (
        <>
            <Section
              heading="Search Results" title={this.state.search} />
            </>
      ) }

            {!this.state.search &&
             
              (<>
                <Section heading="Harry Potter" title="Harry Potter"/>
                <Section heading="Marvel" title="Marvel"/>
                <Section heading="Lord of the Rings" title="Lord of the Rings"/>
                <Section heading="Horror" title="Horror"/>
              </>)}
                <MyFooter />
                
                
      
              
  
      </div>
      </Router>
    );

  }
}

export default App;
