import { Link } from "react-router-dom";
import NoImage from "../assets/image/noimgaejpg.jpg"

const HorizontalCards = ({data}) => {

  return (
    <div>
        <div className="flex overflow-x-scroll flex-row text-white">
        {
            data.map((d, i)=>(
                <Link to={`/${d.media_type}/details/${d.id}`} key={i} className="bg-zinc-700 min-w-[200px] h-[40vh] m-3 shadow-lg rounded-lg">
                    <img className="w-full h-[45%] rounded-lg" src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path || NoImage}`} alt="No Image" />
                    <div className="p-2">
                    <h1 className="font-semibold">{d.original_title || d.title || d.original_name}</h1>
                    <p className="text-sm text-zinc-300">{d.overview && d.overview.slice(0, 100)}...</p>
                </div>
        </Link>
            ))
        }
        </div>
    </div>
  )
}

export default HorizontalCards