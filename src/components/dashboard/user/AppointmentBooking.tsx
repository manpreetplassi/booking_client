import React from 'react'

const fields = [
    { label: "Full Name", name: "patientName", type: "text", placeholder: "Enter your full name" },
    { label: "Email", name: "email", type: "email", placeholder: "Enter your email" },
    { label: "Phone Number", name: "phoneNumber", type: "tel", placeholder: "Enter your phone number" },
]

function AppointmentBookingForm() {
    return (
        <div>
            <div className='text-2xl mb-4 font-semibold'>Book an Appointment</div>
            <form className='space-y-4'>
                {fields.map((element, index) => (
                    <div key={index}>
                        <input type={element.type} placeholder={element.placeholder} name={element.name} className='w-full p-3 rounded-md'></input>
                    </div>
                ))}
            </form>
        </div>
    )
}

export default AppointmentBookingForm
