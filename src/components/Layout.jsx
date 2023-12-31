import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import HeaderV2 from "./HeaderV2";

export default function Layout({ children }) {
    const location = useLocation();
    const headerNone = location.pathname.includes("/wishlist")|| location.pathname.includes("/account") ||location.pathname.includes("/account-information")||location.pathname.includes("/change-password") ||location.pathname.includes("/products")||location.pathname.includes("/login")||location.pathname.includes("/signup");
    return (
        <>
            {headerNone || <HeaderV2 />}
            {children}
            <Footer />
        </>
    );
}
