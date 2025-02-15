import axios from "../utils/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./Topnav";
import Dropdown from "./templates/Dropdown";
import InfiniteScroll from "react-infinite-scroll-component";
import Cards from "./templates/Cards";
import loader from "../assets/image/loader1.gif";
import Loading from "./templates/Loading";

const Popular = () => {

  document.title = `Cinevortex | Popular`

  const navigate = useNavigate();

  const [category, setCategory] = useState('movie');
  const [popular, setPopular] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const [page, setpage] = useState(1);

    const getPopular =async ()=>{
      try {
        const {data} = await axios.get(`/${category}/popular?page=${page}`);

        if (data.results.length > 0) {
            //   setTrending(data.results)
            setPopular((prevState)=>[...prevState, ...data.results]);
            setpage(page + 1)
          
        }else{
          sethasMore(false)
        }
        
      } catch (error) {
        console.log("ERROR :", error);
      }
    }

    const refreshHandler = () =>{
      if (popular.length === 0) {
          getPopular();
      }else{
          setpage(1);
          setPopular([]);
          getPopular();
      }
    }

    useEffect(()=>{
      refreshHandler();
    }, [category])
  return popular.length > 0 ? (
    <div>
      <div className="text-white p-4 flex justify-between">
        <div className="flex text-zinc-300 w-[40vh]">
        <i onClick={()=> navigate(-1)} className="text-2xl hover:text-[#6160C4] ri-arrow-left-line"></i>
        <h1 className="text-2xl font-semibold">Popular <small>({category})</small></h1>
        </div>

        <div className="w-[70%]">
            <Topnav/>
        </div>

        <div className="flex gap-4">
            <Dropdown title="category" options={["tv", "movie"]} func={(e)=> setCategory(e.target.value)}/>
        </div>

        </div>

        <div className="text-white">
        <InfiniteScroll 
            dataLength={popular.length}
            next={getPopular}
            hasMore={hasMore}
            loader={<h4><img className="w-screen h-[100%]" src={loader} alt="" /></h4>}
        >
            <Cards data={popular} title={category}/>
        </InfiniteScroll>
    </div>
    </div>
  ) : <Loading/>
}

export default Popular