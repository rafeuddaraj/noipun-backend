import Product from "./Product";

export default function Products() {
    return (
        <>
            <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">
                RECOMMENDED FOR YOU
            </p>

            {/* <!-- Recommendations --> card-img-noipun */}
            <section className="xl:max-w-[1200px] lg:max-w-[100%] min-[300px]:w-[100%] mx-auto grid xl:grid-cols-4 lg:grid-cols-2 min-[300px]:grid-cols-1 gap-3 px-5 pb-10">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>

            </section>
        </>
    );
}
