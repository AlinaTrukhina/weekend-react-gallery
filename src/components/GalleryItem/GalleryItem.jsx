import axios from 'axios';

function GalleryItem({photo}) {

    function handleLike() {
        console.log(photo.id);
        likePhoto(photo);
    }

    function likePhoto(photo) {
        axios({
            method: 'PUT',
            url: `/gallery/like/${photo.id}`
          })
          .then(response=>{
            console.log('PUT done');
          })
          .catch((error)=>{
            console.log('error in PUT endpoint', error);
          })
    }

    return (
        <>
        <img src={photo.path}/>
        <figcaption>{photo.description}</figcaption>
        <button onClick={handleLike}>Like</button>
        </>
    );
}

export default GalleryItem;