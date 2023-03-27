import './Navbar.scss'
import logo from './logo.png'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../context/LoginContext'
import { useContext } from 'react'

export const Navbar = () => {
    const {user, logout } = useContext(LoginContext)

    return (
        <header className="header">
            <Link to="/" className="brand">
                <img src= {logo} alt="logo" className='header__logo'/>                    
                <h2 className="brand__name">UpSoon</h2>
            </Link>
            <nav className="navbar">               
                <Link to="/productos/perfumeria" className="nav__link">Perfumería</Link>
                <Link to="/productos/panaderia" className="nav__link">Panadería</Link>
                <Link to="/productos/verduleria" className="nav__link">Verdulería</Link>  
                <Link to="/productos/carniceria" className="nav__link">Carnicería</Link> 
                <Link to="/productos/limpieza" className="nav__link">Limpieza</Link> 
            </nav>            
            <CartWidget />   
            <div>
                <h6></h6>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>                                          
        </header>
    )
}