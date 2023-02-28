import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const api = (token, headersParams, isHandlerDisabled) => {

    var headersData =
        typeof token === "string"
            ? {
                Authorization: `Bearer ${token}`,
                "Access-Control-Allow-Origin": API_BASE_URL,
                'content-type': 'multipart/form-data',

            }
            : {};
    headersData = {...headersData, ...headersParams};
    const axiosInstance = axios.create({
        baseURL: API_BASE_URL,
        headers: headersData,
    });
    if (!isHandlerDisabled)
        axiosInstance.interceptors.response.use(
            (response) => {
                if (
                    response.status === "error" ||
                    response.status === "failed"
                ) {
                    let error;
                    if (
                        typeof response.data.message !== "string" &&
                        Object.values(response.data.message).length
                    )
                        error = Object.values(response.data.message).join(", ");
                    else error = response.data.message;
                    if (
                        typeof response.data.error !== "string" &&
                        Object.values(response.data.error).length
                    )
                        error = Object.values(response.data.error).join(", ");
                    /* eslint-disable-next-line prefer-destructuring */ else
                        error = response.data.error;
                    return Promise.reject(error);
                }
                return response.data;
            },
            (_error) => {
                const {response} = _error;
                if (response) {
                    if (response.status === 401) {
                        return response.data;
                        // auto logout if 401 response returned from api
                        // clear localstorage or a logout method
                        localStorage.clear();
                        // eslint-disable-next-line no-restricted-globals
                        //if (location) location.replace("/");
                    }
                    let error;
                    if (
                        typeof response.data.message === "object" &&
                        Object.values(response.data?.message).length
                    )
                        error = Object.values(response.data?.message).join(", ");
                    else error = response.data?.message;
                    if (
                        !error &&
                        typeof response.data?.error === "object" &&
                        Object.values(response.data?.error).length
                    )
                        error = Object.values(response.data?.error).join(", ");
                    else if (!error) error = response.data?.error;
                    return Promise.reject({..._error, error});
                }
                return Promise.reject(_error);
            }
        );
    return axiosInstance;
};

export default api;
