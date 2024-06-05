import { Link } from "react-router-dom";

const Common = ({common}) => {
    const {postId, name, email, body, id} = common;
    return (
        <div className="commonStyle">
            <h3>PostId : {postId}</h3>
            <h3>Name : {name}</h3>
            <h4>Email : {email}</h4>
            <p><small>{body}</small></p>
            <Link to={`/comments/${id}`}>Comments Detail</Link>
            <Link><button className="btn-style">Click Detail</button></Link>
        </div>
    );
};

export default Common;