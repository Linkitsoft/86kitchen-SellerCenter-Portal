import home from "../../assets/images/Admin-20 (2).png";
import service from "../../assets/images/Admin-20 (3).png";
import rev from "../../assets/images/Admin-20 (4).png";
import order from "../../assets/images/Admin-20 (5).png";
import qs from "../../assets/images/Admin-20 (6).png";
import prof from "../../assets/images/Admin-20 (7).png";
import pass from "../../assets/images/Admin-20 (8).png";
//light
import homel from "../../assets/images/Admin-20 (19).png";
import servicel from "../../assets/images/Admin-20 (18).png";
import revl from "../../assets/images/Admin-20 (17).png";
import orderl from "../../assets/images/Admin-20 (16).png";
import qsl from "../../assets/images/Admin-20 (15).png";
import profl from "../../assets/images/Admin-20 (14).png";
import passl from "../../assets/images/Admin-20 (13).png";

export const list = [
    {
        name: "Dashboard",
        light: home,
        dark: homel,
        url: "/dashboard",
        index: "1",
        parentRoute: null,
        id: "dashboard"
    },
    {
        name: "Observant Users",
        light: prof,
        dark: profl,
        url: "/observantUsers",
        index: "9",
        parentRoute: null,
        id: "observantUsers",
        subMenu: [
            {
                name: "All Observants users",
                url: "/allObservantUsers",
                id: "allObservantUsers",
            },
            {
                name: "Add observant user",
                url: "/addObservantUsers",
                index: "5b",
                id: "addObservantUsers",
            },
        ]
    },
    {
        name: "Services",
        light: service,
        dark: servicel,
        url: "/services",
        index: "2b",
        parentRoute: ['/addService', '/editService'],
        id: "services"
    },
    {
        name: "Reviews",
        light: rev,
        dark: revl,
        url: "/reviews",
        index: "3",
        parentRoute: null,
        id: "reviews"

    },
    {
        name: "Orders",
        light: order,
        dark: orderl,
        url: "/orders",
        index: "4",
        parentRoute: ['/orderDetails', '/generateSales'],
        id: 'orders'
    },
    {
        name: "Sales Analysis",
        light: rev,
        dark: revl,
        url: "/sales-analysis",
        index: "11",
        parentRoute: null,
        id: 'orders'
    },
    {
        name: "Campaigns",
        light: prof,
        dark: profl,
        url: "/campaign ",
        index: "12",
        parentRoute: null,
        id: 'orders',
        subMenu: [
            {
                name: "All Campaigns",
                url: "/allCampaigns",
                id: "allCampaigns",
            },
            {
                name: "Create Campaign",
                url: "/createCampaign",
                index: "11b",
                id: "createCampaign",
            },
        ]
    },
    {
        name: "Sales & Commission",
        light: service,
        dark: servicel,
        url: "/commission",
        index: "10",
        parentRoute: null,
        id: "commission"
    },
    {
        name: "Queries",
        light: qs,
        dark: qsl,
        url: "/queries",
        index: "5",
        parentRoute: null,
        id: "queries"
    },
    {
        name: "Profile",
        light: prof,
        dark: profl,
        url: "/profile",
        index: "6",
        parentRoute: null,
        id: "profile"
    },
    {
        name: "Change Password",
        light: pass,
        dark: passl,
        url: "/changePassword",
        index: "7",
        parentRoute: null,
        id: "changePassword"
    },
    {
        name: "Logs",
        light: pass,
        dark: passl,
        url: "/logs",
        index: "8",
        parentRoute: null,
        id: "logs"
    },
    // {
    //     name: "Admin Users",
    //     light: prof,
    //     dark: profl,
    //     url: "/adminUsers",
    //     index: "9",
    //     parentRoute: null,
    //     id: "adminUsers",
    //     subMenu: [
    //         {
    //             name: "All admin users",
    //             url: "/allAdminUsers",
    //             id: "allAdminUsers",
    //         },
    //         {
    //             name: "Add admin user",
    //             url: "/addAdminUsers",
    //             index: "5b",
    //             id: "addAdminUsers",
    //         },
    //     ]
    // },

]