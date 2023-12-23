export default function OrderSummary() {
    return (
        <>
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

                        <a href="checkout-address.html">
                            <button className="w-full bg-violet-900 px-5 py-2 text-white">
                                Proceed to checkout
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
