import Header from "./Header";
import MainPhoto from '../assets/images/travel_together.jpg';
import MiniCard from "./MiniCard";

function LandingPage(){

    return(
        <div className="h-screen">
            <Header/>
            <div className="grid md:grid-cols-2 gap-4 mt-2 md:mt-6 md:ml-10 md:mr-10 ml-3 mr-3">
                <div className="p-5">
                    <h3 className="font-bold text-xl mb-10">Create memories with families and friends. leave the planning and calculations to us.</h3>
                    <p>Create itineraries, search for routes, hotels and Airbnb, store expenses, create and dedicate tasks for everyone on the trip.</p>
                    <button className="bg-[#FCED6B] p-2 font-bold rounded-xl mt-10 z-10">Start Planning</button>
                    <div className="mt-5 md:mt-10">
                        <p className="font-bold text-xl">What We Offer</p>
                        <MiniCard title="Add Expenses" description="Screenshot your receipts  and add expenses to your expense list. Everyone can edit it to add the expenses they pay. You don’t have to worry about having expenses being all over the place."/>
                        <MiniCard title="Create Tasks For Everyone" description="Dedicate tasks for everyone on the trip in advance. This way you don’t lose track of who is doing what."/>
                        <MiniCard title="Create Itinerary" description="Some are planners, some are spontaneous travellers. Planning out your trip and creating the itinerary keeps everyone happy. Do all the planning here."/>
                        <MiniCard title="Find Hotels and Airbnb" description="Look for hotels and airbnb with everyone. Discuss and choose your accomodation here. Book on their sites later."/>
                    </div>
                </div>
                <img src={MainPhoto} alt='friends travelling together' className="object-cover"/>
                
            </div>

        
        </div>
    )
}

export default LandingPage