import React from 'react'
import upload_area from '../../../public/upload_area.svg'
import DefaultLayout from '../DefaultLayout';

const doctorFormFields = [
    { label: "Doctor Name", name: "doctor_name", type: "text", placeholder: "Enter full name", colSpan: 1 },
    { label: "Speciality", name: "speciality", type: "text", placeholder: "Enter speciality", colSpan: 1 },
    { label: "Email", name: "email", type: "email", placeholder: "Enter email address", colSpan: 1 },
    { label: "Phone Number", name: "phone_number", type: "tel", placeholder: "Enter phone number", colSpan: 1 },
    { label: "Address", name: "address", type: "text", placeholder: "Enter address", colSpan: 1 },
    { label: "Experience", name: "experience", type: "text", placeholder: "Enter experience", colSpan: 1 },
    { label: "Fees per Consultation", name: "fees", type: "text", placeholder: "Enter fees", colSpan: 1 },
    { label: "About Doctor", name: "about", type: "textarea", placeholder: "Write about doctor", colSpan: 2 },
];

export default function AddDoctor() {
    return (
        <DefaultLayout>
            <div className='bg-white p-6 rounded-lg shadow-md mt-10'>
                {/* upload picture */}
                <div className='flex items-center justify-start'>
                    <div className={`relative mr-4 w-24 h-24 border-2 border-[#C9D8FF] flex items-center justify-center rounded-full`}>
                        <input type="file" accept="image/*" className={`w-full h-full absolute opacity-0 inset-0  cursor-pointer `} />
                        <img src={upload_area} alt="upload area" className='w-full h-full object-fit' />
                    </div>
                    <p className='text-lg text-[#7B7B7B]'>Upload doctor picture</p>
                </div>

                {/* form fields */}
                <form className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 mt-10'>
                    {doctorFormFields.map((field) => (
                        <div key={field.name} className={`col-span-${field.colSpan} mb-4`}>
                            <h4 className='text-md font-semibold mb-2 text-[#7B7B7B]'>{field.label}</h4>
                            {field.type === "textarea" ? (
                                <textarea placeholder={field.placeholder} className='w-full border-2 border-[#C9D8FF] rounded-md p-2 ' />
                            ) : (
                                <input type={field.type} placeholder={field.placeholder} className='w-full border-2 border-[#C9D8FF] rounded-md p-2' />
                            )}
                        </div>
                    ))}
                    <button type="submit" className='bg-[#5F6FFF] text-white px-4 py-2 rounded-full w-fit '>Add Doctor</button>
                </form>
            </div>
        </DefaultLayout>
    )
}
