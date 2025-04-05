function RegCom ({onChange, id, pwd, name, addr, onSubmit, loading, error}) {
    return (
        <>
            { loading ?<h3>회원가입 처리중..</h3> : 
            error ?<h3>{error}</h3> :
            <form onSubmit={onSubmit}>
            <input type="text" name="id" value={id || ""} onChange={onChange} placeholder="아이디" /> <br />
            <input type="text" name="pwd" value={pwd || ""} onChange={onChange} placeholder="비밀번호" /> <br />
            <input type="text" name="name" value={name || ""} onChange={onChange} placeholder="이름" /> <br />
            <input type="text" name="addr" value={addr || ""} onChange={onChange} placeholder="주소" /> <br />
            <button>가입</button>
            </form>
            
            }
        </>
    );
}
export default RegCom;

