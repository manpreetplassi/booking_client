"use client"
import { useState } from "react";

export default function AppointmentForm() {
  const [appointmentType, setAppointmentType] = useState<"video" | "clinic">("video");

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>

      {/* Common Fields */}
      <form className="space-y-4">
        <input type="text" placeholder="Full Name" name="patientName"
          className="w-full p-3 border rounded-lg" />

        <input type="email" placeholder="Email" name="email"
          className="w-full p-3 border rounded-lg" />

        <input type="tel" placeholder="Phone Number" name="phoneNumber"
          className="w-full p-3 border rounded-lg" />

        <select name="doctorId" className="w-full p-3 border rounded-lg">
          <option>Select Doctor</option>
          <option value="1">Dr. John Doe</option>
          <option value="2">Dr. Sarah Lee</option>
        </select>

        <input type="date" name="appointmentDate" className="w-full p-3 border rounded-lg" />
        <input type="time" name="appointmentTime" className="w-full p-3 border rounded-lg" />

        <textarea placeholder="Reason for visit" name="reason"
          className="w-full p-3 border rounded-lg"></textarea>

        {/* Appointment Type */}
        <div className="flex gap-4">
          <label>
            <input type="radio" checked={appointmentType === "video"}
              onChange={() => setAppointmentType("video")} /> Video Chat
          </label>
          <label>
            <input type="radio" checked={appointmentType === "clinic"}
              onChange={() => setAppointmentType("clinic")} /> Clinic Visit
          </label>
        </div>

        {/* Conditional Fields */}
        {appointmentType === "video" && (
          <select name="preferredPlatform" className="w-full p-3 border rounded-lg">
            <option>Select Platform</option>
            <option value="zoom">Zoom</option>
            <option value="google_meet">Google Meet</option>
            <option value="teams">Microsoft Teams</option>
          </select>
        )}

        {appointmentType === "clinic" && (
          <input type="text" placeholder="Clinic Location" name="clinicLocation"
            className="w-full p-3 border rounded-lg" />
        )}

        <button type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}
