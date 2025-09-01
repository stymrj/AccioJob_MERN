export function Card({name, age, email, isActive, joinDate}){
    return (
        <div c>
            <h2>{name}</h2>
            <p>Age : {age}</p>
            <p>Email : {email}</p>
            <p>JoinDate : {joinDate}</p>
            <p>Status : {isActive}</p>
        </div>
    )
}
