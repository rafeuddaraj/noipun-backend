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
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import Modal from "./components/ui/Modal";

export default function App() {
    const checkAuth = useAuthCheck();
    return (
        <>
            {checkAuth && (
                <Router>
                    <Modal />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<Product />} />
                        <Route
                            path="/products/:category/:slug/:id"
                            element={<ProductDetails />}
                        />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route
                            path="/login"
                            element={
                                <PublicRoute>
                                    <SignIn />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <PublicRoute>
                                    <Signup />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/account"
                            element={
                                <PrivateRoute>
                                    <User />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/account-information"
                            element={
                                <PrivateRoute>
                                    <AccountInformation />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/change-password"
                            element={
                                <PrivateRoute>
                                    <ChangePassword />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Router>
            )}
        </>
    );
}
