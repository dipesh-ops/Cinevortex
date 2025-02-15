import { Link } from "react-router-dom";
import { Image_Base_Url } from "../../utils/Constants";

const Cards = ({data, title}) => {  

  return (
    <div className="bg-[#1F1E24] flex flex-wrap">
        {
            data.map((c, i)=> <Link to={`/${c.media_type || title}/details/${c.id}`} className="w-[17%] relative m-4" key={i}>
                <div>
                <div className="min-w-[100%] p-2 shadow-[4px_7px_17px_3px_rgba(0,0,0.5)]">
                    <img src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path || c.profile_path}`} alt="no image" />
                    <p className="font-semibold">{c.name || c.original_name || c.original_title}</p>
                </div>
                </div>

                {c.vote_average && <div className="absolute bottom-30 -right-5 w-[50px] h-[50px] text-white flex justify-center items-center rounded-full bg-amber-300">
                  {(c.vote_average * 10).toFixed()} <sup>%</sup>
                </div>}
            </Link>)
        }
    </div>
  )
}

export default Cards