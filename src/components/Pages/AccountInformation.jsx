import Layout from "../Layout";
import Sidebar from "../Sidebar";
import AccountInformationComponent from "../Account/AccountInformation";
import { useState } from "react";
import { MdMenuOpen } from "react-icons/md";


export default function AccountInformation() {
  const [isSideBar, setIsSideBar] = useState(false);
  return (
    <>
      <Layout>
        <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
        <div className="xl:block lg:block min-[300px]:hidden">
                        <Sidebar />
                    </div>
                    <div className={`xl:hidden lg:hidden min-[300px]:block fixed top-0 left-0 duration-[.5s] transition-all ${isSideBar ? "translate-x-0" : "-translate-x-full"}`}>
                        <Sidebar />
                    </div>
                    <span className="items-center justify-end mr-4 mb-4 xl:hidden lg:hidden min-[300px]:flex" onClick={() => setIsSideBar(!isSideBar)}><MdMenuOpen className="w-8 h-8" /></span>
          <AccountInformationComponent />
        </section>
      </Layout>
    </>
  );
}