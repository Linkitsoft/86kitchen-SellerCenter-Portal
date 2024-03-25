import React from 'react';
import Loader from '../components/Loader';
import useHidePage from '../hooks/useHidePage';

const HidePage = ({ children }) => {
    const { shouldRender } = useHidePage();

    if (!shouldRender) {
        return <Loader />;
    }

    return children;
};

export default HidePage;