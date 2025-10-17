import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../css/AnimeDetails.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

function AnimeDetails() {
  // parameter from the URL with useParams hook
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  const [details, setDetails] = useState(null);
  
  // Fetches the details of a specific anime when this component mounts based on the URL param
  useEffect(() => {
    if (!decodedTitle) return;
    fetch(`/api/anime/${encodeURIComponent(decodedTitle)}`)
      .then((response) => response.json())
      .then((data) => setDetails(data))
      .catch((error) => console.error('Error fetching animes:', error));
  }, [decodedTitle]);

  return (
    <div className="background">
      <h2>More Details on: { decodedTitle }</h2>
      {/* Conditional render of the page will show loading if the data has not been grabed */}
      { details ? ( 
          <div className="details">
            <p>Title: {details.title}</p>
            <p>Author: {details.author}</p>
            <p>Studio: {details.studio}</p>
            <img src={details.image} alt={details.title} width='160' height='200'/>
            <p>Release Date: {details.releaseDate}</p>
            <p>Episodes: {details.episodes}</p>
            <p>Synopsis: {details.synopsis}</p>
            {/* Button calls upon a nameless function for on click which returns the promise of deleting an anime based on it's title */}
            <button
              onClick={() => {
                const confirmDelete = window.confirm(`Are you sure you want to delete "${details.title}"? This action cannot be undone.`);
                if (confirmDelete) {
                  fetch(`/api/anime/${encodeURIComponent(details.title)}`, { method: 'DELETE' })
                    .then(() => setAnimes(prev => prev.filter(a => a.title !== details.title)));
                }
              }}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        )
     : ( <p>Loading Info . . .</p> )}
    </div>
  )
}

export default AnimeDetails