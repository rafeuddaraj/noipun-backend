import Product from "../Product";

export default function RelatedProduct() {
    return (
        <>
            <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">
                সংশ্লিষ্ট পণ্য
            </p>
            <section className="container mx-auto grid max-w-[1200px] xl:grid-cols-4 lg:grid-cols-2 min-[300px]:grid-cols-1 gap-3 px-5 pb-10">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </section>
        </>
    );
}
