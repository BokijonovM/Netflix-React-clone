import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

class TvShows extends Component {
  render() {
    return (


      <Row className="my-4">
        <Col md={2} className="d-flex justify-content-center mt-3" >

          <h3 class="  text-white ">TV Shows</h3>


        </Col>
        <Col md={9} className="d-flex justify-content-start mt-3" >

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



        <Col className="d-inline-block mt-3">

          <svg xmlns="http://www.w3.org/2000/svg" id="icon1" width="16" height="16" fill="white" class="mt-n2 bi bi-list-nested" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z"></path>
          </svg>


          <svg xmlns="http://www.w3.org/2000/svg" id="icon2" width="16" height="16" fill="white" class="mt-n2 bi bi-grid-fill" viewBox="0 0 16 16">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
          </svg>

        </Col>




      </Row>


    )
  }

}

export default TvShows
