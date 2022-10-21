import axios from 'axios';
import React, { useState, useEffect } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

function App() {

  const [photosList, setPhotosList] = useState([]);  

  useEffect( () => {
    getPhotos();
  }, []);

  const getPhotos = () => (
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then(response=>{
      console.log('GET response is', response.data)
      setPhotosList(response.data);
    })
    .catch((error)=>{
      console.log('error in GET endpoint', error);
    })
  );

  function likePhoto(photo) {
    axios({
        method: 'PUT',
        url: `/gallery/like/${photo.id}`
      })
      .then(response=>{
        console.log('PUT done');
        getPhotos();
      })
      .catch((error)=>{
        console.log('error in PUT endpoint', error);
      })
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>

        <img src="images/goat_small.jpg"/>

        <GalleryList 
        photosList={photosList}
        likePhoto={likePhoto}
        />
      </div>
    );
}

export default App;
