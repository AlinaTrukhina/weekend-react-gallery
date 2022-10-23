import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({photosList, likePhoto, deletePhoto}) {
    //console.log('in GalleryList');
    return (
        <>
        <ul className='photo-list'>
            {photosList.map(photo => 
            <li className="photo-card"
            key={photo.id}
            >
                <GalleryItem 
                photo={photo}
                likePhoto={likePhoto}
                deletePhoto={deletePhoto}
                />
            </li>
            )}
        </ul>
        </>
    );
}

export default GalleryList;