import React, { useEffect, useState } from 'react'
import axios from '../../axios';
import { imageUrl } from '../../constants/constants';
import { banner } from '../../urls'
import './banner.css'

function Banner() {
    const [movie, setMovie] = useState()
    const randomDigit = Math.floor(Math.random() * 20);
    useEffect(() => {
        axios.get(banner).then((response) => {
            setMovie(response.data.results[randomDigit])
            console.log(response.data.results[randomDigit])
        })
    }, [])


    return (
        <div className='banner' style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}>
            <div className='content'>
                <h1 className='title'>{movie ? (movie.title ? movie.title : movie.name) : ''}</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>
                </div>
                <h3 className='description'>{movie ? movie.overview : ""}</h3>
            </div>
            <div className="fade"></div>
        </div>
    )
}

export default Banner