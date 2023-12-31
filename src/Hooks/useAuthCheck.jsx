import { useEffect, useState } from "react";
import { login, logout } from "../features/accountSlice/accountSlice";
import { useDispatch } from "react-redux";
import { accountApi } from "../features/accountSlice/accountApi";


export default function useAuthCheck() {
    const [authChecked, setAuthChecked] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        let localAuth = localStorage.getItem("noipunAuth");
        if (localAuth) {
            const auth = JSON.parse(localAuth);
            dispatch(accountApi.endpoints.login.initiate({username:auth.email,email:auth.email,password:auth.password}))
            .unwrap()
            .then(data=>{
                dispatch(login({...data,password:auth.password}))
                localStorage.removeItem('noipunAuth')
                localStorage.setItem('noipunAuth',JSON.stringify({...data,password:auth.password}))
            })
        }
        setAuthChecked(true);
    },[dispatch]);
    return authChecked
}
