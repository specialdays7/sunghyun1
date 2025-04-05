import { useNavigate } from "react-router-dom";

function OneCom({ id, name, addr, loading, error, isOwner, onDelete, onEdit }) {
  const navigate = useNavigate();

  return (
    <>
      {loading ? (
        <h3>회원 정보 불러오는 중...</h3>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div>
          <h2>회원 상세 정보</h2>
          <p>아이디: {id}</p>
          <p>이름: {name}</p>
          <p>주소: {addr}</p>
          {isOwner && (
            <>
              <button onClick={onEdit}>수정</button>
              <button onClick={onDelete}>삭제</button>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default OneCom;
