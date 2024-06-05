import { Link } from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;


    return (
        <div className="postStyle">
            <h4>Post of Id : {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button className="btn-style">Show Detail</button></Link>
        </div>
    );
};

export default Post;