import { useUser } from '../context/userContext';
import { getRoles } from '../roleAndPermissions/getRoles';

const useUserRole = () =>
{
    const { userType } = useUser();
    if (userType === 'admin') return getRoles('admin');
    if (userType === 'user') return getRoles('user');
};

export default useUserRole;