import Layout from "../Layout";
import Sidebar from "../Sidebar";
import AccountInformationComponent from "../Account/AccountInformation";


export default function AccountInformation(){
  return (
    <>
      <Layout>
      <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:flex lg:flex-row lg:py-10">
        <Sidebar/>
        <AccountInformationComponent/>
        </section>
      </Layout>
    </>
  );
}