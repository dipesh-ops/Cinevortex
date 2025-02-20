import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson } from '../../store/actions/personAction';
import { Link, useNavigate, useParams } from 'react-router-dom';
import NoImage from "../../assets/image/noimgaejpg.jpg";
import HorizontalCards from "../HorizontalCards";
import Dropdown from "./Dropdown";
import Loading from './Loading';

const PersonDetails = () => {

  document.title = `Cinevortex | Peoples | details`


  const {id} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  
  useEffect(()=>{
    dispatch(asyncloadperson(id))
  }, [])
  
  const info = useSelector((store)=> store.person.info);
  
  return info ? (
    <div className='px-2 md:px-[10vh] bg-[#1F1E24] pb-10'>
      <div className='flex'>
        <nav className='w-full h-[10vh] flex items-center'>
          <h1 onClick={()=> navigate(-1)}><i className="text-zinc-400 text-2xl ri-arrow-left-line"></i></h1>
        </nav>
      </div>
      <div className='flex flex-col items-center md:items-start md:flex-row'>
      <div className='w-[15%] hidden md:block'>
        {/* Left Side */}
          <img src={`https://image.tmdb.org/t/p/original/${info.detailbackdrop_path || info.detail.poster_path || info.detail.profile_path || NoImage}`} alt="" />

          <hr className='text-zinc-400 my-5'/>

          {/* Social Media Links */}
          <div className='gap-2 flex'>
                <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="text-2xl text-zinc-400 ri-earth-fill"></i></a>

                <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="text-2xl text-zinc-400 ri-instagram-line"></i></a>

                <a target='_blank' href={`https://x.com/${info.externalid.twitter_id}`}><i className="text-2xl text-zinc-400 ri-twitter-x-fill"></i></a>

                <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="text-2xl text-zinc-400 ri-facebook-circle-fill"></i></a>
          </div>

          {/* Person Info */}
          <div className='text-zinc-300'>
            <h1 className='font-semibold mt-2 text-xl'>Person Info</h1>

            <div>
              <h1 className='font-semibold mt-2'>Known For</h1>
              <span>{info.detail.known_for_department}</span>
            </div>

            <div>
              <h1 className='font-semibold mt-2'>Gender</h1>
              <span>{info.detail.gender === 2 ? "Male" : "Female"}</span>
            </div>
            
            <div>
              <h1 className='font-semibold mt-2'>Birthday</h1>
              <span>{info.detail.birthday}</span>
            </div>

            <div>
              <h1 className='font-semibold mt-2'>Deathday</h1>
              <span>{info.detail.deathday ? info.detail.deathday : "Still Alive"}</span>
            </div>

            <div>
              <h1 className='font-semibold mt-2'>Place of Birth</h1>
              <span>{info.detail.place_of_birth}</span>
            </div>

            <div>
              <h1 className='font-semibold mt-2'>Also Known as</h1>
              <span>{info.detail.also_known_as && info.detail.also_known_as.map((k)=> k)}</span>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className='w-[85%] px-0 md:px-10 text-zinc-300'>
            <img className='block md:hidden mb-2' src={`https://image.tmdb.org/t/p/original/` + info.detail.profile_path || info.detail.poster_path || info.detail.backdrop_path} alt="" />
            <h1 className='text-4xl font-bold'>{info.detail.name}</h1>

            <div className='w-full'>
              <h1 className='font-bold mt-3 mb-2'>Biography</h1>
              <span>{info.detail.biography}</span>
            </div>

            <div className='block md:hidden mt-3'>
              <h1 className='font-bold mb-2'>Social Media Handles</h1>
            <div className='gap-2 flex'>
                <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="text-2xl text-zinc-400 ri-earth-fill"></i></a>

                <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="text-2xl text-zinc-400 ri-instagram-line"></i></a>

                <a target='_blank' href={`https://x.com/${info.externalid.twitter_id}`}><i className="text-2xl text-zinc-400 ri-twitter-x-fill"></i></a>

                <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="text-2xl text-zinc-400 ri-facebook-circle-fill"></i></a>
          </div>
            </div>

            <div>
              <h1 className='font-bold mt-3 mb-2'>Known For</h1>
              <HorizontalCards data={info.combinedCredits.cast}/>
            </div>

            <div className='mt-2 flex flex-col md:flex-row md:justify-between'>
              <h1 className='text-2xl text-bold m-2'>Acting</h1>
              <Dropdown title="category" options={["tv", "movie"]}  func={(e)=> setcategory(e.target.value)}/>
            </div>

            <div className='w-full mt-5 p-4 h-[40vh] shadow-xl shadow-[rgba(255,255,255,.3)] overflow-x-scroll'>
                {
                  info[category + "credits"].cast.map((c, i)=>(
                    <li className='mb-4 p-2 hover:bg-zinc-800 rounded-lg' key={i}>
                  <Link to={`/${category}/details/${c.id}`}>
                      <span>{c.name || c.title || c.original_name || c.original_title}</span>
                      <span className='block'>{c.character}</span>
                  </Link>
                </li>
                  ))
                }
            </div>
        </div>
      </div>
    </div>
  ) : <Loading/>
}

export default PersonDetails