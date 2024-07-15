import { useUserDetails } from "../context/profileContext";

const OnlyVerified = ({ children }) =>
{
    const { userDetails } = useUserDetails()

    if (userDetails?.status === 1 || userDetails?.status === 2) return
    return children
};

export default OnlyVerified;