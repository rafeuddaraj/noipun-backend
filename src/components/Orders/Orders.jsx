import Order from "./Order";

export default function Orders() {
    return (
        <>
            <section className="py-6 bg-primary">
                <div className="mx-auto max-w-full px-5 lg:px-20">
                    <div className="px-3 py-20 bg-opacity-10">
                        <ul className="assignment-status">
                            <li>
                                মোট <span>4</span>
                            </li>
                            <li>
                                মুলতবি <span>3</span>
                            </li>
                            <li>
                                সক্রিয় <span>1</span>
                            </li>
                        </ul>
                        <div className="overflow-x-auto mt-4">
                            <table className="divide-y-1 text-base divide-green-400 w-full">
                                <thead>
                                    <tr>
                                        <th className="table-th">ক্রেতা</th>
                                        <th className="table-th">তারিখ</th>
                                        <th className="table-th">পণ্য</th>
                                        <th className="table-th">দাম</th>
                                        <th className="table-th">কর্মপ্রক্রিয়া</th>
                                    </tr>
                                </thead>

                                {/* <tbody className="divide-y divide-slate-600/50">
                                    
                                    <Order/>
                                    <Order/>
                                    <Order/>
                                    <Order/>
                                    <Order/>
                                </tbody> */}
                            </table>
                        </div>
                    </div>
                    <h2 className="mt-10 text-green-400 text-center text-3xl">আমাদের কাজ চলছে খুব শীঘ্রই ফিরবো আমরা আপনার কাছে</h2>
                </div>
            </section>
        </>
    );
}
