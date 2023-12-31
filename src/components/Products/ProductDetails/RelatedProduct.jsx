import { useGetProductsQuery } from "../../../features/productSlice/productApi";
import ProductSkeleton from "../../ui/ProductSkeleton";
import Product from "../Product";

export default function RelatedProduct() {
    const {
        data: products,
        isSuccess,
        isLoading,
        isError,
        error,
    } = useGetProductsQuery();

    let content = null;

    if (isLoading) {
        content = <><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/><ProductSkeleton/></>
    }
    if (!isLoading && isError) {
        content = <h1>Error Occurred.</h1>;
    }
    if (!isLoading && !isError && products?.length <= 0) {
        content = <h1>Product not found</h1>;
    }
    if (!isLoading && !isError && products?.length > 0) {
        content = products.map((product) => (
            <Product key={product.slug} product={product} />
        ));
    }
    return (
        <>
            <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">
                সংশ্লিষ্ট পণ্য
            </p>
<<<<<<< HEAD
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
=======
            <section className="container mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4">
                {content}
>>>>>>> origin/front-end
            </section>
        </>
    );
}
