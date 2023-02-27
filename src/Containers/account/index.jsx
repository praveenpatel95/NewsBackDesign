import {Outlet, useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function Account(){
    const {
        isAuthenticated
    } = useSelector(state => state?.AuthReducer);

    const navigate = useNavigate();
    useEffect(() => {
        if(!isAuthenticated){
            navigate('/login');
        }
    }, [isAuthenticated]);
    return (
        <Outlet />
    )
}
export default Account;