import { Link } from "react-router-dom"
export function Navbar(){''
    return(
        <div className="bg-black text-white flex justify-between">
            <h3 className="m-2">LOGO</h3>
            <div className="flex gap-2 m-2">
                {/* <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/profile">Profile</a> */}

                <Link to = '/home'>Home</Link>
                <Link to = '/profile'>Profile</Link>
                <Link to = '/about'>About</Link>
            </div>
        </div>
    )
}

