import Header from "./Header"
import { useState } from "react"
import DestinationCard from "./DestinationCard"
import Search from '../assets/images/search.png'

function Destination(){
    const[name,setName]=useState('')

    return(
        <div className="h-screen">
            <Header/>
            <div className="md:mr-10 md:ml-10 z-0 md:mt-5">
                <p className="text-2xl text-center mb-3 font-roboto">Search for destination</p>
                <div className="w-1/2 p-4 rounded-xl z-5 border-2 mx-auto flex">
                    <input type="text" autoFocus placeholder="Destination Name" onChange={(e)=>setName(e.target.value)} className="w-full focus:outline-none"/>
                    <img src={Search} className="w-8 h-8"/>
                </div>
                <div className="grid md:grid-cols-3 md:gap-2 md:mt-8 font-montserrat">
                    <DestinationCard/>
                    <DestinationCard/>
                    <DestinationCard/>

                </div>

            </div>
        
        </div>
    )
}

export default Destination