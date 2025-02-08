import { Image_Base_Url } from "../utils/Constants";

const HorizontalCards = ({data}) => {

    console.log(data);
    
    const {backdrop_path, poster_path, original_title, overview, title, original_name, media_type, first_air_date} = data

  return (
    <div>
        <div className="flex overflow-x-scroll flex-row">
        {
            data.map((d)=>(
                <div key={d.id} className="bg-zinc-700 min-w-[200px] m-3 shadow-lg rounded-lg">
                    <img className="w-full" src={Image_Base_Url + d.backdrop_path || d.poster_path} alt="" />
                    <div className="p-2">
                    <h1 className="font-semibold">{d.original_title || d.title || d.original_name}</h1>
                    <p className="text-sm text-zinc-300">{d.overview && d.overview.slice(0, 100)}...</p>
                </div>
        </div>
            ))
        }
        </div>
    </div>
  )
}

export default HorizontalCards