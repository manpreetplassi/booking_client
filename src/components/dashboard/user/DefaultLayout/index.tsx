import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white flex min-h-screen overflow-hidden">
      {/* <SideBar role="admin" /> */}

      <div className="flex flex-col flex-1">
        <Header />
        <main className="mt-[10vh] flex-1 h-[20vh] px-24 overflow-y-auto p-6">
          {children}
        </main>
          <Footer />
      </div>
    </div>
  )
};

export default DefaultLayout;