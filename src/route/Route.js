import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { lazy } from "react";
import AdminPrivate from './adminPrivateRoute';
import { ToastContainer } from 'react-toastify';
import Loader from '../components/Loader';
import Mainlayout from '../Layouts/Mainlayout';

const MyRoutes = () =>
{
    const token = localStorage?.getItem("token");

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

    const Services = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Services")), 800);
        });
    });

    const Orders = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Orders")), 800);
        });
    });

    const ChangePassword = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/ChangePassword")), 800);
        });
    });

    const Queries = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Queries")), 800);
        });
    });

    const Review = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Reviews")), 800);
        });
    });

    // const Categories = lazy(() =>
    // {
    //     return new Promise((resolve) =>
    //     {
    //         setTimeout(() => resolve(import("../pages/Categories")), 800);
    //     });
    // });

    const Profile = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Profile")), 800);
        });
    });

    const VerifyAccount = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/VerifyAccount")), 800);
        });
    });

    const OrderDetails = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/OrderDetails")), 800);
        });
    });

    const AddService = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/AddService")), 800);
        });
    });

    const EditService = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/EditService")), 800);
        });
    });

    const GenerateSales = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/GenerateSales")), 800);
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

    const Logs = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/Logs")), 800);
        });
    });

    const AddObservantUsers = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/AddObservantUsers")), 800);
        });
    });

    const AllObservantUsers = lazy(() =>
    {
        return new Promise((resolve) =>
        {
            setTimeout(() => resolve(import("../pages/AllObservantUsers")), 800);
        });
    });


    const allRoutes = [
        {
            path: 'dashboard',
            element: <Dashboard />
        },
        {
            path: 'services',
            element: <Services />
        },
        {
            path: 'orders',
            element: <Orders />
        },
        {
            path: 'changePassword',
            element: <ChangePassword />
        },
        {
            path: 'queries',
            element: <Queries />
        },
        {
            path: 'reviews',
            element: <Review />
        },
        {
            path: 'profile',
            element: <Profile />
        },
        {
            path: 'verifyAccount',
            element: <VerifyAccount />
        },
        {
            path: 'orderDetails',
            element: <OrderDetails />
        },
        {
            path: 'addService',
            element: <AddService />
        },
        {
            path: 'editService',
            element: <EditService />
        },
        {
            path: 'generateSales',
            element: <GenerateSales />
        },
        {
            path: 'logs',
            element: <Logs />
        },
        {
            path: 'addObservantUsers',
            element: <AddObservantUsers />
        },
        {
            path: 'allObservantUsers',
            element: <AllObservantUsers />
        },
    ];
    // const filteredRoutes = allRoutes.filter(item => !roles?.hide?.includes(item?.path));

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
                        <Route element={<AdminPrivate token={token} />}>
                            <Route element={<Mainlayout />}>
                                {allRoutes.map((item) => (
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