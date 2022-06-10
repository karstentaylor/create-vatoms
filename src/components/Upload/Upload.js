import React, {useState} from 'react';
import Button from '@mui/material/Button';

function FileUploadPage() {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false)
    return (
        <div>
            <input type="file" name="file" onChange={changeHandler} />
            <div>
                <Button variant="contained" onClick={handleSubmission}>Submit</Button>
            </div>
        </div>
    )
}