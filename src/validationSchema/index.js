import * as Yup from 'yup';

export const categoryValidation = Yup.object({
    name: Yup.string().required('Category Name is required'),
});

export const serviceValidation = Yup.object({
    name: Yup.string().required('Service Name is required'),
    category: Yup.string().required('Service category is required'),
    price: Yup.string().required('Total Price is required'),
    item: Yup.string().required('Choose Recommended Items is required'),
    description: Yup.string().required('Description is required'),
    commision: Yup.string().required('Commision is required'),
});

export const passwordValidation = Yup.object({
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const verifyValidation = Yup.object({

    // personal details
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    // BUssiness location
    address1: Yup.string().required('Address 1 is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip Code is required'),
    // Bussiness Details
    businessName: Yup.string().required('Business Name is required'),
    taxId: Yup.string().required('Tax ID is required'),
    // businessPhone: Yup.string().required('Business Phone Number is required'),

    // front: Yup.mixed().required('Front ID image is required'),
    // back: Yup.mixed().required('Back ID image is required'),
    // banner: Yup.string().required('Banner Image is required'),
    // logoInput: Yup.string().required('Profile Image is required'),

});

export const loginValidation = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

export const signupValidation = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

export const observantUsersValidation = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    phoneNo: Yup.string().required('Phone No is required'),

});