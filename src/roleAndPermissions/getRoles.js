export const getRoles = (userType) =>
{
    const roles = {
        create: false,
        edit: false,
        hide: []
    };

    if (userType === 'admin')
    {
        roles.create = true;
        roles.hide = []

    } else if (userType === 'user')
    {
        roles.create = false;
        roles.hide = ['addService', 'verifyAccount', 'changePassword', 'editService']
    }

    return roles;
};