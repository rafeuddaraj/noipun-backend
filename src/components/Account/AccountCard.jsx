import AccountCardItem from "./AccountCardItem";

export default function AccountCard() {
    return (
        <>
            <section className="grid w-full max-w-[1200px] grid-cols-1 gap-3 px-5 pb-10 lg:grid-cols-3">
                <AccountCardItem/>
                <AccountCardItem/>
                <AccountCardItem/>
            </section>
        </>
    );
}
