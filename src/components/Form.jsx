import { useState} from "react"
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate } from "react-router-dom";


function Form({route,method}){
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const[loading,setLoading]=useState(false);
    const navigate = useNavigate();
    const[errMsg,setErrMsg]=useState('');


    const name= method === 'login'? 'Login':'Register';
    const handleSubmit= async(e)=>{
        setLoading(true);
        e.preventDefault();

        try{
            const res= await api.post(route, {username,password});

            if(method=== 'login'){
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate('/')
            }else{
                navigate('/login')
            }

            

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
        <div className="bg-orange-100 p-5 w-1/2 flex justify-center">
            {errMsg &&<p>{errMsg}</p>}
            <form onSubmit={handleSubmit}>
                <h1 className="text-xl mb-10">{name}</h1>
                <input className="block mb-5 p-2 rounded-md" type="text" value={username} name='username' onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
                <input className="block mb-5 p-2 rounded-md" type="password" value={password} name='password' onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                {loading}
                <button className="block bg-black text-white p-3 rounded-md mt-5 px-5" type="submit">{name}</button>
            </form>
        </div>

    );
}

export default Form