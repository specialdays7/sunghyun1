import { Link } from "react-router-dom";

function ListCom ( {data, loading, error} ) {

    return (
        <>
        {loading ?<h3>Loading...</h3> :
        error ? <h3>{ error }</h3> :
            data && data.map( d=>
                <div key={d.id} >
                    <Link to={`/one/${d.id}`}>
                        <span>{d.id}</span><br />
                        <span>{d.name}</span><br />
                        <span>{d.addr}</span><br />
                    </Link>
                </div>
            )}
        </>
    )
}
export default ListCom;