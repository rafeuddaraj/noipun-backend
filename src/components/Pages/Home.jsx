import Categories from "../Category/Categories";
import Hero from "../Hero";
import Layout from "../Layout";
import Products from "../Products/Products";
import ServiceSteps from "../ServiceSteps";

export default function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <ServiceSteps />
                <Categories />
                <Products />
            </Layout>
        </>
    );
}
