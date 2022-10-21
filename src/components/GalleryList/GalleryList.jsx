import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({photosList}) {
    console.log('in GalleryList');
    return (
        <>
        
            {console.log(photosList)}
            {photosList.map(photo => 
            <figure key={photo.id}>
                <GalleryItem 
                photo={photo}
                />
            </figure>
            
            )}
        
        </>
    );
}

export default GalleryList;