import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadtv } from '../../store/actions/tvAction';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

const TvDetails = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation();  

  useEffect(()=>{
    dispatch(asyncloadtv(id))
  }, [])

  const {info} = useSelector((store)=> store.tv);

  return info ? (
    <div className='w-screen h-[150vh] px-20' style={{background: `linear-gradient(rgba(0,0,0,.2), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path})`, backgroundPosition :"center", backgroundSize:"cover"}}>
      {/* Part 1 navigation */}
      <nav className='w-full h-[10vh] flex items-center gap-5 text-zinc-300'>
      <Link onClick={()=> navigate(-1)} className="ri-arrow-left-line text-2xl"></Link>
      <a href={`${info.detail.homepage}`} target='_blank'><i className="ri-external-link-line text-2xl"></i></a>
      <a href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`} target='_blank'><i className="ri-earth-fill text-2xl"></i></a>
      <a target='_blank' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>IMBD</a>
      </nav>
      
      {/* Part 2 */}
      <div className='flex'>
        <div className="shadow-[4px_7px_17px_3px_rgba(0,0,0.5)] w-[20%]">
            <img className='w-full h-full' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path || info.detail.poster_path}`} alt="no image" />
          </div>

          <div className='pl-5 w-[80%]'>
            <div className='text-white mb-2'>
              <h1 className='font-bold text-4xl'>{info.detail.name || info.detail.original_name}
                  <small className='font-bold text-sm'>({info.detail.first_air_date.split("-")[0]})</small>
              </h1>

            </div>

            <div className='flex text-white items-center gap-2'>
            {info.detail.vote_average && <div className="w-[50px] h-[50px] text-white flex justify-center items-center rounded-full bg-amber-300">
                    {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
                </div>} 
                <h1 className='font-bold text-xl'>user score</h1>
                <h1>{info.detail.release_date}</h1>
                <h1 className='flex'>{info.detail.genres.map((g)=> g.name).join(", ")}</h1>
                <h1>{info.detail.runtime}Min</h1>
            </div>

              <div className='text-zinc-300'>
                  <h1 className='font-semibold text-2xl italic'>{info.detail.tagline}</h1>
              </div>

              <div className='text-white'>
                <h1 className='font-semibold text-2xl mb-4'>Overview</h1>
                <p className=''>{info.detail.overview}</p>
              </div>

              <div className='text-white mt-4'>
                <h1 className='font-bold text-2xl'>Translated</h1>
                <p>{info.translations.join(", ")}</p>
              </div>

              <div className='mt-3'>
                <Link to={`${pathname}/trailer`} className='text-white bg-[#6160C4] hover:bg-[#6867ac] delay-100 px-5 py-2 rounded-lg'><i className="ri-play-line"></i> Play Trailer</Link>
              </div>
          </div>
      </div>

      {/* Part 3 Available on*/}

      <div className='text-white my-5'>
          {info.watchprovider && <div className='flex gap-5'>
              <h1>Available on Platforms</h1>
              <div className='w-10 flex gap-3'>
                {info.watchprovider && info.watchprovider.flatrate && info.watchprovider.flatrate.map((f, i)=> (<img className='rounded' key={i} title={f.provider_name} src={`https://image.tmdb.org/t/p/original/${f.logo_path}`} alt=''/>))}
              </div>
          </div>}

          <div>
            {info.watchprovider && <div className='flex gap-5 mt-5'>
                <h1>Available on Rent</h1>
                <div className='w-10 flex gap-3'>
                  {info.watchprovider &&  info.watchprovider.rent &&info.watchprovider.rent.map((f, i)=> (<img title={f.provider_name} className='rounded' key={i} src={`https://image.tmdb.org/t/p/original/${f.logo_path}`} alt=''/>))}
                </div>
            </div>}
          </div>

          <div>
            {info.watchprovider && <div className='flex gap-5 mt-5'>
                <h1>Available to Buy</h1>
                <div className='w-10 flex gap-3'>
                  {info.watchprovider && info.watchprovider.buy && info.watchprovider.buy.map((f, i)=> (<img title={f.provider_name} className='rounded' key={i} src={`https://image.tmdb.org/t/p/original/${f.logo_path}`} alt=''/>))}
                </div>
            </div>}
          </div>
          <Outlet/>
      </div>

      <hr className='text-zinc-200 my-2 mb-5'/>

      {/* Recommendations */}

      <div>
        <div className="flex overflow-x-scroll flex-row">
                {
                    info.recommendations.map((d)=>(
                        <Link to={`/${d.media_type}/details/${d.id}`} key={d.id} className="bg-zinc-700 min-w-[200px] m-3 shadow-lg rounded-lg">
                            <img className="w-full rounded-lg h-[150px]" src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} alt="" />
                            <div className="p-2">
                            <h1 className="font-semibold text-white">{d.original_title || d.title || d.original_name}</h1>
                            <p className="text-sm text-zinc-300">{d.overview && d.overview.slice(0, 100)}...</p>
                        </div>
                </Link>
                    ))
                }
                </div>
      </div>
    </div>
  ) : <div>Loading ...</div>
}

export default TvDetails