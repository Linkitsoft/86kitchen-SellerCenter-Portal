import axios from "axios";


const instance = axios.create({
    // baseURL: "https://2xk3k86g-8080.euw.devtunnels.ms/api/superAdminRoutes/",
    baseURL: `https://kjjp4n4d-8081.inc1.devtunnels.ms/api/partner/`,
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        // "Authorization": `Bearer ${token}`
    },
});

let isTokenExpiredModalVisible = false

instance.interceptors.request.use(
    (config) =>
    {
        const token = localStorage.getItem("token");
        if (token)
        {
            config.headers.Authorization = `Bearer ${ token }`;
        }

        return config;
    },
    (error) =>
    {
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    (response) =>
    {
        if (response?.data?.message === "Token is not Valid!" || response?.data?.message === 'Forbidden. Partner access required.')
        {
            if (!isTokenExpiredModalVisible)
            {
                isTokenExpiredModalVisible = true;
                // Trigger an event to show the modal
                const event = new Event("showTokenExpiredModal");
                document.dispatchEvent(event);
                window.localStorage.clear()
                window.location.reload()
            }
        } else
        {
            return response
        }
    },
    (error) =>
    {
        return Promise.reject(error);
    }
);

export default instance