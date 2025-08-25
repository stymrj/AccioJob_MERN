
export function Card({name, img, des, cat, price, }){
    return (
        <div style={{border: "1px solid black", width:"20vw"}}>
            <img style={{height:"250px", width:"90%"}} src={img} alt="" />
            <h1>{name}</h1>
            <p>{des}</p>
            <p>{cat}</p>
            <p>{price}</p>
        </div>
    )
}