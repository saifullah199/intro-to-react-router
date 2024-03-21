import { Link, useNavigate } from "react-router-dom";

const post = ({post}) => {

    const {id,title}=post;

    const navigate = useNavigate ();
    const postStyle ={
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '20px'
    }
    const handleSelect = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail </Link>
            <Link to={`/post/${id}`}> <button> Show Details </button></Link>
            <button onClick={handleSelect}> Click to see details</button>
        </div>
    );
};

export default post;