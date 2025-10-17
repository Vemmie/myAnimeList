import { Link } from "react-router-dom"; 
import "../css/NavBar.css"


{/* NavBar for IH, has the links to the different services across all pages */}
const NavBar = () => {
  return (
    <>
      <nav class="navBar">
        <Link to = "/">Home</Link>
        <Link to = "/list">My List</Link>
        <Link to = "/add">Add Anime</Link>
      </nav>
    </>
  )
}

export default NavBar