import person1 from '../assets/images/avatars/image-amyrobson.png';
import Reply from '../assets/images/icon-reply.svg';
import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';
import { useState } from 'react';
import Delete from '../assets/images/icon-delete.svg';
import Edit from '../assets/images/icon-edit.svg';
import api from '../api';

function Posts({Name,ProfileImg,Date,Description,id,onDelete}){
    const[reply,setReply]=useState("");
    const[open,setOpen]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault()
    }



    return(
        <>
            <div className="bg-white rounded-xl p-5 w-full flex inline gap-2">
                <div className='bg-indigo-300 p-1 rounded-md h-full py-2'>
                    <img src={plus} alt='plus sign' className='h-4 w-4'/>
                    <p className='text-indigo-700'>12</p>
                    <img src={minus} alt='minus sign' className='h-1 w-4'/>
                </div>
                <div>
                    <div className='flex justify-between'>
                        <div className='flex inline items-center'>
                            <img src={ProfileImg} alt='profile photo' className='h-10 w-10'/>
                            <h4 className='text-indigo-900 ml-5'>{Name}</h4>
                            <h4 className='ml-5'>{Date}</h4>
                        </div>
                        <button className='text-indigo-700 flex items-center' onClick={()=>setOpen(!open)}><img src={Reply} alt='Reply'/>Reply</button>
                        <div className='flex inline'>
                            <button className='flex inline items-center' onClick={()=>onDelete(id)}><img src={Delete} alt='Delete'/>Delete</button>
                            <button className='flex inline items-center'><img src={Edit} alt='Edit'/>Edit</button>
                        </div>

                    </div>
                
                
                    <p className='text-slate-500'>{Description}</p>

                </div>

        
            </div>
            {open &&
            <div className="bg-white rounded-xl p-5 w-full mt-2 flex inline gap-2 items-center">
                <img src={ProfileImg} alt='profile' className='h-10 w-10'/>
                <input className='border border-slate-500 p-3 rounded-xl w-full' value={reply} onChange={(e)=>{setReply(e.target.value)}} placeholder='Enter comment here'/>
                <button className='bg-indigo-700 text-white p-3 px-8 rounded-md hover:bg-indigo-300' onClick={handleSubmit}>Reply</button>


            </div>
            }
        </>
        
    )
}

export default Posts