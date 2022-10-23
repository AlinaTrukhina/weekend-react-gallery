import { useState } from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function GalleryForm({addPhoto}) {
    let [imgInput, setImgInput] = useState('');
    let [descInput, setDescInput] = useState('');
    //console.log('inputs', imgInput, descInput);

    function handlePhotoFormSubmit() {
        const newPhoto = {
            path: imgInput,
            description: descInput
        }
        addPhoto(newPhoto);
    }

    return (
        <>
        <form 
        onSubmit={handlePhotoFormSubmit} >
            <input onChange={(evt) => setImgInput(evt.target.value)}
            type="text" 
            placeholder="image url" 
            required />
            <input onChange={(evt) => setDescInput(evt.target.value)}
            type="text" 
            placeholder="description" 
            required />
            <Button
            variant="contained"
            size="small"
            >Submit Photo</Button>
        </form> 
        </>
    );
}

export default GalleryForm;