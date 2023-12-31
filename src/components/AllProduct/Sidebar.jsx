export default function Sidebar() {
    return (
        <>
            <section className="sidebar-custom-css flex justify-between lg:w-[200px] flex-col px-3 xl:block lg:block min-[300px]:block">
                <div className="flex border-b pb-5">
                    <div className="w-full">
                        <p className="mb-3 font-medium md:font-light">CATEGORIES</p>

                        <div className="flex w-full justify-between">
                            <div className="flex justify-center items-center">
                                <input type="checkbox" />
                                <p className="ml-4">Bedroom</p>
                            </div>
                            <div>
                                <p className="text-gray-500">(12)</p>
                            </div>
                        </div>

                        <div className="flex w-full justify-between">
                            <div className="flex justify-center items-center">
                                <input type="checkbox" />
                                <p className="ml-4">Sofa</p>
                            </div>
                            <div>
                                <p className="text-gray-500">(15)</p>
                            </div>
                        </div>

                        <div className="flex w-full justify-between">
                            <div className="flex justify-center items-center">
                                <input type="checkbox" />
                                <p className="ml-4">Office</p>
                            </div>
                            <div>
                                <p className="text-gray-500">(14)</p>
                            </div>
                        </div>

                        <div className="flex w-full justify-between">
                            <div className="flex justify-center items-center">
                                <input type="checkbox" />
                                <p className="ml-4">Outdoor</p>
                            </div>
                            <div>
                                <p className="text-gray-500">(124)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex border-b py-5 md:pt-0">
                    <div className="w-full">
                        <p className="mb-3 font-medium">BRANDS</p>

                        <div className="flex w-full justify-between">
                            <div className="flex justify-center items-center">
                                <input type="checkbox" />
                                <p className="ml-4">APEX</p>
                            </div>
                            <div>
                                <p className="text-gray-500">(12)</p>
                            </div>
                        </div>

                        <div className="flex w-full justify-between">
                            <div className="flex justify-center items-center">
                                <input type="checkbox" />
                                <p className="ml-4">Call of SOFA</p>
                            </div>
                            <div>
                                <p className="text-gray-500">(15)</p>
                            </div>
                        </div>

                        <div className="flex w-full justify-between">
                            <div className="flex justify-center items-center">
                                <input type="checkbox" />
                                <p className="ml-4">Puff B&G</p>
                            </div>
                            <div>
                                <p className="text-gray-500">(14)</p>
                            </div>
                        </div>

                        <div className="flex w-full justify-between">
                            <div className="flex justify-center items-center">
                                <input type="checkbox" />
                                <p className="ml-4">Fornighte</p>
                            </div>
                            <div>
                                <p className="text-gray-500">(124)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex border-b py-5">
                    <div className="w-full">
                        <p className="mb-3 font-medium">PRICE</p>

                        <div className="flex w-full">
                            <div className="flex justify-between">
                                <input
                                    // x-mask="99999"
                                    min="50"
                                    type="number"
                                    className="h-8 w-[70px] border pl-2"
                                    placeholder="50"
                                />
                                <span className="px-3">-</span>
                                <input
                                    // x-mask="999999"
                                    type="number"
                                    max="999999"
                                    className="h-8 w-[70px] border pl-2"
                                    placeholder="99999"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}
