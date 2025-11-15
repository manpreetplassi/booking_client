import React from 'react'
import logo from '../../../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className='grid grid-cols-[60%_20%_20%] gap-8 py-8 px-24'>
                {/* left section */}
                <div className=''>
                    <div className=''>
                        <img src={logo} alt="Logo" className='h-10' />
                    </div>
                    <div className='max-w-[80%] mt-4'>
                        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem quod suscipit hic harum beatae similique doloremque. Fugiat, eius natus! Ut voluptate placeat, ipsum odit pariatur incidunt commodi molestiae! Laudantium eligendi beatae reprehenderit ea non est nisi enim quia delectus optio sequi, amet rem nam facere sapiente officiis accusamus harum. Nesciunt.</p>'
                    </div>
                </div>

                {/* center section */}
                <div>
                    <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                    <Link to="/user/home" className='block mb-2 hover:underline'>Home</Link>
                    <Link to="/user/appointments" className='block mb-2 hover:underline'>Appointments</Link>
                    <Link to="/user/contact_us" className='block mb-2 hover:underline'>Contact Us</Link>
                    <Link to="/user/privacy" className='block mb-2 hover:underline'>Privacy Policy</Link>
                </div>

                {/* right section */}
                <div>
                    <h3 className='text-lg font-semibold mb-4 '>Get In Touch</h3>
                    <Link to="/user/facebook" className='block mb-2 hover:underline'>Facebook</Link>
                    <Link to="/user/twitter" className='block mb-2 hover:underline'>Twitter</Link>
                    <Link to="/user/instagram" className='block mb-2 hover:underline'>Instagram</Link>
                </div>
            </div>
            <div className='bg-gray-100 py-4'>
                <div className='container mx-auto text-center'>
                    <p className='text-gray-600'>© 2023 Booking. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
