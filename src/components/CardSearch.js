import { Component, useState } from 'react'
import { Card, Button} from 'react-bootstrap'
import  Modal from 'react-bootstrap/Modal'
import './style.css'


export default class CardSearch extends Component {
    state = {
        showPrice: null,
        btnColor: 'primary',
        cardClass: "px-1 py-4 m-0 border-0 w-100 bg-transparent",
        isClicked: false,
        showComments:false
    }

    commentsDisplay = () => {
        this.setState({
            showPrice: null,
            btnColor: 'primary',
            cardClass: "px-1 py-4 mb-4 m-0 border-0 w-100 bg-transparent",
            isClicked: !this.state.isClicked

        })
    }
    // onDoubleClickF = () => {
    //     this.setState({
    //         btnColor: 'primary',
    //         cardClass: "px-1 py-4 m-0 border-0 w-100 bg-transparent",
    //         padding: "0px"
    //     })
    // }
    setShowComments = (show) =>{
        this.setState({showComments:show})
    }
    
    showComments = () => this.setShowComments(true)
    hideComments = () => this.setShowComments(false)

    render() {
        return (
            <Card className={this.state.cardClass} style={{maxWidth:"18rem"}}>
                <Card.Img onClick={this.showComments} className="img-poster align-self-center" variant="top" src={this.props.movie.Poster} />
                <div className="position-relative">
                    <Card.Body className="d-flex flex-column pb-0 pt-2 px-0 justify-content-between w-100 position-absolute">
                        {this.state.isClicked && <Card.Title className="mb-2 px-2"> <h6>{this.props.movie.Title}</h6> <h6>{this.props.movie.imdbID}</h6></Card.Title>}
                    </Card.Body>
                </div>
                        {this.state.showComments && (
                        <Modal show={true} onHide={this.hideComments}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Comments List</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <p>Modal body text goes here.</p>
                                </Modal.Body>

                                <Modal.Footer>
                                    <Button variant="secondary">Close</Button>
                                </Modal.Footer>
                        </Modal>)}
            </Card>
        )
    }
}

   
// import { Component, useState } from "react"
// import CommentsArea from "./CommentArea"
// import Modal from "react-bootstrap/Modal"
// import "../App.css"

// class MovieCard extends Component {
//   state = {
//     showComments: false,
//   }

//   setShowComments = (show) => {
//     this.setState({
//       showComments: show,
//     })
//   }

//   showComments = () => this.setShowComments(true)
//   hideComments = () => this.setShowComments(false)

//   render() {
//     return (
//       <div>
//         <img
//           className="img-fluid w-100 movie-img"
//           src={this.props.movie.Poster}
//           alt={this.props.movie.Title}
//           onClick={this.showComments}
//         />
//         {this.state.showComments && (
//           <Modal show={true} onHide={this.hideComments}>
//             <Modal.Header closeButton>
//               <Modal.Title>Modal title</Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//               <CommentsArea id={this.props.movie.imdbID} />
//             </Modal.Body>

//             <Modal.Footer>
//               {/* <AddComment fetchComments={this.reload} id={this.props.asin} /> */}
//             </Modal.Footer>
//           </Modal>
//         )}
//       </div>
//     )
//   }
// }

// export default MovieCard