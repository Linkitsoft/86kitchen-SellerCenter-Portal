import { useUserDetails } from "../context/profileContext";

const OnlyVerified = ({ children }) =>
{
    const { userDetails } = useUserDetails()

    if (userDetails?.status === 0) return children
    return
};

export default OnlyVerified;