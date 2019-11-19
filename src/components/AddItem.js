import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FileSelect = styled.div`
    text-align: center;
    width: 350px;
    margin-top: -1%;
    
`

const AddItem = (props) => {
    const [selectedFile, setSelectedFile] = useState([]);
    const fileSelectedHandler = event => {
        setSelectedFile(event.target.files[0]);
    }
    const handleChange = (event) => {
        setSelectedFile({file: URL.createObjectURL(event.target.files[0])})
    }
    // this.handleChange = this.handleChange.bind(this)

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
        <FileSelect>
            <input       
            type='file' 
            onChange={fileSelectedHandler}
             />       
            <button 
            onClick={fileUploadHandler}
            // onChange={ this.handleChange }
            >Upload</button>
        </FileSelect>
    )

}


export default  AddItem;