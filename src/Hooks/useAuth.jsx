import { useSelector } from "react-redux";

export default function useAuth() {
    const auth = useSelector((state) => state.account);
    if (auth?.user?.accessToken) {
        return true;
    }
    return false;
}
