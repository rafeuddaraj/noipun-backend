import { useEffect } from "react";
import ImageGalley from "./ImageGalley";
import ProductDescription from "./ProductDescription";
import ProductOverview from "./ProductOverview";
import RelatedProduct from "./RelatedProduct";
import { useLocation, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../../features/productSlice/productApi";

export default function ProductDetails() {
    const {slug} = useParams()
    const { data: product, isSuccess } = useGetProductQuery(slug);

<<<<<<< HEAD
export default function ProductDetails({ id }) {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <section
        className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10"
      >
        <ImageGalley />
        <ProductOverview id={id} />
        <ProductDescription />
      </section>
      <RelatedProduct />
    </>
  );
}
=======
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <section className="container flex-grow mx-auto max-w-[1200px] border-b py-5 lg:grid lg:grid-cols-2 lg:py-10">
                {isSuccess && (
                    <>
                        <ImageGalley images={product.image}/>
                        <ProductOverview slug={slug} product={product}/>
                        <ProductDescription product={product}/>
                    </>
                )}
            </section>
            <RelatedProduct />
        </>
    );
}
>>>>>>> origin/front-end
