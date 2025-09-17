const Login = ()=>{
    return(
         <div className="flex flex-row">
            <div className="flex flex-col justify-center items-center h-[99vh] w-[50vw]">
                <div className="h-[60vh] rounded-3xl gap-2 p-4 flex flex-col justify-center items-center border ">
                <p className="text-2xl mb-10">Welcome to <span className="font-bold text-red-600">CareerGrid</span>!</p>

                <input className="p-2 m-2 border rounded-lg w-[30vw]" type="text" placeholder="Enter your email" />
                <input className="p-2 m-2 border rounded-lg w-[30vw]" type="text" placeholder="Enter your password" />
               
                <div className="flex gap-4 ">
                <button className="text-green-600 font-bold">Sign Up</button>
                <button className="bg-blue-600 text-white font-bold border rounded-full m-2 p-2">Log In</button>
                </div>
                </div>

            </div>
            <div className="bg-cyan-100 h-[99vh] w-[50vw]">
                <img src="./src/assests/image1.jpg" alt="" />
            </div>
        </div>
    )
}

export default Login