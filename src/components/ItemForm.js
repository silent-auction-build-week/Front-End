import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Field, withFormik, } from 'formik';
import axios from 'axios';
import styled from 'styled-components';

// start of styled components

const Label = styled.label `
    margin-top: -10%;
    // margin-left: 25%;
    width: 100%;
       
`
const Form = styled.form `

   width: 100%; 
   height: ;
   text-align: left;

  
`
// const Input = styled(Field) `
// // margin-bottom: 4%;
// // width: 100%;
// // height: 35px;
// // border: 1px solid #ccc;
// // background-color: #fff;

// `



const Button = styled.button `
    width 25%;
    height: 10%;
    margin-left: 37%;
    margin-top: 3%;
    margin-bottom: 5%;
    border-radius: 6px;
    font-size: 1.2rem;
    border: 1px solid grey;
   
`

// Start of Form Component

const ItemForm = ({ errors, touched, status }) => {
const [nameForm, setName] = useState([]);
// form Input event handler
useEffect(() => {
    status && setName(nameForm => [...nameForm, status])
}, [status]);
// Button event handler


return (
  
   
    <Form name='form' >
      <Label>
        Item Name:
        <Field className='item-name'
        border={errors.itemName && '1px solid red'} 
        name='itemname'
        type="text" 
        ></Field> 
        <br/>
        {touched.itemName && errors.itemName && (
        <p className='errors' >{errors.itemName}</p>
        )}    
        </Label>
        <Label>
       <span>Start Date:</span>       
        <Field className='start-date' 
        name='startdate'
        type="text" 
        ></Field >        
        <br/>
        {touched.startDate && errors.startDate && (
        <p className='errors' >{errors.startDate}</p>
        )}
        </Label>
        <Label>
        <span>End Date:</span>       
        <Field className='end-date'
        name='enddate' 
        type="text" 
        ></Field> 
        {touched.endDate && errors.endDate && (
        <p className='errors' >{errors.endDate}</p>
        )}        
         </Label>
         <br/>
         <Label>       
        <Field className='start-bid'
        name='startbid' 
        type="text" 
        placeholder='  Starting Bid'
        ></Field> 
        <br/>
        
        {touched.startBid && errors.startBid && (
        <p className='errors' >{errors.startBid}</p>
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
        
        <Label>
        <Button type='submit' >Add Item</Button>
        </Label>      
    </Form>

  
    );
};


const FormikItemForm = withFormik({
    mapPropsToValues({ itemname, startdate, enddate, startbid, description }) {
        return {
            
            itemname: itemname || '',
            startdate: startdate || '',
            enddate: enddate || '',
            startbid: startbid || '',
            description: description || ''

        };
    },
    validationSchema: Yup.object().shape({

        itemname: Yup.string().required(),
        startdate: Yup.string().required(),
        enddate: Yup.string().required(),
        startbid: Yup.string().required(),
        description: Yup.string().required()        
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
