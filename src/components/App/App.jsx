import axios from 'axios';
import React, { useState, useEffect } from 'react';
import GalleryForm from '../GalleryForm/GalleryForm';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';
// import CssBaseline from '@mui/material/CssBaseline';
import Header from '../Header/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {

  const [photosList, setPhotosList] = useState([]);  

  const theme = createTheme({
    palette: {
      primary: {
          // light green
          main: '#1de8b5',
      },
      secondary: {
          // light blue
          main: '#81d4fa',
      },
      error: {
          main: '#f44336',
      },
      like: {
        main: '#f06292'
      }, 
      submit: {
        main: '#00acc1'
      }
    },
  });

  useEffect( () => {
    getPhotos();
  }, []);

  // function add photo to the database
  const addPhoto = (photo) => (
    axios({
      method: 'POST',
      url: '/gallery',
      data: photo
    })
    .then(response => {
      console.log('POST photo');
      //getPhotos();
    })
    .catch((error) => {
      console.log('error in POST', error);
    })
  );

  // GET endpoint
  const getPhotos = () => (
    axios({
      method: 'GET',
      url: '/gallery'
    })
    .then(response => {
      // console.log('GET response is', response.data)
      setPhotosList(response.data);
    })
    .catch((error) => {
      console.log('error in GET endpoint', error);
    })
  );

  // PUT endpoint
  function likePhoto(photo) {
    axios({
        method: 'PUT',
        url: `/gallery/like/${photo.id}`
      })
      .then(response => {
        getPhotos();
      })
      .catch((error) => {
        console.log('error in PUT endpoint', error);
      })
  }

  // DELETE endpoint
  function deletePhoto(photo) {
    axios({
      method: 'DELETE',
      url: `/gallery/delete/${photo.id}`
    })
    .then(response=> {
      getPhotos();
    })
    .catch((error) => {
      console.log('error in DELETE endpoint', error);
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <GalleryForm
        addPhoto={addPhoto} />
        <main className='main-container' >
        <GalleryList 
        photosList={photosList}
        likePhoto={likePhoto}
        deletePhoto={deletePhoto}
        />
        </main>
      </div>
    </ThemeProvider>
    );
}

export default App;
