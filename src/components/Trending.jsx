import { useNavigate } from "react-router-dom"
import Topnav from "./Topnav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import { useEffect, useState } from "react";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import loader from "../assets/image/loader1.gif"
import Loading from "./templates/Loading";

const Trending = () => {

  document.title = `Cinevortex | Trending`

    const navigate = useNavigate();

    const [category, setCategory] = useState('all');
    const [duration, setduration] = useState("day");
    const [hasMore, sethasMore] = useState(true);
    const [trending, setTrending] = useState([]);

    const [page, setpage] = useState(1);

      const getTrending =async ()=>{
        try {
          const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);

          if (data.results.length > 0) {
              //   setTrending(data.results)
              setTrending((prevState)=>[...prevState, ...data.results]);
              setpage(page + 1)
            
          }else{
            sethasMore(false)
          }
          
        } catch (error) {
          console.log("ERROR :", error);
        }
      }

      const refreshHandler = () =>{
        if (trending.length === 0) {
            getTrending();
        }else{
            setpage(1);
            setTrending([]);
            getTrending();
        }
      }

      useEffect(()=>{
        refreshHandler();
      }, [category, duration])

  return trending.length > 0 ? (
    <div>
    <div className="text-white p-4 flex flex-col md:flex-row lg:flex-row items-center md:justify-between">
        <div className="flex text-zinc-300 w-[40vh] p-2">
        <i onClick={()=> navigate(-1)} className="text-2xl hover:text-[#6160C4] ri-arrow-left-line"></i>
        <h1 className="text-2xl font-semibold">Trending <small>({category})</small></h1>
        </div>

        <div className="md:w-[70%]">
            <Topnav/>
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row gap-4">
            <Dropdown title="category" options={["all", "tv", "movie"]} func={(e)=> setCategory(e.target.value)}/>
            <Dropdown title="duration" options={["day", "week"]} func={(e)=> setduration(e.target.value)}/>
        </div>
    </div>

    <div className="text-white">
        <InfiniteScroll 
            dataLength={trending.length}
            next={getTrending}
            hasMore={hasMore}
            loader={<Loading/>}
        >
            <Cards data={trending} title={"Movies"}/>
        </InfiniteScroll>
    </div>
    </div>
  ) : <Loading/>
}

export default Trending