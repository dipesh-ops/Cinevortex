import { useEffect, useState } from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Topnav from "./Topnav"
import axios from "../utils/axios"
import HorizontalCards from "./HorizontalCards"
import Dropdown from "./templates/Dropdown"
import Loading from "./templates/Loading"
import HamburgerMenu from "./templates/HamburgerMenu"
import { useDispatch, useSelector } from "react-redux"
import { toggleClick } from "../store/reducers/toggleSlice"

const Home = () => {

  const dispatch = useDispatch();

  const toggleBtn =()=>{
    dispatch(toggleClick())
  }

  const getMenu = useSelector((store) => store.menu.toggleMenu);

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
        <div className="border-r-2 border-zinc-400 w-[20%] h-[100%] hidden md:block">
          <Sidebar/>
        </div>
        <div className="w-full h-full overflow-auto">

          <div className="flex">
            <div className="block md:hidden z-10">
            <h1 onClick={toggleBtn} className="text-4xl"><i className="ri-menu-line"></i></h1>
            { getMenu && <HamburgerMenu/>}
            </div>
            <Topnav/>
          </div>
            <Header data={wallpaper}/>
            <div className="flex flex-col md:flex-row justify-between p-2">
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