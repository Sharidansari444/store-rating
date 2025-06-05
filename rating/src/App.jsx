import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './pages/Login';
import Register from './pages/Ragister';
import Dashboard from './pages/Dashboard';
import Stores from './pages/Store';
import Navbar from './pages/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stores" element={<Stores />} />
      </Routes>
    </Router>
  );
}

export default App;