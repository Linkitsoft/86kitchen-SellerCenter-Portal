import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { GetPartner } from "../Services/Partner";

export const ProfileContext = createContext(null);

export const ProfileProvider = ({ children }) =>
{

    const [userDetails, setUserDetails] = useState({});

    const getMyData = async () =>
    {
        const res = await GetPartner()
        if (res?.data?.status === 'success')
        {
            setUserDetails(res?.data?.data)
        }
    }

    useEffect(() =>
    {
        getMyData()
    }, [])

    const appValue = {
        userDetails,
        getMyData,
    };

    return (
        <ProfileContext.Provider value={appValue}>
            {children}
        </ProfileContext.Provider>
    );
};


export const useUserDetails = () =>
{
    return useContext(ProfileContext);
};