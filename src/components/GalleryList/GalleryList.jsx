import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({photosList, likePhoto, deletePhoto}) {
    //console.log('in GalleryList');
    return (
        <>
        
            {/* {console.log(photosList)} */}
            {photosList.map(photo => 
            <figure key={photo.id}>
                <GalleryItem 
                photo={photo}
                likePhoto={likePhoto}
                deletePhoto={deletePhoto}
                />
            </figure>
            
            )}
        
        </>
    );
}

export default GalleryList;