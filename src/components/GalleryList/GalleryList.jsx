import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({photosList, likePhoto}) {
    console.log('in GalleryList');
    return (
        <>
        
            {console.log(photosList)}
            {photosList.map(photo => 
            <figure key={photo.id}>
                <GalleryItem 
                photo={photo}
                likePhoto={likePhoto}
                />
            </figure>
            
            )}
        
        </>
    );
}

export default GalleryList;