import Logo from '../assets/logo';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="header">
            <div className="container">
                <nav>
                    <img src={Logo} alt="New York Times" />

                    <div className="nav-links">
                        <ul className="nav-links__list">
                            <li className="link">
                                <Link to='/'> Home </Link>
                            </li>
                            <li className="link">
                                <Link to='/signin'> Sign-in </Link>
                            </li>
                            <li className="link">
                                <Link to='/signup'> Signup </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;