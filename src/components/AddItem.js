import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Img = styled.img `
    width: 200px;
    height: 240px;
    display: block;
    margin: auto;
    border: 1px solid gray;
`

const FileSelect = styled.div`    
    width: 350px;
    margin-top: 4% 0;
    margin-left: 9%;
    padding: 4%;   
`
const UploadButton = styled.button`
    width: 20%;
    margin-left: -22%
    margin-right: 12%
`
const ItemBox = styled.div `
overflow: auto;
border: 1px solid grey;
width: 200px;
height: 250px;
padding: 4%;
margin-left: 22%;
border-radius: 10px;
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
`
//Start of AddItem component

const AddItem = props => {
    const [selectedFile, setSelectedFile] = useState([]);
    const fileSelectedHandler = event => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    }
    
    // 

        const fileUploadHandler = () => {
                //form data being sent  
            const frmdata = new FormData();
                frmdata.append( selectedFile, selectedFile.name);
            axios
            .post('silent-auction-be.herokuapp.com/:sellerId/items/', frmdata, {
                onUploadProgress: progressEvent => {
                console.log('Upload Progress: ' + (progressEvent.loaded / progressEvent.total * 100) + '%')}
                })
            .then(res => {
                console.log(res);
               
                });
          
               
                }
                // console.log('hello', selectedFile);
            return (
                <div>
                    <UploadButton 
                    onClick={fileUploadHandler}            
                    >Add Item</UploadButton>

                    <FileSelect>
                    <input className='choose-file'      
                    type='file'          
                    onChange={fileSelectedHandler}
                    /> 
                                    

                    </FileSelect>
                    <ItemBox>
                    <Img src={selectedFile} alt='item'/>
                    </ItemBox>
                </div>
                
            )

    }


export default  AddItem;