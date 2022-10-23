import Button from '@mui/material/Button';
import ShowImgOrDesc from '../App/ShowImgOrDesc/ShowImgOrDesc';
import swal from 'sweetalert';

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
        
        <ShowImgOrDesc 
        photo={photo}/>
        {/* <img 
        src={photo.path}/> */}
        
        <section className='likesContainer'>
        <p> {photo.likes} likes</p>
        <Button 
            onClick={handleLike}
            variant="contained"
            size="small"
            >
            Like
        </Button>
        
        <Button 
            onClick={handleDelete}
            variant="contained"
            size="small"
            >
            Delete
        </Button>
        </section>
        </>
    )

}

export default GalleryItem;