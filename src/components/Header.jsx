import { Link } from "react-router-dom"

const Header = ({data}) => {
    const {backdrop_path, poster_path, original_title, overview, title, original_name, media_type, first_air_date, id} = data
  return (
    <div className="w-full h-[50vh] relative">
        <div>
            <div className="absolute w-2/4 p-4 top-20 bg-linear-to-l from-transperent to-blue-500">
            <h1 className="text-2xl md:text-5xl font-bold mb-1">{original_title || title || original_name}</h1>
            <p className="hidden md:hidden lg:block">{overview && overview.slice(0, 200)}</p>
            <i className="text-yellow-200 ri-megaphone-fill mr-2"> {first_air_date || "No information"}</i>
            <i className="text-yellow-200 ri-movie-2-fill"> {media_type}</i>
            <div className="mt-3">
            <Link to={`/${media_type}/details/${id}/trailer`} className="bg-[#0400ff] w-[10rem] p-2 shadow-lg rounded-lg mt-2"><i className="ri-play-line"></i> Watch Trailer</Link>
            </div>
            </div>
            <img className="w-full h-[50vh]" src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path}`} alt="" />
        </div>
    </div>
  )
}

export default Header