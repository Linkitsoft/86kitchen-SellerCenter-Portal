import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import AdminPrivate from './adminPrivateRoute';
import { ToastContainer } from 'react-toastify';
// import Loader from '../components/Loader';

const MyRoutes = () =>
{
    const token = localStorage?.getItem("token");




    const Dashboard = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Dashboard")), 1300);
        });
    });

    const Login = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Login")), 1300);
        });
    });

    const Services = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Services")), 1300);
        });
    });

    const Orders = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Orders")), 1300);
        });
    });

    const ChangePassword = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/ChangePassword")), 1300);
        });
    });

    const Queries = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Queries")), 1300);
        });
    });

    const Review = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Reviews")), 1300);
        });
    });

    const Categories = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Categories")), 1300);
        });
    });

    const Profile = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Profile")), 1300);
        });
    });

    const VerifyAccount = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/VerifyAccount")), 1300);
        });
    });

    const OrderDetails = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/OrderDetails")), 1300);
        });
    });

    const AddService = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/AddService")), 1300);
        });
    });

    const EditService = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/EditService")), 1300);
        });
    });

    const GenerateSales = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/GenerateSales")), 1300);
        });
    });

    const Home = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Home")), 1300);
        });
    });

    const Verification = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Verification")), 1300);
        });
    });



    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <BrowserRouter>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        {token ? <Route path="/dashboard" element={<Dashboard />}></Route> : <Route path="/home" element={<Home />}></Route>}
                        <Route element={<AdminPrivate token={token} />}>
                            <Route path="/dashboard" element={<Dashboard />}></Route>
                            <Route path="/services" element={<Services />} ></Route>
                            <Route path="/orders" element={<Orders />} ></Route>
                            <Route path="/changePassword" element={<ChangePassword />} ></Route>
                            <Route path="/queries" element={<Queries />} ></Route>
                            <Route path="/reviews" element={<Review />} ></Route>
                            <Route path="/categories" element={<Categories />} ></Route>
                            <Route path="/profile" element={<Profile />} ></Route>
                            <Route path="/verifyAccount" element={<VerifyAccount />} ></Route>
                            <Route path="/orderDetails" element={<OrderDetails />} ></Route>
                            <Route path="/addService" element={<AddService />} ></Route>
                            <Route path="/editService" element={<EditService />} ></Route>
                            <Route path="/generateSales" element={<GenerateSales />} ></Route>
                        </Route>
                        <Route path="*" element={token ? (<Navigate to="/dashboard" replace />) : (<Navigate to="/home" replace />)}></Route>
                        <Route path="/home" element={<Home />} ></Route>
                        {!token && <Route path="/verification" element={<Verification />} ></Route>}
                        {!token && <Route path="/login" element={<Login />} ></Route>}
                        {!token && <Route path="/signup" element={<Login />} ></Route>}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes