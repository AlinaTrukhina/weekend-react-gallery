import axios from 'axios';

function GalleryItem({photo, likePhoto}) {

    function handleLike() {
        console.log(photo.id);
        likePhoto(photo);
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