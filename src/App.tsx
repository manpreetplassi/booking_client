import { Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './components/DefaultLayout'
import Admin from './components/dashboard/Admin/Admin'
import NotFound from './components/NotFound'
import Protected from './components/auth/Protected'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Home from './components/dashboard/user/Home'
import DoctorList from './components/dashboard/Admin/DoctorList'
import ReceptionistList from './components/dashboard/Admin/ReceptionistList'
import DepartmentList from './components/dashboard/Admin/DepartmentList'
import AddDoctor from './components/forms/AddDoctor'
import Hero from './components/dashboard/Admin/Hero'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={
          <Protected>
            <div className='bg-white w-full'>
              <DefaultLayout>
                <Admin></Admin>
              </DefaultLayout>
            </div>
          </Protected>
        }></Route> */}
        {/* Admin section */}
          {/* login/signup */}
        <Route path="/" element = {<Hero />}></Route>
          {/* doctor management */}
        <Route path="/dashboard/admin" element = {<Admin />}></Route>
        <Route path="/dashboard/admin/manage_doctors" element = {<DoctorList />}></Route>
        <Route path="/dashboard/admin/manage_doctors/add" element = {<AddDoctor />}></Route>
          {/* receptionist management */}
        <Route path="/dashboard/admin/manage_receptionists" element = {<ReceptionistList />}></Route>
          {/* department management */}
        <Route path="/dashboard/admin/departments" element = {<DepartmentList />}></Route>


        {/* User section */}
        <Route path="/user/appointment_booking" element = {<Home />}></Route>
        <Route path="/user/home" element = {<Home />}></Route>
        <Route path="/login" element = {<Login />}></Route>
        <Route path="/signup" element = {<SignUp />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  )
}

export default App
