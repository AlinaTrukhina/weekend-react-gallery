import React from 'react';
import { useState } from 'react';

function ShowImgOrDesc({photo}) {

    const [isActive, setActive] = useState(true);

    const showEither = () => {
        setActive(!isActive);
    }
    
    if (isActive) {
        return <img 
        src={photo.path} 
        onClick={showEither}
        alt={photo.description}
        />
    }
    else {
        return (
        <section onClick={showEither} className="photoDescription">
        <h2>{photo.description} </h2>
        </section>)
    }
}

export default ShowImgOrDesc;