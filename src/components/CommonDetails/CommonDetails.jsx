import { useLoaderData } from "react-router-dom";

const CommonDetails = () => {
    const comm = useLoaderData();
    const {id, name, email, body, postId} = comm;
    return (
        <div>
            <h3>Common Details : {id}</h3>
            <h3>Title: {name}</h3>
            <h4>Post Id : {postId}</h4>
            <h3>Email : {email}</h3>
            <p><small>{body}</small></p>
        </div>
    );
};

export default CommonDetails;