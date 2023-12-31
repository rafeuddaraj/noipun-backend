import Order from "./components/Pages/Order";
import Product from "./components/Pages/Product";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AccountInformation from "./components/Pages/AccountInformation";
import ChangePassword from "./components/Pages/ChangePassword";
import SignIn from "./components/Pages/SignIn";
import Signup from "./components/Pages/Signup";
import User from "./components/Pages/User";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import useAuthCheck from "./Hooks/useAuthCheck";
export default function App() {
    const auth = useAuthCheck();
    return (
        <Router>
            {auth && (
                <Layout>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
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
                            path="/product"
                            element={
                                <PrivateRoute>
                                    <Product />
                                </PrivateRoute>
                            }
                        />
                        <Route
                            path="/order"
                            element={
                                <PrivateRoute>
                                    <Order />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Layout>
            )}
        </Router>
    );
}
