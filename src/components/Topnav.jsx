import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import axios from "../utils/axios";
import noimage from "../assets/image/noimgaejpg.jpg";

const Topnav = () => {

  const [query, setQuery] = useState('');
  const [searches, setSearches] = useState([]);

  useEffect(()=>{
    GetSearches();
  },[query])

  const GetSearches = async() =>{
    try {
      const {data} = await axios.get(`/search/multi?query=${query}`);
      
      setSearches(data.results)
    } catch (error) {
      console.log("Error", error);      
    }
  }
  
  return (
    <div className="relative ml-[30%]">
      <div className="w-full">
      <i className="ri-search-line text-2xl mr-5"></i>
      <input value={query} onChange={(e)=> setQuery(e.target.value)} className="w-[30%] mr-5 outline-none border-none text-zinc-400 p-3" type="text" placeholder="search here"/>
      {
        query.length > 0 && 
        <i onClick={()=> setQuery("")} className="ri-close-large-line text-2xl"></i>
      }

      { query ? 
        <div className="w-[60%] h-[50vh] top-[90%] mt-2 bg-zinc-400 absolute overflow-x-scroll z-1">
        {
          query &&
          searches.map((search, i)=>(
            <Link to={`/${search.media_type}/details/${search.id}`} key={i} className="flex justify-start border-b border-2-zinc-400 p-10 w-[100%]">
              <img className="w-[10vw] mr-1 h-[10vh] object-cover" src={ search.backdrop_path || search.profile_path ?`https://image.tmdb.org/t/p/original/${search.backdrop_path || search.profile_path}` : noimage} alt="" />
              <span>{search.name || search.original_title || search.title}</span>
          </Link> 
          ))
        }
      </div> : ""
      }
      </div>
    </div>
  )
}

export default Topnav