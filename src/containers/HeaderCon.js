import { useContext } from "react";
import HeaderCom from "../components/HeaderCom";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";

function HeaderCon () {
    const {auth, logout} = useContext(AuthContext)
    const navigate = useNavigate();
    const onLogout = (e) =>{
        e.preventDefault();
        logout();
        navigate("/");
    }
    return (
        <>
            <HeaderCom onLogout={onLogout} isLoggedIn={auth.isLoggedIn} user={auth.user} />
        </>
    )
}
export default HeaderCon;