export function Users({ name, age, email, phone, city, img }) {
    return ( 
        <div className="border-2 p-4 m-4 rounded-2xl">
            <img className="h-30 w-30 rounded-full mx-auto" src={img} alt="" />
            <div className="flex flex-col items-center">
                <h1 className="text-xl font-bold">{name}</h1>
                <p>Age- {age}</p>
                <p>{city}</p>
                <p>{phone}</p>
                <p className="text-blue-400">{email}</p>
            </div>
        </div>
    )
}