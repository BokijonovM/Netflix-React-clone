// import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
// import TvShows from './components/TvShows'
import MainSection from "./MainSection";
import NotFound from "./components/NotFound";

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TvRouter from './components/TvRuoter'
import { useState } from 'react';
import MovieDetails from './components/MovieDetails'

const App = () => {
  // state = {
  //   searchResult: [],
  //   search: ""
  // }

  const [searchResult, setSearchResult] = useState([])
  const [search, setSearch] = useState("")

  const showSearchResult = async (searchQuery) => {
    setSearch({ searchQuery })
    try {
        let response = await fetch("http://www.omdbapi.com/?apikey=82ebb69a&s=" + searchQuery, {
            method: "GET"
        })
        let data = await response.json()
        setSearchResult({data})
        setSearch({searchQuery})
        console.log(data)
      

    } catch (error) {
      console.log(error)
    }
  }


    return (
      <BrowserRouter>
        <div className="App">
          
          <NavBar />

          <Routes>
            <Route path="/" element={<MainSection/> } />

            <Route path="/tv-shows" element={<TvRouter />} />
            <Route path="/details/:movieID" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>

          
          
           

          <MyFooter />
        </div>
      </BrowserRouter>
    );

  
}

export default App;
