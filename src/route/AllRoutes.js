import { lazy } from "react";

import AllCampaigns from '../pages/AllCampaigns';
import CreateCampaign from '../pages/CreateCampaign';


const Dashboard = lazy(() =>
{
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve(import("../pages/Dashboard")), 800);
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
const SalesAnalysis = lazy(() =>
{
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve(import("../pages/SalesAnalysis")), 800);
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

const QueryDetails = lazy(() =>
{
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve(import("../pages/QueryDetails")), 800);
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

const Commission = lazy(() =>
{
    return new Promise((resolve) =>
    {
        setTimeout(() => resolve(import("../pages/Commission")), 800);
    });
});

export const allRoutes = [
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
        path: 'sales-analysis',
        element: <SalesAnalysis />
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
        path: 'queryDetails',
        element: <QueryDetails />
    },
    {
        path: 'allCampaigns',
        element: <AllCampaigns />
    },
    {
        path: 'createCampaign',
        element: <CreateCampaign />
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
    {
        path: 'commission',
        element: <Commission />
    },
    // {
    //     path: 'addAdminUsers',
    //     element: <AddAdminUsers />
    // },
    // {
    //     path: 'allAdminUsers',
    //     element: <AllAdminUsers />
    // },
];