import Logo from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate=useNavigate();

    function Logout(){
        localStorage.clear()
        navigate('/login')
      }

    return(
        <div className="bg-black flex inline justify-between p-4">
            <img src={Logo} alt='Logo'/>
            <ul className='text-white mr-10'>
                <li onClick={Logout}><button>Log Out</button></li>
            </ul>
        
        </div>
    )
}

export default Header