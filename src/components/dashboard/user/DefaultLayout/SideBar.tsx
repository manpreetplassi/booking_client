import React, { useEffect, useState } from "react";
import logo from '../../../../assets/logo.svg'
import { useNavigate } from "react-router-dom";

const roleBasedMenu = {
  receptionist: [
    { name: "Dashboard", path: "/dashboard/receptionist" },
    { name: "Appointments", path: "/dashboard/receptionist/appointments" },
    { name: "Add Appointment", path: "/dashboard/receptionist/add" },
  ],
  doctor: [
    { name: "Appointments", path: "/dashboard/doctor" },
    { name: "Prescriptions", path: "/dashboard/doctor/appointments" },
    { name: "Profile", path: "/dashboard/doctor/Profile" },
  ],
  admin: [
    { name: "Dashboard", path: "/dashboard/admin" },
    { name: "Manage Doctors", path: "/dashboard/admin/manage_doctors" },
    { name: "Manage Departments", path: "/dashboard/admin/manage_departments" },
    { name: "Manage Receptionists", path: "/dashboard/admin/manage_receptionists" },
    { name: "Manage Users", path: "/dashboard/admin/manage_users" },
  ],
  user: [
    { name: "Dashboard", path: "/dashboard/user" },
    { name: "Top Doctor's", path: "/dashboard/user/doctors_list" },
    { name: "Appointments", path: "/dashboard/user/appointments" },
    { name: "Messages", path: "/dashboard/user/messages" },
    { name: "Profile Settings", path: "/dashboard/user/profile_settings" },
    { name: "Help & Settings", path: "/dashboard/user/help_settings" },
    { name: "About Us", path: "/dashboard/user/about_us" },
  ]
};

const SideBar = ({ role }: { role: string }) => {

  const [tabs, setTabs] = useState<any[]>()
  const navigate = useNavigate(); 
  const navigateToRoute = (path: string) => {
    navigate(path);
  }

  useEffect(() => {
    switch (role) {
      case "admin":
        setTabs(roleBasedMenu.admin)
        break;
      case "doctor":
        setTabs(roleBasedMenu.doctor)
        break;
      case "user":
        setTabs(roleBasedMenu.user)
        break;
      default:
        break;
    }
  }, [role])

  return (
    <div className="border w-[17vw]  bg-gray-100 left-0 top-0 ">
      <div className="flex justify-center items-center h-[10vh] w-full">
        {/* <img className="h-full p-4" src={logo} alt="Logo" />*/}
      </div>
      <div className="">
        {tabs?.map((el, index) => (
          (
            <div className="tab_box text-left" key={index}>
              <div onClick={() => { navigateToRoute(el.path)} } className="tab text-gray-900 p-4 cursor-pointer hover:bg-gray-600 hover:text-gray-100 ease-in-out duration-300">{el.name}</div>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default SideBar;
