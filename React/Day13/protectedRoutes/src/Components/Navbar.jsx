import {Link} from 'react-router-dom'

const Navbar = ()=>{
    return(
        <div className='flex justify-between p-2 bg-black text-white mt-0'>
        <p>CareerGrid</p>
        <div className='flex gap-4'>
            <Link to={'/home'}>Home</Link>
            <Link to={'/profile'}>Profile</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>
        </div>
        </div>
    )
}

export default Navbar