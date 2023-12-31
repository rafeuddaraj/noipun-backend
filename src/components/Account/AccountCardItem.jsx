export default function AccountCardItem() {
    return (
        <>
            <div className="">
                <div className="border py-5 shadow-md">
                    <div className="flex justify-between px-4 pb-5">
                        <p className="font-bold">প্রোফাইল</p>
                        <a
                            className="text-sm text-violet-900"
                            href="profile-information.html">
                            পরিবর্তন
                        </a>
                    </div>

                    <div className="px-4">
                        <p>Sarah Johnson</p>
                        <p>sarah@yandex.com</p>
                        <p>20371</p>
                        <p className="">1223 3432 3344 0082</p>
                    </div>
                </div>
            </div>
        </>
    );
}
