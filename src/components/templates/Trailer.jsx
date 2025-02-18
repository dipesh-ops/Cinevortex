import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Trailer = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    const category = pathname.includes("movie") ? "movie" : "tv"

    const ytVideo = useSelector((store)=> store[category].info.video);
    
  return (
    <div className="z-[20] bg-black absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
        <Link onClick={()=> navigate(-1)} className="absolute right-5 top-85 md:right-20 md:top-20 text-2xl"><i className="ri-close-large-line"></i></Link>
        {ytVideo ? <div className="md:h-[80%] md:w-[80%]"><ReactPlayer width="100%" height="100%" url={`https://www.youtube.com/watch?v=${ytVideo.key}`} /></div> : <NotFound/>}
    </div>
  )
}

export default Trailer