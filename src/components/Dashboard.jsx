import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <>
            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-7xl px-5 lg:px-0">
                    <div className="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-8">

                            <Link to={'/product'} className="dashboard-item-card">
                                <p className="text-slate-200 mt-3 ">Products</p>
                            </Link>

                            <Link to={'/order'} className="dashboard-item-card">
                                <p className="text-slate-200 mt-3 ">Orders</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
