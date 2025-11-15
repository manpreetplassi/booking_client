import React from 'react'
import DefaultLayout from '../../DefaultLayout'
import { Link } from 'react-router-dom'

let doctors = [
  {
    "id": 1,
    "name": "Dr. Emily Carter",
    "specialty": "Cardiologist",
    "email": "emily.carter@example.com",
    "contact": "555-123-4567",
    "rating": 4.8
  },
  {
    "id": 2,
    "name": "Dr. Michael Chen",
    "specialty": "Pediatrician",
    "email": "michael.chen@example.com",
    "contact": "555-987-6543",
    "rating": 4.9
  },
  {
    "id": 3,
    "name": "Dr. Sarah Johnson",
    "specialty": "Dermatologist",
    "email": "sarah.johnson@example.com",
    "contact": "555-246-8135",
    "rating": 4.5
  },
  {
    "id": 4,
    "name": "Dr. David Rodriguez",
    "specialty": "Orthopedic Surgeon",
    "email": "david.rodriguez@example.com",
    "contact": "555-789-0123",
    "rating": 4.7
  },
  {
    "id": 5,
    "name": "Dr. Jessica Lee",
    "specialty": "Neurologist",
    "email": "jessica.lee@example.com",
    "contact": "555-369-2580",
    "rating": 5.0
  },
  {
    "id": 6,
    "name": "Dr. Robert Singh",
    "specialty": "Oncologist",
    "email": "robert.singh@example.com",
    "contact": "555-555-5555",
    "rating": 4.6
  }
]

function DoctorList() {
  return (
    <DefaultLayout>
      <div className=''>
        {/* header */}
        <div className='flex justify-between items-center p-4'>
          <h2 className='text-lg font-semibold'>Doctor List</h2>
          <Link to="/dashboard/admin/manage_doctors/add" className='bg-blue-500 text-white px-4 py-2 rounded'>Add Doctor</Link>
        </div>
        {/* list */}
        <div className='flex justify-between items-center p-4'>
          <table className='min-w-full rounded-2xl'>
            <thead className=' bg-gray-200'>
              {/* {doctors.map()} */}
              <tr className='text-left font-semibold'>
                {Object.keys(doctors[0]).map((key, index) => (
                  <td key={index} className='border-b p-4'>{key.toUpperCase().replace(/_/g, ' ')}</td>
                ))}
              </tr>
            </thead>
            <tbody className=''>
              {doctors.map((doctor) => (
                <tr key={doctor.id} className='border-b  '>
                  {Object.values(doctor).map((value, index) => (
                    <td key={index} className='p-4'>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default DoctorList
