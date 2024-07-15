export const getRoles = (userType, state) =>
{
    const roles = {
        create: false,
        edit: false,
        hide: []
    };

    if (userType === 'admin')
    {
        roles.create = state;
        roles.hide = []

    } else if (userType === 'user')
    {
        roles.create = false;
        roles.hide = ['addService',
            'verifyAccount',
            'changePassword',
            'editService',
            'observantUsers',
            'allObservantUsers',
            'addObservantUsers',
            'logs']
    }

    return roles;
};