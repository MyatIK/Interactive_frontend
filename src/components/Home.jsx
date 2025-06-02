import Header from './Header';
import Footer from './Footer';
import Posts from './Posts';
import CreatePost from './CreatePost';
import person from '../assets/images/avatars/image-juliusomo.png';
import { useState,useEffect } from 'react';
import api from '../api';



function Home(){
    const[posts,setPosts]=useState([]);

    useEffect(()=>{
        getNote();
    },[]);

    const getNote = () => {
        api
        .get('/commentapi/posts/')
        .then((res)=>res.data)
        .then((data)=>{
            setPosts(data);
            console.log(data);
        })
        .catch((err)=> alert(err));


    };

    const deletePost=(id)=>{
        api.
        delete(`/commentapi/posts/delete/${id}/`)
        .then((res)=>{
            if(res.status === 204) alert("Post Deleted!");
            else alert("Failed to delete post!");
            getNote();
        })
        .catch((error)=>alert(error));
    };
    


    return (
        <div className='h-screen bg-indigo-50'>
            <Header/>
            <div className=' md:w-1/2'>
                <CreatePost getNote={getNote}/>
                {posts.map((post)=>(
                    <Posts Name={post.author} ProfileImg={person} Date={post.posted_since} id={post.id} Description={post.newPost} onDelete={deletePost} key={post.id}/>

                ))}
                
            </div>
            <Footer/>
        
            
        
        </div>
    )
}

export default Home 