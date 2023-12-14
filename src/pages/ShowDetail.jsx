import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShowDetail = () => {
  const [show, setShow] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then(response => response.json())
      .then(data => setShow(data))
      .catch(error => console.error('Error fetching show details:', error))
  }, [id])

  if (!show) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>{show.name}</h2>
      <img src={show.image?.medium || 'placeholder-image-url'} alt={show.name} />

      <h3>Reparto:</h3>
      <ul>
        {show._embedded.cast.map(actor => (
          <li key={actor.person.id}>
            <img src={actor.person.image?.medium || 'placeholder-image-url'} alt={actor.person.name} />
            <p>{actor.person.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ShowDetail
