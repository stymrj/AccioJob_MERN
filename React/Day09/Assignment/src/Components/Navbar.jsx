import { Link } from "react-router-dom"

export function Navbar(){
    return (
        <div>
            <div className="flex justify-between bg-black text-white p-2 hover:cursor">
                <h1>LOGO</h1>

                <div className="flex gap-2">
                    <Link to="/input">Input</Link>
                    <Link to="/counter">Counter</Link>
                    <Link to="/hp">hpData</Link>
                </div>
            </div>
        </div>
    )
}