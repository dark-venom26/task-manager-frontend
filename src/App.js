import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  const login = true;
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={login ? <Home /> : <Navigate to="/register"/>} />
          <Route exact path="/login" element={login ? <Navigate to="/" /> : <Login />} />
          <Route exact path="/register" element={login ? <Navigate to="/" /> : <Register />} />
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
