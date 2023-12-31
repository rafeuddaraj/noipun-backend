export default function OrderSummary() {
    return (
        <>
            <section className="mx-auto w-full px-4 md:max-w-[400px]">
                <div className="">
                    <div className="border py-5 px-4 shadow-md">
                        <p className="font-bold">অর্ডার সারসংক্ষেপ</p>

                        <div className="flex justify-between border-b py-5">
                            <p>সাবটোটাল</p>
                            <p>৳1280</p>
                        </div>

                        <div className="flex justify-between border-b py-5">
                            <p>ডেলিভারি</p>
                            <p>Free</p>
                        </div>

                        <div className="flex justify-between py-5">
                            <p>মোট</p>
                            <p>৳1280</p>
                        </div>

                        <a href="checkout-address.html">
                            <button className="w-full bg-violet-900 px-5 py-2 text-white">
                                চেকআউট
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
