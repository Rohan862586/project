import React from 'react';
import * as yup from 'yup';
import {  Form, Field, ErrorMessage } from 'formik';
import { Formik  } from 'formik';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useAddContactMutation } from '../api/api';
import { add } from '../reducer/reducerSlice'

const AddData = () => {

    const [addVal] = useAddContactMutation()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useSelector((state:any) => state.allvalues.add)

    const initialValues ={
        name:'',
        address:'',
        mobile:''
    };

    const validationSchema = yup.object({
        name: yup.string().required('please enter name'),
        address: yup.string().required('please enter address'),
        mobile: yup.string().required('please enter mobile')
    })

    const onSubmit = async(data:any) => {
      await addVal(data)
      dispatch(add(data))
      navigate('/')
    }

  return (
    <div>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        <Form>
        <div className="popup-box">
         <div className="box">
          <div>
            <h1> Add data </h1>
          </div>
            <div>
                <Field className="form-control" type="text" id='name' placeholder="name"  name="name"  />
                <ErrorMessage name='name' component='div' className='errormessage'/>     
            </div><br/>
            <div>
                <Field className="form-control" type="text" id='address' placeholder="address"  name="address"  />
                <ErrorMessage name='address' component='div' className='errormessage'/>     
            </div><br/>
            <div>
                <Field className="form-control" type="text" id='mobile' placeholder="mobile"  name="mobile"  />
                <ErrorMessage name='mobile' component='div' className='errormessage'/>     
            </div> 
            <br/>
            <br/>
            <div >
                <button className="btn btn-primary mr-1" type="submit">Submit</button>
            </div>
          </div>
        </div>            
        </Form>
    </Formik>
  </div>
  )
}

export default AddData