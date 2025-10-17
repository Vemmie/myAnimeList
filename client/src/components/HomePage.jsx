import { Link } from "react-router-dom"; 
import "../css/HomePage.css"

{/* Simple home page with 2 buttons that lead to the other services */}
const HomePage = () => {
  return (
    <>
      <div className="background">
        <h2>Welcome to my Anime List App!</h2>
        <div className="main">
          <div className="mainInner">
            <Link className="primary-button" to = "/list">My List</Link>
            <Link className="primary-button" to = "/add">Add Anime</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage