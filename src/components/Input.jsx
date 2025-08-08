

function Input({placeholder, id, label, type, onChange, value}){
    return(
        <div className="mt-2">
            <div className="mt-2 mb-1 text-gray-500">{label}</div>
            <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} className="border border-gray-400 p-2 rounded-md placeholder:text-sm w-full"/>
        
        </div>
    )
}

export default Input