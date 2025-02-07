import Header from "./Header"
import Sidebar from "./Sidebar"
import Topnav from "./Topnav"

const Home = () => {
  return (
    <div>
        <div className="h-[100vh] text-white flex">
        <div className="border-r-2 border-zinc-400 w-[20%] h-[100%]">
          <Sidebar/>
        </div>
        <div className="w-[80%] h-full">
            <Topnav/>
            <Header/>
        </div>
      </div>
    </div>
  )
}

export default Home