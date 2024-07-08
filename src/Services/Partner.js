import instance from "../Instance/instance"

export const SignIn = async (body) =>
{
    const res = instance.post("login", body)
    return res
}

export const SignUp = async (body) =>
{
    const res = instance.post("signUp", body)
    return res
}

export const Verify = async (body) =>
{
    const res = instance.post("verify", body)
    return res
}

export const GetDashboardStats = async () =>
{
    const res = instance.post("getDashboardStats")
    return res
}

export const GetAllQuery = async () =>
{
    const res = instance.post("getAllQuery")
    return res
}

export const GetPartner = async () =>
{
    const res = instance.post("getPartner")
    return res
}

export const PartnerChat = async (body) =>
{
    const res = instance.post("partnerChat", body)
    return res
}