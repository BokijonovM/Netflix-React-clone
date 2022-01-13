import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Home from "./components/Home"
import MyFooter from "./components/MyFooter";
import TvShows from './components/TvShows'
import Section from './components/Section'
import MovieDetails from './components/MovieDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration';

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
        <Route path='/' element={<Home />} />
        <Route path='/tv-shows' element={<TvShows />}/>
        <Route path='/movieDetail/:movieID' element={<MovieDetails />} />
        <Route path='/registration' element={<Registration />}/>
      
      </Routes>
      <MyFooter />
                
                
      
              
                
      </div>
      
      </Router>
    );

  }
}

export default App;
