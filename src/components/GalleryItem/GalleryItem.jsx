

import * as React from 'react';
import Button from '@mui/material/Button';

function GalleryItem({photo, likePhoto, deletePhoto}) {

    function handleLike(evt) {
        evt.preventDefault();
        likePhoto(photo);
    }

    function handleDelete(evt) {
        evt.preventDefault();
        console.log(photo.id);
        deletePhoto(photo);
    }

    return (
        <>
        <img src={photo.path}/>
        <figcaption>{photo.description}</figcaption>
        <Button 
            onClick={handleLike}
            variant="contained"
            size="small"
            >
            Like
        </Button>
        <p> {photo.likes} likes</p>
        <Button 
            onClick={handleDelete}
            variant="contained"
            size="small"
            >
            Delete
        </Button>
        </>
    );
}

export default GalleryItem;