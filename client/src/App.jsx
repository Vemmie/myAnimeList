import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./css/App.css"

function App() {
  // useLocation hook gets the current route path
  const location = useLocation();

  // add route paths to readable titles
  const pageTitle = {
    "/": "Home Page",
    "/add": "Add Anime",
    "/list": "MyList",
  }

  // This will handle dynamic titles for different animes
  const title = pageTitle[location.pathname] || (location.pathname.startsWith("/anime/") ? "Anime Details" : "Page Not Found");

  // Main App component that renders the NavBar and the Outlet will render the different pages
  return (
    <div>
      <div className="title-wrapper">
        <h1 className="title">{title}</h1>
      </div> 
      <div className="nav">
        <NavBar />
      </div>
      <Outlet />
    </div>
  );
}

export default App;