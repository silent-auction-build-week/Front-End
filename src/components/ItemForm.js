import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, Field, withFormik, } from 'formik';
import axios from 'axios';
import styled from 'styled-components';

// start of styled components
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
    margin-left: 19%;
    padding: 4%; 
    color: #9370DB;  
`
const UploadButton = styled.button`
    height: 25px;
    width: 22%;
    justify-content: center;
    margin-left: 23.2%
    margin-top: 2%;
    border: 1px solid #FFCC66;
    border-radius: 3px;
    border: 1px solid #9370DB;
    color: #9370DB;
`
const ItemBox = styled.div `
    overflow: auto;
    border: 1px solid grey;
    width: 200px;
    height: 250px;
    padding: 4%;
    margin-left: 25%;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
    background: #fff;
`

const Label = styled.label `
    margin-top: -10%;
    // margin-left: 25%;
    width: 100%;
       
`
const form = styled(Form) `
    
   width: 100%; 
   height: ;
   text-align: left;

  
`


// const Button = styled.button `
//     width 25%;
//     height: 10%;
//     margin-left: 25%;
//     margin-top: 3%;
//     margin-bottom: 5%;
//     border-radius: 6px;
//     font-size: 1.2rem;
//     border: 1px solid grey;
   
// `
const ButtonWrapper = styled.div `
    margin: 4%;
`

// Start of Form Component

const ItemForm = ({ errors, touched, status }) => {
const [nameForm, setName] = useState([]);

useEffect(() => {
    status && setName(nameForm => [...nameForm, status])
}, [status]);

const [selectedFile, setSelectedFile] = useState([]);
// handles preview of image in div
const fileSelectedHandler = event => {
    setSelectedFile(URL.createObjectURL(event.target.files[0]));
}

// start of image upload

    const fileUploadHandler = () => {
            //form data being sent  
        const frmdata = new FormData();
            frmdata.append('ItemBox', selectedFile, selectedFile.name);
        axios
        .post('silent-auction-be.herokuapp.com/:sellerId/items/', frmdata, {
            onUploadProgress: progressEvent => {
            console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + '%')}
            })
        .then(res => {
            console.log(res);
           
            });
      
           
            }

return (
  
   
    <Form name='form' >
      <Label>
        Item Name:
        <Field className='item-name'
        border={errors.itemName && '1px solid red'} 
        name='item'
        type="text" 
        ></Field> 
        <br/>
        {touched.item && errors.item && (
        <p className='errors' >{errors.item}</p>
        )}    
        </Label>
        {/* start date could go here */}
        <Label>
        <span>End Date:</span>       
        <Field className='end-date'
        name='end' 
        type="date" 
        ></Field> 
        {touched.end && errors.end && (
        <p className='errors' >{errors.end}</p>
        )}        
         </Label>
         <br/>
         {/* start bid input */}
         <Label>       
        <Field className='start-bid'
        name='bid' 
        type="number" 
        placeholder=' $ Starting Bid'
        ></Field> 
        <br/>
        
        {touched.bid && errors.bid && (
        <p className='errors' >{errors.bid}</p>
        )}
        </Label>
       
        <br/>
               
        <span className='desc-title' >Description:</span>       
        <Field as='textarea'
        className='descrip'
        name='description' 
        type="text"
       
        ></Field>                 
        <br/>
        {touched.description && errors.description && (
        <p className='errors' >{errors.description}</p>
        )}
        
{/*  paste add item so uploading all  */}
                <ButtonWrapper>
                    <UploadButton 
                    onClick={fileUploadHandler}            
                    >Add Item</UploadButton>

                    <FileSelect>

                    <input className='choose-file'      
                    type='file'          
                    onChange={fileSelectedHandler}
                    />                                    
                    </FileSelect>
                </ButtonWrapper>
                    <ItemBox>
                    <Img src={selectedFile} alt='item'/>
                    </ItemBox>
    </Form>

  
    );
};
// start of validation HOC

const FormikItemForm = withFormik({
    mapPropsToValues({ item, end, bid, description }) {
        return {
            
            item: item || '',          
            end: end || '',
            bid: bid || '',
            description: description || ''

        };
    },
    validationSchema: Yup.object().shape({

        item: Yup.string().required('item name needed').min(3, 'Too short'),       
        end: Yup.string().required('end date needed'),
        bid: Yup.string().required('must put starting bid'),
        description: Yup.string().required('Item Description needed')        
    }),
    handleSubmit(values, { setStatus }) {
        axios
            .post('https://reqres.in/api/users/', values)
            .then(res => {
                setStatus(res.data);
                console.log(res); 
            })
            .catch(err => console.log(err.response));
    }
})(ItemForm);
export default FormikItemForm;
