import React, { useState } from 'react';
import axios from 'axios';

const AddItem = () => {
    const [selectedFile, setSelectedFile] = useState();
    fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0]);

    }

    fileUploadHandler = () => {
      //form data being sent  
        const frmdata = new FormData();
        fd.append('item-image', selectedFile, selectedFile.name);
        axios
        .post('https://reqres.in/api/users/', frmdata, {
            onUploadProgress: ProgressEvent => {
                console.log('Upload Progress: ' + (progressEvent.loaded / progressEvent.total * 100) + '%')}
        })
        .then(res => {
            console.log(res);
        });
    }
    return (
        <div>
            <input 
            style={{display: 'none'}}
            type='file' 
            onChange={fileSelectedHandler}
            ref={fileInput => this.fileInput = fileInput} />
            <buttonon onClick={() => this.fileInput.click()} >Pick File</buttonon>
            <button onClick={fileUploadHandler}>Upload</button>
        </div>
    )

}


export default  AddItem;