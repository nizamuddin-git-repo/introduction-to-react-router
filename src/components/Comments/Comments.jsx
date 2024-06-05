import { useLoaderData } from "react-router-dom";
import Common from "../Common/Common";

const Comments = () => {
    const comments = useLoaderData();
    return (
        <div>
            <h2>Comments : {comments.length}</h2>
            <div className="commentsStyle">
                {
                    comments.map(common => <Common key={common.id} common={common}></Common>)
                }
            </div>
        </div>
    );
};

export default Comments;