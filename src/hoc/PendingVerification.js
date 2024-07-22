import { useUserDetails } from "../context/profileContext";

const PendingVerification = ({ children }) =>
{
    const { userDetails } = useUserDetails()

    if (userDetails?.status === 1) return children
    return
};

export default PendingVerification;