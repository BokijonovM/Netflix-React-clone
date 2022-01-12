import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

function MovieDetails() {
    const params = useParams()

    useEffect(() => {
        const movieID = params.movieID
        console.log(movieID)
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default MovieDetails
