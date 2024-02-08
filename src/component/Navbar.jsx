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

      <form class="form card" onSubmit={handleSubmit}>
        <div class="card_header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M4 15h2v5h12V4H6v5H4V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z"></path>
          </svg>
          <h1 class="form_heading">Sign in</h1>
        </div>
        <div class="field">
          <label for="firstname">firstname</label>
          <input class="input" onChange={handleChange} name="firstname" type="text" value={values.firstname} placeholder="firstname" id="username" />
          <span>{errors.firstname}</span>
        </div>
        <div class="field">
          <label for="lastname">lastname</label>
          <input class="input" onChange={handleChange} name="lastname" type="text" value={values.lastname} placeholder="lastname" id="username" />
          <span>{errors.lastname}</span>
        </div>
        <div class="field">
          <label for="email">email</label>
          <input class="input" onChange={handleChange} name="email" type="text" value={values.email} placeholder="email" id="username" />
          <span>{errors.email}</span>
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input class="input" onChange={handleChange} name="password" value={values.password} type="password" placeholder="Password" id="password" />
          <span>{errors.password}</span>
        </div>
        <div class="field">
          <button type='submit' class="button">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Navbar