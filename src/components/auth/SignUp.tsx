import React from "react";
import logo from "../../../public/logo.svg"
import { Link } from "react-router-dom";
const fields = [
  {
    label: "Email address",
    placeholder: "Enter your email",
    type: "email"
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    type: "password"
  },
  {
    label: "Confirm Password",
    placeholder: "Confirm your password",
    type: "password"
  },
]
interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUp = () => {
  const [ formData, setFormData ] = React.useState<FormData>({
    email: "",
    password: "",
    confirmPassword: ""
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    return
  }
  return (
    <div className='h-screen'>
      <div className='min-h-full flex justify-center items-center'>
        <div className='flex justify-center shadow-2xl rounded-2xl bg-white p-8 '>
          <div className='h-full m-auto flex flex-col items-center'>
            <img src={logo} className=' bg-blue-300 rounded-full bg-cover' width={70} alt='logo'></img>
            <header className='text-2xl font-semibold'>Sign in to your account</header>
            <form onSubmit={onSubmit} className=''>
              {
                fields.map((ele, index): any => (
                  <div key={index} className='group relative w-full py-2'>
                    <label htmlFor='email_address' className='sr-only'>{ele.label}</label>
                    <input className='relative text-center w-full focus:outline-none px-4 py-2 ' onChange={(e) => setFormData({ ...formData, [ele.label]: e.target.value})} type={ele.type} placeholder={ele.placeholder} required autoComplete=''></input>
                    <div className='w-full absolute bottom-0 left-0'>
                      <div className='border-4 border-amber-400 rounded-lg'></div>
                    </div>
                    <div className='w-full absolute bottom-0 left-0'>
                      <div className='border-4 group-focus-within:border-amber-800 scale-x-0 group-focus-within:scale-x-100 origin-center transition-transform duration-300  rounded-lg'></div>
                    </div>
                  </div>
                ))
              }
              <div className='flex justify-between my-4 space-x-4'>
                <span className='space-x-1'>
                  <input className='bg-amber-400' type="checkbox"></input>
                  <label>Remember me</label>
                </span>
                {/* <button className='text-blue-400' type='button' >Forget password?</button> */}
              </div>
              <div className='w-full flex flex-col'>
                <button type='submit' className='bg-blue-500 px-4 py-2 rounded-2xl '>Register here</button>
              </div>
              <div className='w-full flex flex-col'>
                <Link to="/login" className='text-blue-500 px-4 py-2 rounded-2xl '>Login here</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
