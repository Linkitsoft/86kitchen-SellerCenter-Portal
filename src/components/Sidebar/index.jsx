import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/Admin-20 (75).png";
import circleImg from "../../assets/images/Admin-20 (86).png";
import home from "../../assets/images/Admin-20 (2).png";
import service from "../../assets/images/Admin-20 (3).png";
import rev from "../../assets/images/Admin-20 (4).png";
import order from "../../assets/images/Admin-20 (5).png";
import qs from "../../assets/images/Admin-20 (6).png";
import prof from "../../assets/images/Admin-20 (7).png";
import pass from "../../assets/images/Admin-20 (8).png";
import logout from "../../assets/images/Admin-20 (12).png";
//light
import homel from "../../assets/images/Admin-20 (19).png";
import servicel from "../../assets/images/Admin-20 (18).png";
import revl from "../../assets/images/Admin-20 (17).png";
import orderl from "../../assets/images/Admin-20 (16).png";
import qsl from "../../assets/images/Admin-20 (15).png";
import profl from "../../assets/images/Admin-20 (14).png";
import passl from "../../assets/images/Admin-20 (13).png";


import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/reducers/info";

const Sidebar = ({ index }) =>
{
    const [open, setOpen] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [list] = useState([
        {
            name: "Dashboard",
            light: home,
            dark: homel,
            url: "/dashboard",
            index: "1",
        },
        {
            name: "Services",
            light: service,
            dark: servicel,
            url: "/",
            index: "2",
            subMenu: [
                {
                    name: "Categories",
                    url: "/categories",
                    index: "2a",
                },
                {
                    name: "Services",
                    url: "/services",
                    index: "2b",
                },
            ]
        },

        {
            name: "Reviews",
            light: rev,
            dark: revl,
            url: "/reviews",
            index: "3",
        },

        {
            name: "Orders",
            light: order,
            dark: orderl,
            url: "/orders",
            index: "4",
        },

        {
            name: "Queries",
            light: qs,
            dark: qsl,
            url: "/queries",
            index: "5",
        },

        {
            name: "Profile",
            light: prof,
            dark: profl,
            url: "/profile",
            index: "6",
        },
        {
            name: "Change Password",
            light: pass,
            dark: passl,
            url: "/changePassword",
            index: "7",
        },
    ])
    const disptach = useDispatch()
    const { sidebarState } = useSelector((state) => state.tooltipInfo);
    const [event, setEvent] = useState(sidebarState)
    const navigate = useNavigate();
    const componentRef = useRef();
    const componentRef2 = useRef();

    useEffect(() =>
    {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
        // eslint-disable-next-line
    }, []);

    function handleClick(e)
    {
        if (window.innerWidth <= 700)
        {
            const toggleRef = componentRef.current;
            const outsideRef = componentRef2.current;
            if (!outsideRef?.contains(e.target) && !toggleRef?.contains(e.target))
            {
                setOpen(false);
            }
        }
    }

    const handleRoute = (route) =>
    {
        if (route === "logout")
        {
            window.localStorage.clear();
            window.location.reload();
        } else
        {
            navigate(`/${ route }`);
        }
    };

    const handleSubMenu = (item) =>
    {
        navigate(item?.url)
    }

    const handleLogout = () =>
    {
        localStorage.clear();
        window.location.reload();
    };

    const handleRouteClick = (item) =>
    {
        if (item.subMenu)
        {
            setEvent(item.index !== event ? item.index : null);
            disptach(toggleSidebar({ event: item.index !== event ? item.index : null }));
        } else
        {
            navigate(item?.url);
        }
    };


    useEffect(() =>
    {
        const handleResize = () =>
        {
            setOpen(window.innerWidth >= 700);
        };

        const resizeTimeout = setTimeout(() =>
        {
            handleResize();
            setShowSidebar(true);
        }, 100);

        window.addEventListener('resize', handleResize);

        return () =>
        {
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-lin
    }, []);


    return (
        <>
            <div className="navBar" ref={componentRef}>
                <div className="navBar_left">
                    <i
                        className="fas fa-bars"
                        onClick={() => setOpen((prev) => !prev)}
                    ></i>
                    <img
                        className="navBar_logo"
                        src={logoImg}
                        alt="logo"
                        onClick={() => handleRoute("")}
                    />
                </div>
                <div className="navBar_right">
                    <p className="navBar_text">Let’s verify your acoount at 86 kitch’n seller center</p>
                    <button className="navBar_verify">VERIFY NOW</button>
                </div>
            </div>
            {
                showSidebar &&
                <div className={!open ? "sideBar" : "sideBar sideBar_sidebarActive"} ref={componentRef2}>
                    <div className={open ? "sideBar_inner" : "sideBar_innersmall"}>
                        <div className="sideBar_eventInfo">
                            <img src={circleImg} alt="eventInfo" />
                            <div className="sideBar_eventText">
                                <p className="channelName">StormFiber</p>
                                <p className="icNo"><i className="fa star"></i>4.8</p>
                            </div>
                        </div>

                        <br />

                        <ul>
                            {list?.map(item =>
                            {
                                return (
                                    <>
                                        <li onClick={() => handleRouteClick(item)} className={index === item?.index ? "sideBar_title sideBar_active" : "sideBar_title"}>
                                            <img alt="logo" src={index === item?.index ? item?.light : item?.dark} />
                                            {item?.name}
                                            {item.subMenu && (
                                                <i className={event === item.index ? "fas fa-chevron-down" : "fas fa-chevron-right"}></i>
                                            )}
                                        </li>
                                        {event === item.index && (
                                            <div className="sideBar_list sideBar_active">
                                                <ul>
                                                    {item?.subMenu?.map((res) => (
                                                        <li
                                                            key={res.index}
                                                            className={index === res.index ? "sideBar_subMenu sideBar_active" : "sideBar_subMenu"}
                                                            onClick={() => handleSubMenu(res)}>
                                                            {res.name}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                )
                            })}


                            <li className="sideBar_title" onClick={() => handleLogout("")} >
                                <img src={logout} alt="logo" />
                                Logout
                            </li>
                        </ul>

                    </div>
                </div>
            }
        </>

    );
};

export default Sidebar;
