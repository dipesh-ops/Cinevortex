import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Topnav from "./Topnav";
import Dropdown from "./partials/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./partials/Cards";
import loader from "../assets/image/loader1.gif";
import Loading from "./partials/Loading";


const Movies = () => {
    const navigate = useNavigate();

    const [category, setCategory] = useState('now_playing');
    const [movie, setmovie] = useState([]);
    const [hasMore, sethasMore] = useState(true);
  
    const [page, setpage] = useState(1);
  
      const getmovie =async ()=>{
        try {
          const {data} = await axios.get(`/movie/${category}?page=${page}`);
  
          if (data.results.length > 0) {
              //   setTrending(data.results)
              setmovie((prevState)=>[...prevState, ...data.results]);
              setpage(page + 1)
            
          }else{
            sethasMore(false)
          }
        } catch (error) {
          console.log("ERROR :", error);
        }
      }
  
      const refreshHandler = () =>{
        if (movie.length === 0) {
            getmovie();
        }else{
            setpage(1);
            setmovie([]);
            getmovie();
        }
      }
  
      useEffect(()=>{
        refreshHandler();
      }, [category])
  return movie.length > 0 ? (
    <div>
      <div className="text-white p-4 flex justify-between">
        <div className="flex text-zinc-300 w-[40vh]">
        <i onClick={()=> navigate(-1)} className="text-2xl hover:text-[#6160C4] ri-arrow-left-line"></i>
        <h1 className="text-2xl font-semibold">Movie <small>({category})</small></h1>
        </div>

        <div className="w-[70%]">
            <Topnav/>
        </div>

        <div className="flex gap-4">
            <Dropdown title="category" options={["upcoming", "top_rated", "popular", "now_playing"]} func={(e)=> setCategory(e.target.value)}/>
        </div>

        </div>

        <div className="text-white">
        <InfiniteScroll 
            dataLength={movie.length}
            next={getmovie}
            hasMore={hasMore}
            loader={<h4><img className="w-screen h-[100%]" src={loader} alt="" /></h4>}
        >
            <Cards data={movie} title="movie"/>
        </InfiniteScroll>
    </div>
    </div>
  ) : <Loading/>
}

export default Movies