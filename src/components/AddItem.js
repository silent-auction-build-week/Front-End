import React, { useState } from 'react';
import axios from 'axios';

const AddItem = (props) => {
    const [selectedFile, setSelectedFile] = useState([]);
    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0]);

    }

    const fileUploadHandler = () => {
      //form data being sent  
        // const frmdata = new FormData();
        // frmdata.append('item-image', selectedFile, selectedFile.name);
        // axios
        // .post('https://reqres.in/api/users/', frmdata, {
        //     onUploadProgress: progressEvent => {
        //         console.log('Upload Progress: ' + (progressEvent.loaded / progressEvent.total * 100) + '%')}
        // })
        // .then(res => {
        //     console.log(res);
        // });
        const showData = (props) => {
            console.log(props);
        }
    }
    return (
        <div>
            <input       
            type='file' 
            onChange={fileSelectedHandler}
             />       
            <button onClick={fileUploadHandler}>Upload</button>
        </div>
    )

}


export default  AddItem;