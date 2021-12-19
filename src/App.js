import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
import TvShows from './components/TvShows'
import Section from './components/Section'

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
      this.setState({ searchResult: data })
      console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">

        <NavBar showSearchResult={this.showSearchResult} />
        <TvShows />

        {this.state.search && (
          <Section
            title={this.state.search}
          />
        )}



        <Section title="Harry Potter" />
        <Section title="Marvel" />
        <Section title="Lord of the Rings" />
        <Section title="Avengers" />
        <MyFooter />


      </div>
    );

  }
}

export default App;
