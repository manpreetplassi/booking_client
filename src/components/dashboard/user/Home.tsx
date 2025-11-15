import group_profiles from '../../../../public/group_profiles.png'
import nurse from '../../../../public/nurse.png'
import create_acc from '../../../../public/create_acc.png'
import DefaultLayout from './DefaultLayout'
export default function Home() {
    return (
        <DefaultLayout>
            {/* Appointment booking banner */}
            <div className="relative px-10 py-32 h-fit w-full rounded-md text-white bg-[#5F6FFF] bg-no-repeat bg-contain lg:bg-right bg-[position:110%_50%] [background-image:url('../../../../public/hero.png')]">
                <div className='text-5xl font-bold  text-white max-w-[50%]'>Book Appointment {" "}<br />
                    With Trusted Doctors</div>
                <div className='py-4 max-w-[50%] flex items-start'>
                    <img src={group_profiles} alt="group_profiles" className='inline mr-2' />
                    <p className=''>Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.</p>
                </div>
                <button className='mb-4 bg-white text-black px-4 py-2 rounded-full cursor-pointer'>Book appointment {"->"}</button>
            </div>

            {/* Speciality section */}
            <div className="flex flex-col mt-10 items-center">
                {/* text section */}
                <div className='text-center mb-6'>
                    <h2 className="text-3xl font-bold mb-4">Find by Speciality</h2>
                    <p className="max-w-[600px] mx-auto">
                        Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                    </p>
                </div>
                {/* Speciality round cards */}
                <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-4">
                    {["Cardiology", "Neurology", "Pediatrics", "Dermatology", "Orthopedics", "Psychiatry"].map((speciality) => (
                        <div key={speciality} className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-semibold mb-2">
                                {speciality.charAt(0)}
                            </div>
                            <span className="text-center">{speciality}</span>
                        </div>
                    ))}
                </div>
                {/* text section */}
                <div className='text-center mt-10'>
                    <h2 className="text-3xl font-bold mb-4">Top Doctors to Book</h2>
                    <p className="max-w-[600px] mx-auto">Simply browse through our extensive list of trusted doctors.</p>
                </div>
                {/* Doctor cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6 w-full items-center">
                    {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((doctor, index) => (
                        <div key={index} className="bg-white rounded-lg border-2 border-[#C9D8FF] shadow-md">
                            <img src={nurse} alt="" className='bg-[#EAEFFF] w-full rounded-t-lg justify-center items-center ' />
                            {/* text section */}
                            <span className='p-2 flex flex-col items-start'>
                                <h3 className="text-xs text-green-800">Available</h3>
                                <h3 className="text-md font-[500]">Name Singh</h3>
                                <p className="">Speciality</p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Account creating banner */}
            <div className="relative mt-10 px-10 py-12 h-fit w-full rounded-md text-white bg-[#5F6FFF] bg-no-repeat bg-contain lg:bg-right bg-[position:110%_50%] [background-image:url('../../../../public/create_acc.png')]">
                <div className='text-5xl leading-snug font-bold text-white max-w-[50%]'>Book Appointment {" "}<br />
                    With 100+ Trusted Doctors</div>
                <button className='mb-4 mt-8 bg-white text-black px-4 py-2 rounded-full cursor-pointer'>Create Account</button>
            </div>

        </DefaultLayout>
    )
}
