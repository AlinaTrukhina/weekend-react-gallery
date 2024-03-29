import React from 'react';
import ShowImgOrDesc from '../ShowImgOrDesc/ShowImgOrDesc';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import swal from 'sweetalert';

function GalleryItem({photo, likePhoto, deletePhoto}) {

    // function handleLike(evt) {
    //     evt.preventDefault();
    //     likePhoto(photo);
    // }

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

    }
    
    return (
        <>
        <ShowImgOrDesc photo={photo}/>

        <section 
        className='likesContainer'>
        {photo.likes === 0 ? <h3>No likes!</h3> : <h3>Likes: <span className="likeCount">{photo.likes}</span></h3>}
        
        <IconButton onClick={() => likePhoto(photo)} className="likeBtn" aria-label='like'>
            <FavoriteIcon color='like' />
        </IconButton>
        
        <IconButton onClick={handleDelete} className="deleteBtn" aria-label='delete'>
            <DeleteIcon />
        </IconButton>

        </section>
        </>
    )

}

export default GalleryItem;