import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import DisplayMovies from './components/DisplayMovies';
import MyFooter from "./components/MyFooter";
import TvShows from './components/TvShows'
import Section from './components/Section'

class App extends Component {
        state = {
          searchResult:[]
        }
  showSearchResult = async(searchQuery) =>{
      
    try {
        let response = await fetch("http://www.omdbapi.com/?apikey=82ebb69a&s=" + searchQuery, {
            method: "GET"
        })
        let data = await response.json()
        this.setState({searchResult:data})
        

    } catch (error) {
        console.log(error)
    }
}

  render(){
    return (
      <div className="App">
        
      <NavBar showSearchResult ={this.showSearchResult}/>
      {this.state.searchResults?.length > 0 && (
            <DisplayMovies
              title="Search results"
              movieList={this.state.searchResult}
            />

            
      )}
            
                
                <TvShows />
                <Section title="Harry Potter"></Section>
                <Section title="Marvel"></Section>
                <Section title="Lord of the Rings"></Section>
                <Section title="Horror"></Section>
                <MyFooter />
      
  
      </div>
    );

  }
}

export default App;
