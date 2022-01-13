import React, { Component } from 'react';
import { useState, useEffect } from 'react';
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

const App = () => {
  const [formValue, setformValue] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        year: null,
        adress: '',
        city: '',
        postalCode: '',
        cardNumber: ''

})

  const [searchResult, setsearchResult] = useState([])
  const [search, setSearch] = useState('')

  useEffect( () => {
    const showSearchResult = async (searchQuery) => {
      setSearch(searchQuery)
    try {
        let response = await fetch("http://www.omdbapi.com/?apikey=82ebb69a&s=" + searchQuery, {
            method: "GET"
        })
        let data = await response.json()
        setsearchResult(data)
        setSearch(searchQuery)
        console.log(data)
      

    } catch (error) {
      console.log(error)
    }
    }
    showSearchResult()
  }, [])




    return (
      <Router>
      <div className="App">
        
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tv-shows' element={<TvShows />}/>
        <Route path='/movieDetail/:movieID' element={<MovieDetails />} />
        <Route path='/registration' element={<Registration formValue={formValue} setformValue={setformValue} />}/>
      
      </Routes>
      <MyFooter />
                
                
      
              
                
      </div>
      
      </Router>
    )

  
}

export default App;
