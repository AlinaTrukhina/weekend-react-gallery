

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
        <button onClick={handleLike}>Like</button>
        <p> {photo.likes} likes</p>
        <button onClick={handleDelete}>Delete</button>
        </>
    );
}

export default GalleryItem;