function GalleryList({photosList}) {
    console.log('in GalleryList');
    return (
        <>
        <ul>
            {console.log(photosList)}
            {photosList.map(photo => 
            <li>
                    <p>{photo.description}</p>
                    <img src={photo.path}/>
            </li>
            )}
        </ul>
        </>
    );
}

export default GalleryList;