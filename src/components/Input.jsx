

function Input({placeholder, id, label, type, onChange, htmlFor}){
    return(
        <div className="mt-2">
            <label htmlFor={htmlFor} className="mt-2 mb-1 text-gray-500">{label}</label>
            <input id={id} type={type} placeholder={placeholder} onChange={onChange} className="border border-gray-400 p-2 rounded-md placeholder:text-sm w-full"/>
        
        </div>
    )
}

export default Input