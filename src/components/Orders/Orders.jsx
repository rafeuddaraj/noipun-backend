import Order from "./Order";

export default function Orders() {
    return (
        <>
            <section class="py-6 bg-primary">
                <div class="mx-auto max-w-full px-5 lg:px-20">
                    <div class="px-3 py-20 bg-opacity-10">
                        <ul class="assignment-status">
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
                        <div class="overflow-x-auto mt-4">
                            <table class="divide-y-1 text-base divide-gray-600 w-full">
                                <thead>
                                    <tr>
                                        <th class="table-th">ক্রেতা</th>
                                        <th class="table-th">তারিখ</th>
                                        <th class="table-th">পণ্য</th>
                                        <th class="table-th">দাম</th>
                                        <th class="table-th">কর্মপ্রক্রিয়া</th>
                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-slate-600/50">
                                    
                                    <Order/>
                                    <Order/>
                                    <Order/>
                                    <Order/>
                                    <Order/>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
