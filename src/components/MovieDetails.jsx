import { Col, Container, Row } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MovieDetails = () => {
     const params = useParams()
    // params is ALWAYS going to be an object!
    console.log('PARAMS!!', typeof params.movieID)

    const [film, setFilm] = useState(null)
    const [comment, setComment] = useState(null)

    //  useEffect(() => {
    //     I have the pastaId in the url! let's grab it back with params
    //     const movieID = params.movieID
    //     const pastaDish = dishes.find(pasta => pasta.id.toString() === pastaId)
    //     // pastaDish now hopefully is an object with all the details about the right pasta I clicked on!
    //     console.log(pastaDish)
    //     setTimeout(() => {
    //         setPasta(pastaDish)
    //     }, 1000)

    //     fetchMovie()
    // }, [])

    // const movieId = params.movieID


    useEffect(() => {
        const fetchMovie = async() => {
            try {

            let movieRes = await fetch('http://www.omdbapi.com/?apikey=15c1c355&i=' + params.movieID)

            if (movieRes.ok) {

                let movies = await movieRes.json()
                console.log(movies)
                setFilm(movies)
        
                
            
            } else {
               console.log("Sorry movie error")
            }}

            catch (err) {
                // console.log(err)
            }

        }
        const fetchComment = async() => {
            try {
                // e.preventDefault()
                let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + params.movieID, {
                    // method: "GET",
                    headers: {
                        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYjA3YTRjZmY1ZjAwMTU5MGJkYjMiLCJpYXQiOjE2NDIwNDMxNTQsImV4cCI6MTY0MzI1Mjc1NH0.DjwFo28aXHGzjOHfEnj98qJ4unczJzZ5D4_PD9OeBVA"
                    }
                })
                if(response.ok){
                    let data = await response.json()
                    console.log(data)
                    setComment(data)
                }else{
                    console.log("Sorry comment error")
                }
                
            }catch (err) {
                console.log(err)
            }
        }
        fetchMovie()
        fetchComment()
    }, [params.movieID])

    return(
        <div>
            <Container>
                <Row sm={1} md={1} lg={2}>
                    <Col>
                        {
                        typeof film === 'undefined'
                            ? (
                                <h1>404 - Movie NOT FOUND</h1>
                            )
                            : film
                                ? (
                                    <Row>
                                        <Col className="d-flex flex-column align-items-start">
                                            <img className="my-4" src={film.Poster} alt="film" />
                                            <h2 style={{textAlign: "start"}}>{film.Title}</h2>
                                            <p style={{textAlign: "start"}} className='mb-0'>Actors: {film.Actors}</p>
                                            <p style={{textAlign: "start"}} className="text-muted">Writer: {film.Writer}</p>
                                        </Col>
                                        
                                    </Row>
                                )
                                : <h1>LOADING...</h1>
                    }

                     </Col>
                     <Col>
                     {
                        typeof comment === 'undefined'
                            ? (
                                <h1>404 - Comment NOT FOUND</h1>
                            )
                            : comment
                                ? (
                                    <Row>
                                        <Col className="mt-4 d-flex flex-column align-items-start">
                                            <ul style={{ listStyleType: "none" }}>
                                                <h3>Comments</h3>
                                                {comment.map((c) => (
                                                <li className="my-3" key={c.elementId}>
                                                    <p>{c.comment}  {c.rate}</p>
                                                    
                                                    
                                                </li>
                                                ))}
                                            </ul>
                                        </Col>
                                    </Row>
                                )
                                : <h1>LOADING...</h1>
                    }

                     </Col>
                </Row>
                
        </Container>
        </div>

    )
}


export default MovieDetails



















// import {  Container } from "react-bootstrap"
// import { useParams } from 'react-router-dom'
// import { useEffect, useState } from 'react'



// const MovieDetails = () => {

//     const [details, setDetails] = useState(null);
//   const [comments, setComments] = useState([]);

//   const params = useParams();

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         let resp = await fetch(
//           "http://www.omdbapi.com/?apikey=24ad60e9&i=" + params.movieID
//         );
//         if (resp.ok) {
//             console.log(resp)
//           let data = await resp.json();
//           console.log(data);
//           setDetails(data);
//         } else {
//           console.log("error fetching details");
//         }
//       } catch (error) {
//         // console.log(error);
//       }
//     };
//     // const fetchComments = async () => {
//     //   try {
//     //     let response = await fetch(
//     //       "https://striveschool-api.herokuapp.com/api/comments/" +
//     //         params.movieID,
//     //       {
//     //         headers: {
//     //           Authorization:
//     //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU1OTRjZmY1ZjAwMTU5MGJkYWYiLCJpYXQiOjE2Mzk2NjI1MjgsImV4cCI6MTY0MDg3MjEyOH0.M_W7mM03N1yeADR5Q0nbGPMaXiMh73U1VxH4uhVI160",
//     //         },
//     //       }
//     //     );
//     //     if (response.ok) {
//     //       let data = await response.json();
//     //       setComments(data);
//     //     } else {
//     //       console.log("error fetching comments");
//     //     }
//     //   } catch (error) {
//     //     console.log(error);
//     //   }
//     // };
//     fetchDetails();
//     // fetchComments();
//   }, [params.movieID]);

//   return (
//     <div className="text-center text-white">
//         <Container>
//             {details && (
//                 <>
//                 <h2>{details.Title}</h2>
//                 <img src={details.Poster} alt="movie poster" />
//                 {/* <ul style={{ listStyleType: "none" }}>
//                     {comments.map((c) => (
//                     <li className="my-3" key={c._id}>
//                         {c.comment}
//                     </li>
//                     ))}
//                 </ul> */}
//                 </>
//             )}
//       </Container>
//     </div>
//   );
// }

// export default MovieDetails