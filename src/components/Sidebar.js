import { Link } from 'react-router-dom';
import './Sidebar.css'; 

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <ul>
                <li><Link to="/search">Add to your list!</Link></li>
                <li><Link to="/Review">Review something on your list!</Link></li>
                <li><Link to="/suggestions">Discover something New!</Link></li>
            </ul>
        </div>
    );
}


