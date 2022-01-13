import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import MyFooter from "./MyFooter";
import TvShows from './TvShows'
import Section from './Section'
import MovieDetails from './MovieDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Registration from './Registration';

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
      <div className="App">
        
        
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
      
    );

  }
}

export default App;
