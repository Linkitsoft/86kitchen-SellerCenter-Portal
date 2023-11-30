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
                        {token ? <Route path="/dashboard" element={<Dashboard />}></Route> : <Route path="/login" element={<Login />}></Route>}
                        <Route element={<AdminPrivate token={token} />}>
                            <Route path="/dashboard" element={<Dashboard />}></Route>
                            <Route path="/services" element={<Services />} ></Route>
                            <Route path="/orders" element={<Orders />} ></Route>
                            <Route path="/changePassword" element={<ChangePassword />} ></Route>
                            <Route path="/queries" element={<Queries />} ></Route>
                            <Route path="/reviews" element={<Review />} ></Route>
                            <Route path="/categories" element={<Categories />} ></Route>
                            <Route path="/profile" element={<Profile />} ></Route>

                        </Route>
                        <Route path="*" element={token ? (<Navigate to="/dashboard" replace />) : (<Navigate to="/login" replace />)}></Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </>
    )
}

export default MyRoutes