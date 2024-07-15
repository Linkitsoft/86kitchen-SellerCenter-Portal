import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import { ToastContainer } from 'react-toastify';
import Loader from '../components/Loader';
import Mainlayout from '../Layouts/MainLayout';
import PrivateRoute from '../hoc/PrivateRoute';
import useUserRole from '../hooks/useUserRole';
import { allRoutes } from './AllRoutes';
import { useUserDetails } from '../context/profileContext';

const MyRoutes = () =>
{
    const token = localStorage?.getItem("token");
    const roles = useUserRole()
    const { userDetails } = useUserDetails()
    const Dashboard = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Dashboard")), 800);
        });
    });

    const Login = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Login")), 800);
        });
    });

    const Signup = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Signup")), 800);
        });
    });



    const Home = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Home")), 800);
        });
    });

    const Verification = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Verification")), 800);
        });
    });

    const ChangePassword = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/ChangePassword")), 800);
        });
    });

    const onlyVerify = [{
        path: 'dashboard',
        element: <Dashboard />
    },
    {
        path: 'changePassword',
        element: <ChangePassword />
    },
    ]

    const filteredRoutes = userDetails?.status === 0 ? onlyVerify : allRoutes.filter(item => !roles?.hide?.includes(item?.path));

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
                <Suspense fallback={<Loader />}>
                    <Routes>
                        {token ? <Route element={<Mainlayout />}><Route path="/dashboard" element={<Dashboard />}></Route></Route> : <Route path="/home" element={<Home />}></Route>}
                        <Route element={<PrivateRoute token={token} />}>
                            <Route element={<Mainlayout />}>
                                {filteredRoutes.map((item) => (
                                    <Route key={item.path} path={`/${ item.path }`} element={item.element} />
                                ))}
                                {/* <Route path="/dashboard" element={<Dashboard />}></Route>
                                <Route path="/services" element={<Services />} ></Route>
                                <Route path="/orders" element={<Orders />} ></Route>
                                <Route path="/changePassword" element={<ChangePassword />} ></Route>
                                <Route path="/queries" element={<Queries />} ></Route>
                                <Route path="/reviews" element={<Review />} ></Route>
                                <Route path="/profile" element={<Profile />} ></Route>
                                <Route path="/verifyAccount" element={<VerifyAccount />} ></Route>
                                <Route path="/orderDetails" element={<OrderDetails />} ></Route>
                                <Route path="/addService" element={<AddService />} ></Route>
                                <Route path="/editService" element={<EditService />} ></Route>
                                <Route path="/generateSales" element={<GenerateSales />} ></Route> */}
                            </Route>
                        </Route>
                        <Route path="*" element={token ? (<Navigate to="/dashboard" replace />) : (<Navigate to="/home" replace />)}></Route>
                        <Route path="/home" element={<Home />} ></Route>
                        {!token && <Route path="/verification" element={<Verification />} ></Route>}
                        {!token && <Route path="/login" element={<Login />} ></Route>}
                        {!token && <Route path="/signup" element={<Signup />} ></Route>}
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes