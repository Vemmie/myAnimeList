import '../css/Add.css'
import { useState } from 'react';


const AddPage = () => {
  // States to hold the form data
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    studio: "",
    image: "",
    releaseDate: "",
    episodes: "",
    synopsis: "",
  });

  // This updates the state based on what the user inputs in the forms
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value })
}

// This handles the form submission by sending the data back to the back end
const handleSubmit = (e) => {
  e.preventDefault();
  fetch('/api/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    alert("Anime Added Successfully!");
    // Resets the data once submitted so its easier to add multiple animes
    setFormData({
      title: "",
      author: "",
      studio: "",
      image: "",
      releaseDate: "",
      episodes: "",
      synopsis: "",
      });
    })
  }

  return (
        <>
      <div className="backgroundAdd">
        <h2>Welcome to your List of Anime!</h2>
        <div className='formCenter'>
          <form onSubmit={handleSubmit}>
            <label>
              Title: <span className="required">*</span>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Author: <span className="required">*</span>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Studio:
              <input
                type="text"
                name="studio"
                value={formData.studio}
                onChange={handleChange}
              />
            </label>
            <label>
              Image:
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
              />
            </label>
            <label>
              Release Date:
              <input
                type="date"
                name="releaseDate"
                value={formData.releaseDate}
                onChange={handleChange}
              />
            </label>
            <label>
              Episodes:
              <input
                type="number"
                name="episodes"
                value={formData.episodes}
                onChange={handleChange}
              />
            </label>
            <label>
              Synopsis:
              <textarea
                name="synopsis"
                value={formData.synopsis}
                onChange={handleChange}
                rows="5"
              />
            </label>
            <button type="submit" className='button'>Add Anime </button>
          </form>
        </div>
        <h3>Note the <span className="required">*</span> means required</h3>
      </div>
    </>
  )
}

export default AddPage    