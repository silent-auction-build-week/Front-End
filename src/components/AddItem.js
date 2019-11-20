import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FileSelect = styled.div`
    
    width: 350px;
    margin-top: 1%;
    margin-left: 12%;   
`
const UploadButton = styled.button`
    width: 30%;
    margin-left: -22%
    margin-right: 12%
`
const ChooseFile = styled.button `
    
`
//Start of AddItem component

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
        const frmdata = new FormData();
        frmdata.append('item-image', selectedFile, selectedFile.name);
        axios
        .post('silent-auction-be.herokuapp.com/:sellerId/items/', frmdata, {
            onUploadProgress: progressEvent => {
                console.log('Upload Progress: ' + (progressEvent.loaded / progressEvent.total * 100) + '%')}
        })
        .then(res => {
            console.log(res);
        });
        const showData = (props) => {
            console.log(props);
        }
    }
    

    return (
        <FileSelect>
            <input className='choose-file'      
            type='file' 
            onChange={fileSelectedHandler}></input>
                   
            <UploadButton 
            onClick={fileUploadHandler}
            // onChange={ this.handleChange }
            >Upload</UploadButton>
        </FileSelect>
    )

}


export default  AddItem;