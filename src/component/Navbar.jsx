import React from 'react'
import { useFormik } from 'formik'
import * as yup from "yup"
const Navbar = () => {
  const validationSchema = yup.object({
    firstname: yup.string().required("Required").max(10).min(3),
    lastname: yup.string().required("Required").max(10).min(3),
    email: yup.string().email("valid email address"),
    password: yup.string().matches(/^[a-zA-z0-9]{8}$/, "password must be atleast 8 characters, uppercase,lowercase and a special character "),
  })
  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} placeholder='firstname' value={values.firstname} name='firstname' />
        <span>{errors.firstname}</span>
        <input type="text" onChange={handleChange} placeholder='lastname' value={values.lastname} name='lastname' />
        <span>{errors.lastname}</span>
        <input type="email" onChange={handleChange} placeholder='email' value={values.email} name='email' />
        <span>{errors.email}</span>
        <input type="password" onChange={handleChange} placeholder='password' value={values.password} name='password' />
        <span>{errors.password}</span>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Navbar