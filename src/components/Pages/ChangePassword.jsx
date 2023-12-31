
import Sidebar from "../Sidebar";
import ChangePasswordComponent from "../Account/ChangePassword";

export default function AccountInformation() {
    return (
        <>
                <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
                    <Sidebar />
                    <ChangePasswordComponent />
                </section>
        </>
    );
}
