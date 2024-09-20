import React, { useRef } from 'react'
import { useForm } from "react-hook-form"
import { loginUser } from '../config/firebase/firebasemethods'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const loginUserFromFirebase = async (data) => {
    console.log(data)
    try {
      const userLogin = await loginUser({
        email: data.email,
        password: data.password
      })
      console.log(userLogin)
      navigate('')

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(loginUserFromFirebase)}>
        <input type="email" placeholder='enter your email' {...register("email", { required: true })} /><br />
        {errors.email && <span className='text-danger'>This field is required</span>}
         <br />
        <input type="password" placeholder='enter your password' {...register("password", { required: true })} /><br />
        {errors.password && <span className='text-danger'>This field is required</span>}
         <br />
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login