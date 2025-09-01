export const Products = ({img, name, category, price, rating, availability})=>{
    return (
        <div className="bg-cyan-200 p-3  ">
            <img src={img} alt="" height={"200px"} width={"200px"}/>
            <h1 className="font-bold">{name}</h1>
            <p>{category} Products</p>
            <p>Price: {price}</p>
            <p>Rating : {rating}</p>
            <p>Stock: {availability}</p>
        </div>
    )
}