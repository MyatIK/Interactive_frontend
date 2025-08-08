import Logo from '../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate=useNavigate();

    function Logout(){
        localStorage.clear()
        navigate('/login')
      }

    return(
        <div className="bg-white border-b-2 border-black-100 z-10 h-16">
            <div className='flex inline justify-between pt-3 ml-10 mr-10'> 
                <h1 className='p-2 italic'>TravelPlans</h1>
                <ul className='p-2 flex space-x-10'>
                    <li >Home</li>
                    <li>Search</li>
                </ul>
                <ul className='flex space-x-5'>
                    <li><button className='bg-black text-white p-1 pl-3 pr-3 rounded-xl'>Sign Up</button></li>
                    <li><button className='bg-[#FCED6B] p-1 pl-3 pr-3 rounded-xl'>Log In</button></li>
                    <li onClick={Logout}><button>Log Out</button></li>
                </ul>
        

            </div>
            
        </div>
    )
}

export default Header