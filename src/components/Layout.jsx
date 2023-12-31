import { useLocation } from "react-router-dom";
import Footer from "./Footer";
import HeaderV2 from "./HeaderV2";

export default function Layout({ children }) {
    const location = useLocation();
    const headerNone = location.pathname.includes("/login")||location.pathname.includes("/signup");
    return (
        <>
            {headerNone || <HeaderV2 />}
            {children}
            <Footer />
        </>
    );
}
