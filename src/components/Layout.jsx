import Footer from "./Footer";
import HeaderV2 from "./HeaderV2";

export default function Layout({ children }) {
    return (
        <>
            <HeaderV2 />
            {children}

            <Footer />
        </>
    );
}
