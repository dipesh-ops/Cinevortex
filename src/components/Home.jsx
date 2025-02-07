import { useEffect, useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Topnav from "./Topnav"
import axios from "../utils/axios"

const Home = () => {

  const [wallpaper, setWallpaper] = useState([]);

  const getHeaderWallpaper =async ()=>{
    try {
      const {data} = await axios.get(`/trending/all/day`);

      const randomWalls = data.results[(Math.random() * data.results.length).toFixed()]
      setWallpaper(randomWalls)
    } catch (error) {
      console.log("ERROR :", error);
      
    }
  }

  console.log(wallpaper);
  

  useEffect(()=>{
    getHeaderWallpaper();
  }, [])
  return wallpaper ? (
    <div>
        <div className="h-[100vh] text-white flex">
        <div className="border-r-2 border-zinc-400 w-[20%] h-[100%]">
          <Sidebar/>
        </div>
        <div className="w-[80%] h-full">
            <Topnav/>
            <Header data={wallpaper}/>
        </div>
      </div>
    </div>
  ) : "Loading"
}

export default Home