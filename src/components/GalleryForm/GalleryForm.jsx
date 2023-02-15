import { useState } from "react";
import { Button } from "@mui/material";

function GalleryForm({addPhoto}) {
    let [imgInput, setImgInput] = useState('');
    let [descInput, setDescInput] = useState('');

    function handlePhotoFormSubmit() {
        const newPhoto = {
            path: imgInput,
            description: descInput
        }
        addPhoto(newPhoto);
    }

    return (
        <>
        <form className="submitPhotoForm"
        onSubmit={handlePhotoFormSubmit} >
            <input id="urlInput" onChange={(evt) => setImgInput(evt.target.value)}
            type="text" 
            placeholder="image url" 
            required />
            <input id="descriptionInput"
            onChange={(evt) => setDescInput(evt.target.value)}
            type="text" 
            placeholder="description" 
            required />
            <Button variant="contained" size="small" color="submit" type="submit">Submit Photo</Button>
        </form> 
        </>
    );
}

export default GalleryForm;