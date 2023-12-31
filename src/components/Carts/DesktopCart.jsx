import DesktopItem from "./DesktopItem";

export default function DesktopCart() {
    return (
        <>
            <section className="hidden h-[600px] w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 md:grid">
                <table className="table-fixed">
                    <thead className="h-16 bg-neutral-100">
                        <tr>
                            <th>পণ্য</th>
                            <th>দাম</th>
                            <th>পরিমান</th>
                            <th>মোট</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <DesktopItem />
                        <DesktopItem />
                        <DesktopItem />
                        <DesktopItem />
                        <DesktopItem />
                    </tbody>
                </table>
            </section>
        </>
    );
}
