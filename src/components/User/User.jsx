import { Link } from 'react-router-dom';
import './User.css';

const User = ({user}) => {
    const {id, name, email, phone} = user;
    return (
        <div className='userStyle'>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}> Show Details</Link>
            <Link to={`/user/${id}`}>
                <button className='btn-style'>Click Me</button>
            </Link>
        </div>
    );
};

export default User;