import React, { useRef, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logoImg from "../../assets/images/Admin-20 (75).png";
import circleImg from "../../assets/images/Admin-20 (86).png";
import logout from "../../assets/images/Admin-20 (12).png";
// import home from "../../assets/images/Admin-20 (2).png";
// import service from "../../assets/images/Admin-20 (3).png";
// import rev from "../../assets/images/Admin-20 (4).png";
// import order from "../../assets/images/Admin-20 (5).png";
// import qs from "../../assets/images/Admin-20 (6).png";
// import prof from "../../assets/images/Admin-20 (7).png";
// import pass from "../../assets/images/Admin-20 (8).png";
// //light
// import homel from "../../assets/images/Admin-20 (19).png";
// import servicel from "../../assets/images/Admin-20 (18).png";
// import revl from "../../assets/images/Admin-20 (17).png";
// import orderl from "../../assets/images/Admin-20 (16).png";
// import qsl from "../../assets/images/Admin-20 (15).png";
// import profl from "../../assets/images/Admin-20 (14).png";
// import passl from "../../assets/images/Admin-20 (13).png";


import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../redux/reducers/info";
import RoleAccess from '../../hoc/RoleAccess';
import useUserRole from "../../hooks/useUserRole";
import { list } from "./list";
import { useUser } from "../../context/userContext";
import { useSidebarClickOutside } from "../../hooks/useSidebarClickOutside";
import OnlyVerified from "../../hoc/OnlyVerified";
import { useUserDetails } from "../../context/profileContext";
import { verifyList } from "./verifyList";

const Sidebar = () =>
{
    const { sidebarState } = useSelector((state) => state.tooltipInfo);
    const [open, setOpen] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);
    const [event, setEvent] = useState(sidebarState)
    const location = useLocation();
    const roles = useUserRole()
    const { userType } = useUser()
    const disptach = useDispatch()
    const navigate = useNavigate();
    const componentRef = useRef();
    const componentRef2 = useRef();
    const { userDetails } = useUserDetails()

    const renderList = (userDetails?.status === 0 || userDetails?.status === 1) ? verifyList : list
    // useEffect(() =>
    // {
    //     document.addEventListener("click", handleClick);
    //     return () => document.removeEventListener("click", handleClick);
    //     // eslint-disable-next-line
    // }, []);

    // function handleClick(e)
    // {
    //     if (window.innerWidth <= 700)
    //     {
    //         const toggleRef = componentRef.current;
    //         const outsideRef = componentRef2.current;
    //         if (!outsideRef?.contains(e.target) && !toggleRef?.contains(e.target))
    //         {
    //             setOpen(false);
    //         }
    //     }
    // }

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
        if (item?.subMenu)
        {
            setEvent(item?.index !== event ? item?.index : null);
            disptach(toggleSidebar({ event: item?.index !== event ? item?.index : null }));
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

    useSidebarClickOutside(componentRef, componentRef2, () =>
    {
        setOpen(false);
    });
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
               <OnlyVerified>
                        <div className="navBar_right">
                            <p className="navBar_text">Let’s verify your account at 86 kitch’n partner center</p>
                            <button className="navBar_verify" onClick={() => navigate('/verifyAccount')}>VERIFY NOW</button>
                        </div>
                </OnlyVerified>
                {/* {userType === 'user' && <p className="navBar_type">Observant User</p>} */}

            </div>
            {
                showSidebar &&
                <div className={!open ? "sideBar" : "sideBar sideBar_sidebarActive"} ref={componentRef2}>
                    <div className={open ? "sideBar_inner" : "sideBar_innersmall"}>
                        {userType === 'admin' && <p className="navBar_roleInfo">Partner Center</p>}
                        {userType === 'user' && <p className="navBar_roleInfo">Partner Center</p>}
                        {userType === 'user' && <p className="navBar_roleInfo1">Observant User</p>}
                        <div className="sideBar_eventInfo">
                            <img src={circleImg} alt="eventInfo" />
                            <div className="sideBar_eventText">
                                <p className="channelName">StormFiber</p>
                                <p className="icNo"><i className="fa-solid fa-star"></i>4.8</p>
                            </div>
                        </div>
                        <br />
                        <ul>
                            {renderList?.map(item =>
                            {
                                return (
                                    <div key={item?.index}>
                                        <RoleAccess role={!roles?.hide?.includes(item?.id)}>
                                            <li key={item?.index} onClick={() => handleRouteClick(item)} className={(location?.pathname === item?.url || item?.parentRoute?.includes(location?.pathname)) ? "sideBar_title sideBar_active" : "sideBar_title"}>
                                                <img alt="logo" src={(location?.pathname === item?.url || item?.parentRoute?.includes(location?.pathname)) ? item?.light : item?.dark} />
                                                {item?.name}
                                                {item?.subMenu && (
                                                    <i className={event === item?.index ? "fas fa-chevron-down" : "fas fa-chevron-right"}></i>
                                                )}
                                            </li>
                                        </RoleAccess>
                                        {event === item?.index && (
                                            <div className="sideBar_list sideBar_active">
                                                <ul>
                                                    {item?.subMenu?.map((res) => (
                                                        <RoleAccess key={res.index} role={!roles?.hide?.includes(res?.id)}>
                                                            <li
                                                                key={res.index}
                                                                className={(location?.pathname === res?.url || item?.parentRoute?.includes(location?.pathname)) ? "sideBar_subMenu sideBar_active" : "sideBar_subMenu"}
                                                                onClick={() => handleSubMenu(res)}>
                                                                {res.name}
                                                            </li>
                                                        </RoleAccess>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
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
