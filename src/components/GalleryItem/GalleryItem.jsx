

function GalleryItem({photo, likePhoto}) {

    function handleLike(evt) {
        evt.preventDefault();
        console.log(photo.id);
        likePhoto(photo);
    }

    return (
        <>
        <img src={photo.path}/>
        <figcaption>{photo.description}</figcaption>
        <button onClick={handleLike}>Like</button>
        <p> {photo.likes} likes</p>
        </>
    );
}

export default GalleryItem;