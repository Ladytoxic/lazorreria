import './Navbar.css';
import logo from '../../assets/Logo_de_la_zorreria.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <span className='nav-title'>
                <img className='logo' src={logo} alt="logo" />
            </span>
            <ul className='list-items'>
                <li className='item'>
                    <Link className='link-router' to={'/'}>Home</Link>
                </li>
                <li className='item'>
                    <Link className='link-router' to={'/events'}>Events</Link>
                </li>
                <li className='item'>
                    <Link className='link-router' to={'/e'}>ErrorPage</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
