import { useLocation } from "react-router-dom";

const useUrlState = () =>
{
    const value = useLocation().state
    return value;
};

export default useUrlState;