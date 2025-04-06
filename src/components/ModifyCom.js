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

          <label>
            이름: &nbsp;
            <input type="text" name="name" value={name || ""} onChange={onChange} placeholder="이름을 입력하세요" />
          </label>
          <br /><br />

          <label>
            주소: &nbsp;
            <input type="text" name="addr" value={addr || ""} onChange={onChange} placeholder="주소를 입력하세요" />
          </label>
          <br /><br />

          <button>수정 완료</button>
        </form>
      )}
    </>
  );
}

export default ModifyCom;
