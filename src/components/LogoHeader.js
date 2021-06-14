import './LogoHeader.css';
import logo from '../images/Logo.png';

function Logo(){
    return(
        <div className='top'>
            <div className='logo'>
                <img className='main-logo' src={logo} alt="" width={64} height={64}></img>
            </div>

        </div>
    );
}

export default Logo;