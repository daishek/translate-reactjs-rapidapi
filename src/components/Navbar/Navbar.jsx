import Logo from '../../assets/Translate.png'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='navbar container'>
        <div className="navbar__logo">
            <img src={Logo} alt="Translate" />
        </div>
    </nav>
  )
}

export default Navbar