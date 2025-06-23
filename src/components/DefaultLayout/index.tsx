import Header from "../dashboard/Header";
import SideBar from "./SideBar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("enjbcej c")
  return (
    <div>
      <Header></Header>
      <SideBar role="admin" />
      {children}
    </div>
  );
};

export default DefaultLayout;