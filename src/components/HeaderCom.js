import { Link, Outlet } from "react-router-dom";

function HeaderCom({onLogout,isLoggedIn, user}) {
    return(
        <>
            <header>
                <Link to="/">HOME</Link> &nbsp;
                <Link to="/list">LIST</Link> &nbsp;
                {isLoggedIn? <><Link to="/logout" onClick={onLogout}>LOGOUT</Link> {user?.id}님 로그인 상태</> : 
                <Link to="/login">LOGIN</Link>}
                &nbsp;
                <Link to="/register">REGISTER</Link> &nbsp;
                <hr />
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default HeaderCom;