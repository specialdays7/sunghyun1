import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getOne, update } from "../service/member";
import ModifyCom from "../components/ModifyCom";

function ModifyCon() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const result = getOne(id);
      if (!result) throw new Error("회원 정보 없음");
      setUser(result);
      setEditUser({ name: result.name, addr: result.addr });
    } catch (e) {
      setError(e.toString());
    }
  }, [id]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = update({ ...user, ...editUser });
      if (result === 1) {
        navigate(`/one/${id}`);
      }
    } catch (err) {
      setError("수정 실패");
    } finally {
      setLoading(false);
    }
  };

  if (!editUser) return <h3>로딩 중...</h3>;

  return (
    <ModifyCom
      id={user.id} name={editUser.name} addr={editUser.addr} onChange={onChange} 
      onSubmit={onSubmit} loading={loading} error={error}
    />
  );
}

export default ModifyCon;
