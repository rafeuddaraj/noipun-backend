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
import { useSelector } from "react-redux";
import Success from "./components/ui/Success";
import { accountSelector } from "./features/accountSlice/accountSelector";


export default function App() {
    const checkAuth = useAuthCheck();
    const {user,recentlyRegister} = useSelector(accountSelector)
    const {name,email} = user || {}
    return (
        <>
            {checkAuth && (
                <>
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/products" element={<Product />} />
                            <Route
                                path="/products/:id"
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
                    {recentlyRegister && <Success recentlyRegister={recentlyRegister} message={`আপনি সঠিক ভাবে রেজিস্টার করেছেন`} description={`হ্যালো ${name} আমি নৈপুন বলছি। আপনি সঠিক ভাবে রেজিস্ট্রেশন করেছেন। নৈপুন আপনার একাউন্ট ভেরিফাই করতে চাই। আপনার ${email} এই ইমেইলে একটা এক্টিভেশন লিঙ্ক পাঠানো হয়েছে। আপনি যদি আসলেই একজন ভেলিড ইউজার হোন তাহলে একাউন্ট ভেরিফাই করুন। একাউন্ট ভেরিফাই না করলে আপনি নৈপুন থেকে কোনো পণ্য ক্রয় করতে পারবেন না। আপনি নৈপুনের চোখে এখন স্পামার হয়ে থাকবেন।`}/>}
                </>
            )}
        </>
    );
}
