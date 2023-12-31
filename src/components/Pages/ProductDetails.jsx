import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import ProductDetailsComponent from '../Products/ProductDetails/ProductDetails'

export default function ProductDetails() {
    return (
        <>
            <Layout>
            <ProductDetailsComponent/>
            </Layout>
        </>
    );
}
