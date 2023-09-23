import React, { useState, useEffect } from 'react'
import './RowPost.css'
import { imageUrl, API_KEY } from '../../constants/constants';
import axios from '../../axios';
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState();

  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results)
    }).catch(err => alert('Network Error rowPost'))
  }, [])

  const opts = {
    height: '490',
    width: '98%',
    playerVars: {
      autoplay: 1,
    }
  }

  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      } else {
        console.log('array is empty')
      }
    })
  }

  return (
    <div className='row' id='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((data) =>
          <img onClick={() => handleMovie(data.id)} className={props.isSmall ? 'smallPoster' : 'poster'} key={data.id} src={`${imageUrl + data.backdrop_path}`} alt="poster" />
        )}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}

    </div >
  )
}

export default RowPost