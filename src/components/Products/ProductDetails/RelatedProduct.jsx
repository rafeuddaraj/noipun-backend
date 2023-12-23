import Product from "../Product";

export default function RelatedProduct() {
    return (
        <>
            <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">
                RELATED PRODUCTS
            </p>
            <section className="container mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </section>
        </>
    );
}
