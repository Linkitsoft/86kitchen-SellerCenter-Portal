import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) =>
{

    const [userType, setUserType] = useState("user");

    const setUser = (type) =>
    {
        setUserType(type);
        localStorage.setItem('userType', type);
    };

    useEffect(() =>
    {
        const storedUserType = localStorage.getItem('userType');
        if (storedUserType)
        {
            setUserType(storedUserType);
        }
    }, []);

    return (
        <UserContext.Provider value={{ userType, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () =>
{
    return useContext(UserContext);
};