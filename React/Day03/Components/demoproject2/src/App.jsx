function App(){
  return (
    <>
    {/* {Navbar()}
    <Navbar></Navbar> */}
    {/* <Navbar naam="satyam" age="24"/> */}
    <Navbar />
    </>
  )
}


function Navbar(){
  return (
    <div style={{display:"flex",justifyContent:"space-between" , height : "80px" ,
    padding :"0px 20px 0px 20px", alignItems:"center", backgroundColor:"black", color:"white"}}>
      <h1>LOGO</h1>

      <div style={{display:"flex", gap:"10px"}}>
        <a style={{textDecoration:"none", color:"white"}} href="">Home</a>
        <a style={{textDecoration:"none", color:"white"}} href="">About</a>
        <a style={{textDecoration:"none", color:"white"}} href="">Profile</a>
      </div>
    </div>
  )
}

// function Navbar(){
//   return (
//     <div>
//       <h1>Hi...</h1>
//       <div>
//         <a href="#">Home</a><a href="#">About</a><a href="#">Profile</a>
//       </div>
//     </div>
//   )
// }

// function Navbar(props){
//   console.log(props)
//   return (
//     <div>
//       <h1>{props.naam}, {props.age}</h1>
//       <div>
//         <a href="#">Home</a><a href="#">About</a><a href="#">Profile</a>
//       </div>
//     </div>
//   )
// }

// function Navbar(props){
//   const{naam,age}=props
//   console.log(props)
//   return (
//     <div>
//       <h1>{naam},{age}</h1>
//       <div>
//         <a href="#">Home</a><a href="#">About</a><a href="#">Profile</a>
//       </div>
//     </div>
//   )
// }

// function Navbar({naam,age}){
//   // console.log(props)
//   return (
//     <div>
//       <h1>{naam},{age}</h1>
//       <div>
//         <a href="#">Home</a><a href="#">About</a><a href="#">Profile</a>
//       </div>
//     </div>
//   )
// }


export default App