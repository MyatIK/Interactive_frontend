

function MiniCard(props){
    return(
        <div className="mt-3 md:mt-5 rounded-md bg-[#FAF9F6] z-5">
            <div className="p-3 md:p-4">
                <p className="mt-1 font-bold">{props.title}</p>
                <p className="mt-3">{props.description}</p>
                                
            </div>

        </div>
        
        
    )
}

export default MiniCard