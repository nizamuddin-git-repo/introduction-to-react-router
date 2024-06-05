import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <nav>
                <span>My Wabside</span>
                <Link to="/">Home</Link>
                <Link to="users"> Users</Link>
                <Link to="/posts">Posts</Link>
                <Link to="comments">Comments</Link>
                <Link to="/about">About</Link>
                <Link to="contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;