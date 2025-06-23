import { useEffect, useState } from "react";

const roleBasedMenu = {
  receptionist: [
    { name: "Dashboard", path: "/dashboard/receptionist" },
    { name: "Appointments", path: "/dashboard/receptionist/appointments" },
    { name: "Add Appointment", path: "/dashboard/receptionist/add" },
  ],
  doctor: [
    { name: "Dashboard", path: "/dashboard/doctor" },
    { name: "My Appointments", path: "/dashboard/doctor/appointments" },
  ],
  admin: [
    { name: "Dashboard", path: "/dashboard/admin" },
    { name: "Manage Doctors", path: "/dashboard/admin/doctors" },
    { name: "Manage Departments", path: "/dashboard/admin/departments" },
    { name: "Manage Users", path: "/dashboard/admin/users" },
  ]
};

const SideBar = ({role}: {role: string}) => {

    const [tabs, setTabs] = useState<any[]>()
    useEffect(() => {
        switch (role) {
            case "admin":
                setTabs(roleBasedMenu.admin)
                break;
            default:
                break;
        }
    }, [role])

  return (
    <div className="sidebar ">
        {tabs?.map((el, index) => (
          (
            <div className="tab_box" key={index}>
              <div  className="tab">{el.name}</div>
            </div>
          )
          ))}
    </div>
  );
};

export default SideBar;
