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
        name='item'
        type="text" 
        ></Field> 
        <br/>
        {touched.item && errors.item && (
        <p className='errors' >{errors.item}</p>
        )}    
        </Label>
        <Label>
       <span>Start Date:</span>       
        <Field className='start-date' 
        name='start'
        type="text" 
        ></Field >        
        <br/>
        {touched.start && errors.start && (
        <p className='errors' >{errors.start}</p>
        )}
        </Label>
        <Label>
        <span>End Date:</span>       
        <Field className='end-date'
        name='end' 
        type="text" 
        ></Field> 
        {touched.end && errors.end && (
        <p className='errors' >{errors.end}</p>
        )}        
         </Label>
         <br/>
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
        
        <Label>
        <Button type='submit' >Add Item</Button>
        </Label> 
        {nameForm.map(item => (
        <ul key={item.id}>
          <li>Species: {item.species}</li>
          <li>Size: {item.size}</li>
        </ul>
      ))}



    </Form>

  
    );
};


const FormikItemForm = withFormik({
    mapPropsToValues({ item, start, end, bid, description }) {
        return {
            
            item: item || '',
            start: start || '',
            end: end || '',
            bid: bid || '',
            description: description || ''

        };
    },
    validationSchema: Yup.object().shape({

        item: Yup.string().required('item name needed').min(3, 'Too short'),
        start: Yup.string().required('start date needed'),
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
