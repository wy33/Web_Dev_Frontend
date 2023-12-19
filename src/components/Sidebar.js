import { Link } from 'react-router-dom';
import './Sidebar.css'; 

export default function Sidebar() {
    //Todo: make it relative link paths, ie. if in Anime tab, link to Anime/search, etc
    return (
        <div className="Sidebar">
            <ul>
                <li><Link to="/search">Add to your list!</Link></li>
                <li><Link to="/suggestions">Discover something New!</Link></li>
            </ul>
        </div>
    );
}


