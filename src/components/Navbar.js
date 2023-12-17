import { Link } from 'react-router-dom';
import './Navbar.css'; 

export default function Navbar() {
    return (
      <nav className="navbar">
        <div className="nav">
          <ul>
            <li><Link to="/anime">Anime</Link></li>
            <li><Link to="/manga">Manga</Link></li>
          </ul>
        </div>
      </nav>
    );
  }


