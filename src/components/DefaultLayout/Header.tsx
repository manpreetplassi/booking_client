import logo from '../../assets/logo.svg'
import bell_icon from '../../../public/bell-icon.svg'
import avatar_icon from '../../../public/avatar_icon.svg'
const Header = () => {

  return (
    <div className="bg-white h-[10vh] w-full left-0 absolute">
      <div className="border-b border-gray-300 flex justify-start h-full w-full">
        <div className='w-[12vw] ml-8 flex justify-end items-center '>
          <img className="w-full" src={logo} alt="Logo" />
        </div>
        <div className='flex justify-end items-center gap-10 w-full px-4'>
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