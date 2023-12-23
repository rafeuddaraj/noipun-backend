import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Product from "./components/Pages/Product";
import ProductDetails from "./components/Pages/ProductDetails";
import Wishlist from "./components/Pages/Wishlist";
import Cart from "./components/Pages/Cart";
import Checkout from "./components/Pages/Checkout";
import SignIn from "./components/Pages/SignIn";
import Signup from "./components/Pages/Signup";
import User from "./components/Pages/User";
import AccountInformation from "./components/Pages/AccountInformation";
import ChangePassword from "./components/Pages/ChangePassword";
import useAuthCheck from "./Hooks/useAuthCheck";

export default function App() {
    const checkAuth = useAuthCheck();
    return (
        <>
            {checkAuth && (
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Product />} />
                        <Route
                            path="/products/:id"
                            element={<ProductDetails />}
                        />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart/:id" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/login" element={<SignIn />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/account" element={<User />} />
                        <Route
                            path="/account-information"
                            element={<AccountInformation />}
                        />
                        <Route
                            path="/change-password"
                            element={<ChangePassword />}
                        />
                    </Routes>
                </Router>
            )}
        </>
    );
}
