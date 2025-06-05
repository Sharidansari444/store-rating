import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav >
      <Link  to="/">Login</Link> | <Link to="/register">Register</Link> | <Link to="/dashboard">Dashboard</Link> | <Link to="/stores">Stores</Link>
    </nav>
  );
}