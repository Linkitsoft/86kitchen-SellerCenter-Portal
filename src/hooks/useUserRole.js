import { useUserDetails } from '../context/profileContext';
import { useUser } from '../context/userContext';
import { getRoles } from '../roleAndPermissions/getRoles';

const useUserRole = () =>
{
    const { userType } = useUser();
    const { userDetails } = useUserDetails()

    if (userType === 'admin') return getRoles('admin', userDetails?.status === 2 ? true : false);
    if (userType === 'user') return getRoles('user', null);
    return { create: false, edit: false, hide: [] };
};

export default useUserRole;