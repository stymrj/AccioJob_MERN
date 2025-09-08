import { Link } from "react-router-dom"
export function Navbar(){
    return(
        <div className="flex justify-between mt-0 sticky bg-black p-4 text-white">
            <h1>LOGO</h1>
            <div className="flex gap-4">
                <Link to="/counter">Counter</Link>
                <Link to="/service">Services</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/about">About Us</Link>
                <Link to="/mode">Mode</Link>
            </div>
        </div>
    )
}