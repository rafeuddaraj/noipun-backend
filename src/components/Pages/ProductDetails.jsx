import { useParams } from 'react-router-dom';
import Layout from '../Layout';
import ProductDetailsComponent from '../Products/ProductDetails/ProductDetails'

export default function ProductDetails() {
    const { id } = useParams();
    return (
        <>
            <Layout>
            <ProductDetailsComponent id={id}/>
            </Layout>
        </>
    );
}
