import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({photosList, likePhoto, deletePhoto}) {
    //console.log('in GalleryList');
    return (
        <>
        
            {photosList.map(photo => 
            <figure newClass='main-item'
            key={photo.id}>
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