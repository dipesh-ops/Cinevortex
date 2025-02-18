import { Link } from "react-router-dom"

const HamburgerMenu = () => {
  return (
    <div className="w-screen bg-[#1F1E24] absolute">
        <nav className="flex flex-col">
          <h1 className="font-bold text-xl p-4">News Feeds</h1>
          <Link to={'/trending'} className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
          <i className="ri-fire-fill"> </i>
            Trending
          </Link>
          
          <Link to={'/popular'} className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
            <i className="ri-bard-fill"> </i>
            Popular
          </Link>
          
          <Link to={'/movie'} className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
          <i className="ri-movie-2-ai-fill"> </i>
            Movies
          </Link>

          <Link to={'/tvshows'} className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
            <i className="ri-tv-fill"> </i>
            TV Shows
          </Link>

          <Link to={'/person'} className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
            <i className="ri-tv-fill"> </i>
            People  
          </Link>

          <hr className="border-b-1 w-[80%] border-b-zinc-300 m-auto"/>

          <h1 className="font-bold text-xl p-4">Website Information</h1>
          
          <Link to={`/about`} className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
          <i className="ri-information-2-fill"> </i>
            About CINEVORTEX  
          </Link>

          <Link to={`/contact`} className="text-zinc-400 text-[18px] p-4 w-[80%] ml-5 hover:bg-[#6160C4] hover:text-white duration-300 rounded-lg">
          <i className="ri-phone-fill"> </i>
            Contact Us  
          </Link>
          
        </nav>
    </div>
  )
}

export default HamburgerMenu