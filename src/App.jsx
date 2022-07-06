// import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import MyFooter from "./components/MyFooter";
// import TvShows from './components/TvShows'
import MainSection from "./MainSection";
import NotFound from "./components/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvRouter from "./components/TvRuoter";
// import { useState } from 'react';
import MovieDetails from "./components/MovieDetails";
import Register from "./components/Register";
import OwnDetails from "./components/OwnDetails";
import NewFilm from "./components/NewFilm";
import Movies from "./components/Movies";
import MyLists from "./components/MyLists";
import TvShows from "./components/TvShows";
import { useEffect, useState } from "react";

const App = () => {
  // state = {
  //   searchResult: [],
  //   search: ""
  // }

  // const [searchResult, setSearchResult] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    // if(search.length < 3){
    //   showSearchResult()
    // }

   },[search])


  // const showSearchResult = async (search) => {
  //   try {
  //       let response = await fetch("http://www.omdbapi.com/?apikey=82ebb69a&s=" + search, {
  //           method: "GET"
  //       })
  //       let data = await response.json()
  //       setSearchResult({data})
  //       console.log(data)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar search={search} setSearch={setSearch}/>

        <Routes>
          <Route path="/" element={<MainSection search={search} setSearch={setSearch} />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/my-lists" element={<MyLists />} />
          <Route path="/recently-added" element={<TvRouter />} />
          <Route path="/details/:movieID" element={<MovieDetails />}></Route>
          <Route path="/detailsOwn/:movieID" element={<OwnDetails />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/new" element={<NewFilm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <MyFooter />
      </div>
    </BrowserRouter>
  );
};

export default App;
