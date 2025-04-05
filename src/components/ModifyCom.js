function ModifyCom({ id, name, addr, onChange, onSubmit, loading, error }) {
  return (
    <>
      {loading ? (
        <h3>수정 중...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <form onSubmit={onSubmit}>
          <h3>회원 정보 수정</h3>
          <p>아이디: {id}</p>
          <input type="text" name="name" value={name || ""} onChange={onChange} placeholder="이름" /><br />
          <input type="text" name="addr" value={addr || ""} onChange={onChange} placeholder="주소" /><br />
          <button>수정 완료</button>
        </form>
      )}
    </>
  );
}

export default ModifyCom;
