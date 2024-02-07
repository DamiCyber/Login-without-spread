import React from 'react'
import { useFormik } from 'formik'
const Navbar = () => {
  const formik = useFormik({
       initialValues:{
        firstname:"",
        lastname:"",
        email:"",
        password:"",
       },
       onSubmit : (values)=>{
         console.log(values);
       }
    })
  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <input type="text" onChange={formik.handleChange } placeholder='firstname' value={formik.values.firstname} name='firstname'  />
        <input type="text" onChange={formik.handleChange } placeholder='lastname' value={formik.values.lastname} name='lastname' />
        <input type="email" onChange={formik.handleChange } placeholder='email'value={formik.values.email} name='email' />
        <input type="password" onChange={formik.handleChange }  placeholder='password' value={formik.values.password} name='password' />
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Navbar