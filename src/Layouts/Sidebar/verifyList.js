import home from "../../assets/images/Admin-20 (2).png";
import pass from "../../assets/images/Admin-20 (8).png";
//light
import homel from "../../assets/images/Admin-20 (19).png";
import passl from "../../assets/images/Admin-20 (13).png";

export const verifyList = [
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
        name: "Change Password",
        light: pass,
        dark: passl,
        url: "/changePassword",
        index: "7",
        parentRoute: null,
        id: "changePassword"
    },
]