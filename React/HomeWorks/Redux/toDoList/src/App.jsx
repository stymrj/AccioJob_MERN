import Buttons from "./Components/Buttons"
import { Display } from "./Components/Display"
import { Navbar } from "./Components/Navbar"
function App() {
  return (
    <div className="flex flex-col bg-cyan-100 gap-9 items-center justify-center h-[100vh] w-[100vw]">
      <Navbar />
      <Display />
      <Buttons />
    </div>
  )
}

export default App
