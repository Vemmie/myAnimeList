import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"
import "../css/ViewPage.css"

const ViewPage = () => {
  const [animes, setAnimes] = useState([])

  useEffect(() => {
    fetch('/api/animes')
      .then((response) => response.json())
      .then((data) => setAnimes(data))
      .catch((error) => console.error('Error fetching animes:', error));
  }, []);


  return (
    <>
    <div className="background">
        <h2 style={{ width: "100%" }}>Welcome to your List of Anime!</h2>
        <div style={{ paddingLeft: "5.5%" }}>
          <div className="animeGrid">
            {animes.map((anime) => (
            <div key={anime.title} className="animeCard">
              <h3 className="h3View">{anime.title}</h3>
              <img src = {anime.image || "https://inclusiveamerica.org/wp-content/uploads/2013/03/image-alignment-150x150-1.jpg"} alt={anime.title} width= '160' height='200'/>
              <div> 
                <Link to={`/anime/${encodeURIComponent(anime.title)}`} style={{ textDecoration: "none", color: "#e9e9e9", fontFamily: "Arial", marginRight: "10px" }}>View More</Link>
                <button
                  onClick={() => {
                    const confirmDelete = window.confirm(`Are you sure you want to delete "${anime.title}"? This action cannot be undone.`);
                    if (confirmDelete) {
                      fetch(`/api/anime/${encodeURIComponent(anime.title)}`, { method: 'DELETE' })
                        .then(() => setAnimes(prev => prev.filter(a => a.title !== anime.title)));
                    }
                  }}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
          </div>
        ))}
        </div>
        </div>
    </div>
    </>
  )
}

export default ViewPage