import React from 'react';
import ShowImgOrDesc from '../ShowImgOrDesc/ShowImgOrDesc';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';

function GalleryItem({photo, likePhoto, deletePhoto}) {

    function handleLike(evt) {
        evt.preventDefault();
        likePhoto(photo);
    }

    function handleDelete(evt) {
        evt.preventDefault();

        //uses SweetAlert to bring up confirmation window
        swal({
            title: "Delete?",
            text: "Please ensure and then confirm!",
            type: "warning",
            buttons: {
                cancel: {
                  text: "Cancel!",
                  value: null,
                  visible: true,
                  className: "",
                  closeModal: true,
                },
                delete: {
                    text: "Delete it!",
                    value: true,
                    visible: true,
                    className: "",
                    closeModal: true
                }
            }
        }).then((willDelete) => {
            if (willDelete) {
                deletePhoto(photo);
            }    
        })

        console.log(photo.id);
    }
    
    return (
        <>
        <ShowImgOrDesc photo={photo}/>
        <section className='likesContainer'>
        <h3>Likes: {photo.likes}</h3>
        <IconButton onClick={handleLike} aria-label='like'>
            <FavoriteIcon color='like' />
        </IconButton>
        
        <IconButton onClick={handleDelete} aria-label='delete'>
            <DeleteIcon />
        </IconButton>

        </section>
        </>
    )

}

export default GalleryItem;