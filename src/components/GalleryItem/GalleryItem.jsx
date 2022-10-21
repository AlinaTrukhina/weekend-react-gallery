function GalleryItem({photo}) {
    return (
        <>
        <img src={photo.path}/>
        <figcaption>{photo.description}</figcaption>
        </>
    );
}

export default GalleryItem;