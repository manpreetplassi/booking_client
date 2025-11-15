import React from 'react'
import DefaultLayout from '../../DefaultLayout'

const ReceptionistData = [
  {
    "receptionist_id": "RECP-001",
    "first_name": "Alice",
    "last_name": "Smith",
    "email": "alice.smith@clinic.com",
    "status": "Active",
    "assigned_doctor_ids": [
      "DR-45A",  
      "DR-12C",  
      "DR-78E"   
    ]
  },
  {
    "receptionist_id": "RECP-002",
    "first_name": "Bob",
    "last_name": "Kaur",
    "email": "bob.kaur@clinic.com",
    "status": "Active",
    "assigned_doctor_ids": [
      "DR-99B"  
    ]
  },
  {
    "receptionist_id": "RECP-003",
    "first_name": "Chloe",
    "last_name": "Patel",
    "email": "chloe.patel@clinic.com",
    "status": "Suspended",
    "assigned_doctor_ids": [
      "DR-12C", 
      "DR-33F"   
    ]
  }
]

export default function ReceptionistList() {
  return (
     <DefaultLayout>
      <div className=''>
        <div className='flex justify-between items-center p-4'>
          <table className='min-w-full rounded-2xl'>
            <thead className=' bg-gray-200'>
              {/* {doctors.map()} */}
              <tr className='text-left font-semibold'>
                {Object.keys(ReceptionistData[0]).map((key, index) => (
                  <td key={index} className='border-b p-4'>{key.toUpperCase().replace(/_/g, ' ')}</td>
                ))}
              </tr>
            </thead>
            <tbody className=''>
              {ReceptionistData.map((receptionist) => (
                <tr key={receptionist.receptionist_id} className='border-b  '>
                  {Object.values(receptionist).map((value, index) => {
                    switch (value) {
                      case receptionist.assigned_doctor_ids:
                        return (
                            <td key={index} className='p-4'>👥</td>
                        );
                      default:
                        return (
                          <td key={index} className='p-4'>
                            {Array.isArray(value) ? value.join(', ') : value}
                          </td>
                        )
                    }
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  )
}
