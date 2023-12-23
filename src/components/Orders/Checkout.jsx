import PaymentMethod from "./PaymentMethod";
import Address from "./Address";
import AddAddress from "./AddAddress";

export default function Checkout() {
    return (
        <>
            <div className="flex-grow">
                <section className="container mx-auto max-w-[1200px] py-5 lg:flex lg:flex-row lg:py-10">
                    {/* <!-- form  --> */}
                    <main className="max-w-[1200px] w-full">
                        <div className="px-5 pb-10">
                            <div className="border border-gray-400">
                                <Address />
                                <div className="bg-[#f7f7f7] border-t border-gray-400 p-6 items-center flex-col flex">
                                    <AddAddress />
                                </div>
                            </div>
                        </div>

                        <section className="grid grid-cols-1 gap-3 px-5 pb-10">
                            <div className="card border border-gray-400">
                                <div className="border-b border-gray-400 p-4">
                                    <h1 className="text-lg">
                                        Payment Method{" "}
                                        <p className="inline-block text-sm">
                                            (Please select only one! payment
                                            method)
                                        </p>
                                    </h1>
                                </div>
                                <div className=" mt-5 border-gray-400 p-6">
                                    <div className="grid grid-cols-2  gap-y-6 py-10 gap-x-3">
                                        <PaymentMethod value={"bkash"} />
                                        <PaymentMethod value={"nagad"} />
                                        <PaymentMethod value={"rocket"} />
                                    </div>
                                    <div className="payment-content">
                                        {" "}
                                        <p>
                                            গ্রাহকদের সর্বোচ্চ সেবা নিশ্চিত করতে
                                            রকমারিতে রয়েছে সুবিশাল ইনভেন্টরি।
                                            স্টকে না থাকা প্রোডাক্টগুলো
                                            সাপ্লায়ারের নিকট থেকে সংগ্রহ করতে হয়
                                            -
                                        </p>{" "}
                                        <div className="">
                                            <p>
                                                1. আপনার অর্ডারের প্রোডাক্টগুলো
                                                সাপ্লায়ারের কাছে না থাকলে সেগুলো
                                                ব্যাতিত অবশিষ্ট প্রোডাক্টগুলো
                                                পাঠিয়ে দেয়া হবে। এসব ক্ষেত্রে
                                                আপনাকে
                                                ইমেইল/এসএমএস/হোয়াটসঅ্যাপ/ফোন এর
                                                মাধ্যমে জানিয়ে দেয়া হবে।
                                            </p>
                                            <p>
                                                2. আপনার পেইড অর্ডারের প্রোডাক্ট
                                                NA হলে অথবা ক্যান্সেল হলে পেইড
                                                এমাউন্ট ৭-১০ কর্মদিবসের মাঝে
                                                রিফান্ড করা হবে ইনশাআল্লাহ।
                                            </p>
                                            <p>
                                                3. সাপ্লায়ারের পক্ষ থেকে
                                                প্রোডাক্টের মূল্য পরিবর্তন হতে
                                                পারে। এসব ক্ষেত্রে আপনাকে
                                                ইমেইল/এসএমএস/হোয়াটসঅ্যাপ/ফোন এর
                                                মাধ্যমে জানিয়ে দেয়া হবে।
                                            </p>
                                        </div>{" "}
                                        <div>
                                            {" "}
                                            <input
                                                type="checkbox"
                                                id="terms"
                                            />{" "}
                                            <label
                                                htmlFor="terms"
                                                className="custom-control-label js--condition-label">
                                                এই শর্তগুলো মেনে অর্ডার প্রদান
                                                করছি।
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-end border-t border-gray-400 p-6">
                                    <button className="text-black inline-block p-3 hover:bg-black hover:text-[#ff9900] rounded-sm bg-[#ff9900]">
                                        Confirm Order
                                    </button>
                                </div>
                            </div>
                        </section>
                    </main>
                    {/* <!-- /form  --> */}

                    {/* <!-- Summary  --> */}

                    <section className="mx-auto w-full px-4 md:max-w-[400px]">
                        <div className="">
                            <div className="border py-5 px-4 shadow-md">
                                <p className="font-bold">ORDER SUMMARY</p>

                                <div className="flex justify-between border-b py-5">
                                    <p>Subtotal</p>
                                    <p>$1280</p>
                                </div>

                                <div className="flex justify-between border-b py-5">
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </div>

                                <div className="flex justify-between py-5">
                                    <p>Total</p>
                                    <p>$1280</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                {/* <!-- /Summary --> */}

                {/* <!-- Cons bages --> */}

                <section className="container mx-auto my-8 flex flex-col justify-center gap-3 lg:flex-row">
                    {/* <!-- 1 --> */}

                    <div className="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5">
                        <div className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6 text-violet-900 lg:mr-2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                                />
                            </svg>
                        </div>

                        <div className="ml-6 flex flex-col justify-center">
                            <h3 className="text-left text-xs font-bold lg:text-sm">
                                Free Delivery
                            </h3>
                            <p className="text-light text-center text-xs lg:text-left lg:text-sm">
                                Orders from $200
                            </p>
                        </div>
                    </div>

                    {/* <!-- 2 --> */}

                    <div className="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5">
                        <div className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6 text-violet-900 lg:mr-2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                                />
                            </svg>
                        </div>

                        <div className="ml-6 flex flex-col justify-center">
                            <h3 className="text-left text-xs font-bold lg:text-sm">
                                Money returns
                            </h3>
                            <p className="text-light text-left text-xs lg:text-sm">
                                30 Days guarantee
                            </p>
                        </div>
                    </div>

                    {/* <!-- 3 --> */}

                    <div className="mx-5 flex flex-row items-center justify-center border-2 border-yellow-400 py-4 px-5">
                        <div className="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6 text-violet-900 lg:mr-2">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                                />
                            </svg>
                        </div>

                        <div className="ml-6 flex flex-col justify-center">
                            <h3 className="text-left text-xs font-bold lg:text-sm">
                                24/7 Supports
                            </h3>
                            <p className="text-light text-left text-xs lg:text-sm">
                                Consumer support
                            </p>
                        </div>
                    </div>
                </section>

                {/* <!-- /Cons bages  --> */}
            </div>
        </>
    );
}
