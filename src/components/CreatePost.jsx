import { useState } from "react"
import api from '../api';

function CreatePost(props){
    const[newPost,setNewPost]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        api
        .post("/commentapi/posts/", {newPost})
        .then((res)=>{
            if (res.status === 201) alert("Note Created!");
            else alert("Failed to create note.");
            props.getNote();
        })
        .catch((err)=>alert(err));
        setNewPost("");

    }

    return(
        <div className="bg-white rounded-xl p-5 w-full flex inline gap-2 mb-5 mt-5">
            <input className="text-slate-500 border border-slate-700 rounded-xl p-3 w-full" type="text" value={newPost} onChange={(e)=>{setNewPost(e.target.value)}} placeholder="Create your post here"/>
            <button onClick={handleSubmit} className='bg-indigo-700 text-white p-3 px-8 rounded-md hover:bg-indigo-300'>Create</button>
        
        </div>
    )
}

export default CreatePost