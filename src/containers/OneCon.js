import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getOne, remove } from "../service/member";
import OneCom from "../components/OneCom";
import { AuthContext } from "../store/AuthContext";

const OneCon = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const result = getOne(id);
      if (!result) throw new Error("회원 정보가 없습니다.");
      setUser(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  const isOwner = auth?.user?.id === id;

  const onDelete = () => {
    const result = remove(id);
    if (result === 1) {
      logout();
      navigate("/");
    }
  };

  const onEdit = () => {
    navigate(`/modify/${id}`);
  };

  if (loading) return <h3>회원 정보 불러오는 중...</h3>;
  if (error) return <h3>{error}</h3>;
  if (!user) return null;

  return (
    <OneCom id={user.id} name={user.name} addr={user.addr} loading={false} 
    error={null} isOwner={isOwner} onDelete={onDelete} onEdit={onEdit}
    />
  );
};

export default OneCon;
