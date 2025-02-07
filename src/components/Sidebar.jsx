import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="text-white">
        <h1 className="w-100 p-5">
          <i className="text-[#6160C4] ri-tv-fill text-2xl mr-2"> </i>
          <span className="font-semibold">CINEVORTEX</span>
        </h1>

        <nav className="flex flex-col">
          <h1 className="font-bold text-xl p-4">News Feeds</h1>
          <Link className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
          <i className="ri-fire-fill"> </i>
            Trending
          </Link>
          
          <Link className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
            <i className="ri-bard-fill"> </i>
            Popular
          </Link>
          
          <Link className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
          <i className="ri-movie-2-ai-fill"> </i>
            Movies
          </Link>

          <Link className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
            <i className="ri-tv-fill"> </i>
            TV Shows
          </Link>

          <Link className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
            <i className="ri-tv-fill"> </i>
            People  
          </Link>

          <hr className="border-b-1 w-[80%] border-b-zinc-300 m-auto"/>

          <h1 className="font-bold text-xl p-4">Website Information</h1>
          
          <Link className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
          <i className="ri-information-2-fill"> </i>
            About CINEVORTEX  
          </Link>

          <Link className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
          <i className="ri-phone-fill"> </i>
            Contact Us  
          </Link>
          
        </nav>
    </div>
  )
}

export default Sidebar