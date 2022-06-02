import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
        <div className="logo basicStyle">
        Task Manager
        </div>
        <ul className="links">
            <li><a href="/" className='basicStyle'>Home</a></li>
            <li><a href="/contact" className='basicStyle'>Contact</a></li>
            <li><a href="/logout" className='basicStyle'>Logout</a></li>
        </ul>
    </div>
  )
}

export default Navbar