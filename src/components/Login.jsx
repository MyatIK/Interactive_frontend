
import { useState} from "react"
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import { Link } from "react-router-dom";

function Login(){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const navigate = useNavigate();
    const[errMsg,setErrMsg]=useState('');


    
    const handleSubmit= async(e)=>{
        e.preventDefault();

        try{
            const res= await api.post('/commentapi/token/', {username,password});

          
            localStorage.setItem(ACCESS_TOKEN, res.data.access);
            localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
            navigate('/')            

        }
        catch(error){
            if (!error?.response) {
                setErrMsg("No server Response");
            } else if(error.response.status === 401){
                setErrMsg("Wrong username or password")
            } else{
                setErrMsg("No data")
            }
        }finally{
            setLoading(false)
        }


    };

    return(
        <div className="h-screen flex justify-center mt-10">
            {errMsg &&<p role="alert">{errMsg}</p>}
            <div className="p-5 w-full md:w-1/3">
                <form onSubmit={handleSubmit}>
                    <h1 className='text-gray-500 mb-5 text-center font-bold text-xl'>Login</h1>
                    <Input htmlFor='username' label='Username' id='username' type="text" value={username} name='username' onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                    <Input htmlFor='password' label='Password' id='password' type="password" value={password} name='password' onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                
                    {loading}
                    <button className="block bg-black text-white p-3 rounded-md mt-5 px-5" type="submit" data-testid="loginButton">Login</button>
                </form>

                <div className="mt-3 flex">
                    <h4>Don't have an account? Sign up here.</h4>
                    <Link to='/register'><h4 className="underline underline-offset-2 text-indigo-500 ml-2">Sign Up</h4></Link>
                </div>
            
            </div>
            
        </div>
    )
}

export default Login