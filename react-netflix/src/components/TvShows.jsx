import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class TvShows extends Component{
render(){
    return(

<div>
<Row>
    <Col md={3} className="d-inline-block" >
       
          <h3 class="mr-5 mb-5 text-white">{this.props.title}</h3>
        

    </Col>
    <Col md={8} className="d-inline-block" >  
        
          <button class="
              btn
              bg-transparent
              btn-sm
              dropdown-toggle
              text-white
              border border-white
            " type="button" data-toggle="dropdown" aria-expanded="false">
            Genres
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Comedy</a>
    <a class="dropdown-item" href="#">Romance</a>
  </div>
    </Col>
        
            
          
        <Col className="d-inline-block ">
          
              <svg xmlns="http://www.w3.org/2000/svg" id="icon1" width="16" height="16" fill="white" class="mt-n2 bi bi-list-nested" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"></path>
              </svg>
            
    
              <svg xmlns="http://www.w3.org/2000/svg" id="icon2" width="16" height="16" fill="white" class="mt-n2 bi bi-grid-fill" viewBox="0 0 16 16">
                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
              </svg>
           
        </Col>
        
        
    

</Row>


</div>
    )
}

}

export default TvShows
{/* <nav class="navbar navbar-expand-lg navbar-dark font-weight-bold">
<a class="navbar-brand" href="#"
  ><img src="./assets/Netflix_Logo_RGB.png" height="35px"
/></a>
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarNavDropdown"
  aria-controls="navbarNavDropdown"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div
  class="collapse navbar-collapse justify-content-between"
  id="navbarNavDropdown"
>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#">Home</a>
    </li>
    <li class="nav-item active">
      <a class="nav-link" href="#"
        >TV Shows<span class="sr-only">(current)</span></a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Movies</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Recently Added</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">My List</a>
    </li>
  </ul>

  <ul class="navbar-nav" style="vertical-align: middle">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="white"
      class="bi bi-search mt-3 mr-3"
      viewBox="0 0 16 16"
    >
      <path
        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
      />
    </svg>
    <p class="mt-3 mr-3" style="color: white; font-size: 12px">KIDS</p>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="white"
      class="bi bi-bell-fill mt-3 mr-3"
      viewBox="0 0 16 16"
    >
      <path
        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
      />
    </svg>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="grey"
          class="bi bi-person-square"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"
          />
        </svg>
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <a class="dropdown-item" href="./netflix-profile.html"
          >Edit profile</a
        >
        <a class="dropdown-item" href="./netflix-settings.html"
          >Settings</a
        >
      </div>
    </li>
  </ul>
</div>
</nav> */}

