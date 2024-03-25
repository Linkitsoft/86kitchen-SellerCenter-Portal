import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useUserRole from './useUserRole';
import { replace } from 'formik';

const useHidePage = () =>
{
    const roles = useUserRole();
    const pathname = useLocation().pathname;
    const navigate = useNavigate();
    const [shouldRender, setShouldRender] = useState(null);

    useEffect(() =>
    {
        const checkAndNavigate = async () =>
        {
            if (roles.hide && roles?.hide?.includes(pathname?.substring(1)))
            {
                setShouldRender(false);
                navigate(-1, replace);
            } else
            {
                setShouldRender(true);
            }
        };

        checkAndNavigate();
    }, [roles, pathname, navigate]);

    return { shouldRender };
};

export default useHidePage;