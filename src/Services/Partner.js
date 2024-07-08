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
export const GetDashboardStats = async () =>
{
    const res = instance.post("getDashboardStats")
    return res
}