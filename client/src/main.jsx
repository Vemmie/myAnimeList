import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'

import AddPage from './components/AddPage.jsx';
import HomePage from './components/HomePage.jsx';
import ViewPage from './components/ViewPage.jsx';
import AnimeDetails from './components/AnimeDetails.jsx';

// Define Routes
const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    children: [
      { path: "/", element: <HomePage />},
      { path: "list", element: <ViewPage />},
      { path: "add", element: <AddPage />},
      { path: "anime/:title", element: <AnimeDetails />}
    ]
  }
])

// Render the App with StrictMode and RouterProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
