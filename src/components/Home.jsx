import { useEffect, useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Topnav from "./Topnav"
import axios from "../utils/axios"
import HorizontalCards from "./HorizontalCards"
import Dropdown from "./partials/Dropdown"
import Loading from "./partials/Loading"

const Home = () => {

  const [wallpaper, setWallpaper] = useState([]);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState('all');

  const getHeaderWallpaper =async ()=>{
    try {
      const {data} = await axios.get(`/trending/${category}/day`);

      const randomWalls = data.results[(Math.random() * data.results.length).toFixed()]
      setWallpaper(randomWalls)
    } catch (error) {
      console.log("ERROR :", error);
      
    }
  }

  const getTrending =async ()=>{
    try {
      const {data} = await axios.get(`/trending/${category}/day`);
      setTrending(data.results)
    } catch (error) {
      console.log("ERROR :", error);
    }
  }
  

  useEffect(()=>{
    getTrending();
    getHeaderWallpaper();
  }, [category]);
  return wallpaper && trending ? (
    <div>
        <div className="h-[100vh] text-white flex">
        <div className="border-r-2 border-zinc-400 w-[20%] h-[100%]">
          <Sidebar/>
        </div>
        <div className="w-full h-full overflow-auto">
            <Topnav/>
            <Header data={wallpaper}/>
            <div className="flex justify-between p-2">
            <h1 className="text-3xl font-bold p-2">Trending</h1>
              <Dropdown title={"Filter"} options={["tv", "movie" , "all"]} func={(e)=>setCategory(e.target.value)}/>
            </div>
            <HorizontalCards data={trending}/>
        </div>
      </div>
    </div>
  ) : <Loading/>
}

export default Home