import ReactPlayer from "react-player"
import { useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Trailer = () => {

    const navigate = useNavigate();
    const {pathname} = useLocation();

    const category = pathname.includes("movie") ? "movie" : "tv"

    const ytVideo = useSelector((store)=> store[category].info.video);

    console.log(category);
    
  return (
    <div className="z-[20] bg-black absolute w-screen h-screen top-0 left-0 flex items-center justify-center">
        <Link onClick={()=> navigate(-1)} className="absolute right-80 top-20 text-2xl"><i className="ri-close-large-line"></i></Link>
        {ytVideo ? <ReactPlayer width={860} height={515} url={`https://www.youtube.com/watch?v=${ytVideo.key}`}/> : <NotFound/>}
    </div>
  )
}

export default Trailer