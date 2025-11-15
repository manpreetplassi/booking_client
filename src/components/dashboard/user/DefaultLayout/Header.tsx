import logo from '../../../../assets/logo.svg'
import bell_icon from '../../../../../public/bell-icon.svg'
import avatar_icon from '../../../../../public/avatar_icon.svg'
import { Link, useLocation } from 'react-router-dom'

const nav = [
  { name: "Home", path: "/user/home" },
  { name: "Top Doctor's", path: "/user/doctors_list" },
  { name: "Appointments", path: "/user/appointments" },
  { name: "Messages", path: "/user/messages" },
  { name: "Profile Settings", path: "/user/profile_settings" },
  { name: "Help & Settings", path: "/user/help_settings" },
  { name: "About Us", path: "/user/about_us" },
]

const Header = () => {
  const location = useLocation();
  return (
    <div className="bg-white border h-[10vh] w-full left-0 absolute">
      <div className="border-b border-gray-300 flex h-full w-full">
        {/* right icons */}
        <div className='w-[12vw] ml-8 flex justify-start items-center '>
          <img className="w-full" src={logo} alt="Logo" />
        </div>
        {/* center icons */}
        <div className=' px-40 flex-1 flex justify-between items-center w-full'>
          {nav.map((item) => (
            <div key={item.name} className=''>
              <Link  to={item.path} className={` ${location.pathname === item.path ? 'text-blue-500' : 'text-gray-900'}`}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
        {/* left icons */}
        <div className=' flex justify-end items-center gap-10 px-4'>
          <div className="">
            <img className='h-8 w-8 rounded-full' src={bell_icon} alt="bell" />
          </div>
          <div className="">
            <img className='h-8 w-8 rounded-full' src={avatar_icon} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header