import { useState } from "react";
import axios from "axios";

const initialData = {
    title: "",
    abstract: "",
    director: "",
    genre: "",
    release_year: "",
    image: ""   
};

const CreateMoviePage = () => {
    const [formData, setFormData] = useState(initialData);

    // Gestione del cambiamento dei campi del form
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData(prev => ({
        ...prev,
        [name]: files && files.length > 0 ? files[0] : ""
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    };

    const handleSubmit = (e) => { 
        axios.post("http://localhost:3001/api/movies", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })  
        .then(response => {
            console.log("Film creato con successo:", response.data);
            // Resetta il form dopo la creazione
            setFormData(initialData);
        })
        .catch(error => {
            console.error("Errore nella creazione del film:", error);
        });
        e.preventDefault(); // Previene il comportamento di submit predefinito del form
    };

    return (
      <div className="container">
        <h1 className="text-center">Creazione Film</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Titolo</label>
            <input 
              type="text" 
              className="form-control" 
              name="title"
              placeholder="Titolo"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="abstract" className="form-label">Descrizione</label>
            <textarea
              className="form-control"
              name="abstract"
              placeholder="Descrizione"   
              value={formData.abstract}
              onChange={handleChange}
            >        
            </textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="director" className="form-label">Diretto da</label>
            <input
              type="text"
              className="form-control"
              name="director"
              placeholder="Diretto da"
              value={formData.director}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="genre" className="form-label">Genere</label>
            <input
              type="text"
              className="form-control"
              name="genre"
              placeholder="Genere"
              value={formData.genre}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="release_year" className="form-label">Anno</label>
            <input
              type="text"
              className="form-control"
              name="release_year"
              placeholder="Anno"
              value={formData.release_year}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">immagine</label>
            <input
              type="file"
              className="form-control"
              name="image" //deve concidere con router del backend
              placeholder="Immagine"
              id="image"
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Crea Film</button>
        </form>
      </div>
    );
}

export default CreateMoviePage;