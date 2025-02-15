import { useEffect, useState } from "react";
import loader from "../assets/image/loader1.gif";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Topnav from "./Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";

const TvShows = () => {

    const navigate = useNavigate();

    const [category, setCategory] = useState('airing_today');
    const [shows, setshows] = useState([]);
    const [hasMore, sethasMore] = useState(true);
  
    const [page, setpage] = useState(1);
  
      const getshows =async ()=>{
        try {
          const {data} = await axios.get(`/tv/${category}?page=${page}`);
  
          if (data.results.length > 0) {
              //   setTrending(data.results)
              setshows((prevState)=>[...prevState, ...data.results]);
              setpage(page + 1)
            
          }else{
            sethasMore(false)
          }
          
        } catch (error) {
          console.log("ERROR :", error);
        }
      }
  
      const refreshHandler = () =>{
        if (shows.length === 0) {
            getshows();
        }else{
            setpage(1);
            setshows([]);
            getshows();
        }
      }
  
      useEffect(()=>{
        refreshHandler();
      }, [category])
  return shows.length > 0 ? (
    <div>
      <div className="text-white p-4 flex justify-between">
        <div className="flex text-zinc-300 w-[40vh]">
        <i onClick={()=> navigate(-1)} className="text-2xl hover:text-[#6160C4] ri-arrow-left-line"></i>
        <h1 className="text-2xl font-semibold">shows <small>({category})</small></h1>
        </div>

        <div className="w-[70%]">
            <Topnav/>
        </div>

        <div className="flex gap-4">
            <Dropdown title="category" options={["top_rated", "popular", "on_the_air", "airing_today"]} func={(e)=> setCategory(e.target.value)}/>
        </div>

        </div>

        <div className="text-white">
        <InfiniteScroll 
            dataLength={shows.length}
            next={getshows}
            hasMore={hasMore}
            loader={<h4><img className="w-screen h-[100%]" src={loader} alt="" /></h4>}
        >
            <Cards data={shows} title="tv"/>
        </InfiniteScroll>
    </div>
    </div>
  ) : <div><img src={loader} alt="" /></div>
}

export default TvShows