import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topnav from './Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './templates/Cards';
import loader from "../assets/image/loader1.gif";
import Loading from './templates/Loading';

const People = () => {

  document.title = `Cinevortex | Peoples`

    const navigate = useNavigate();

    const [category, setCategory] = useState('popular');
    const [person, setperson] = useState([]);
    const [hasMore, sethasMore] = useState(true);
  
    const [page, setpage] = useState(1);
  
      const getperson =async ()=>{
        try {
          const {data} = await axios.get(`/person/${category}?page=${page}`);
  
          if (data.results.length > 0) {
              //   setTrending(data.results)
              setperson((prevState)=>[...prevState, ...data.results]);
              setpage(page + 1)
            
          }else{
            sethasMore(false)
          }
          
        } catch (error) {
          console.log("ERROR :", error);
        }
      }
  
      const refreshHandler = () =>{
        if (person.length === 0) {
            getperson();
        }else{
            setpage(1);
            setperson([]);
            getperson();
        }
      }
  
      useEffect(()=>{
        refreshHandler();
      }, [category])
  return person.length > 0 ? (
    <div>
      
      <div className="text-white p-4 flex flex-col md:flex-row md:justify-between">
        <div className="flex text-zinc-300 w-[30vh]">
        <i onClick={()=> navigate(-1)} className="text-2xl hover:text-[#6160C4] ri-arrow-left-line"></i>
        <h1 className="text-2xl font-semibold">person <small>({category})</small></h1>
        </div>

        <div className="w-[100%]">
            <Topnav/>
        </div>

        </div>

        <div className="text-white">
        <InfiniteScroll 
            dataLength={person.length}
            next={getperson}
            hasMore={hasMore}
            loader={<h4><img className="w-screen h-[100%]" src={loader} alt="" /></h4>}
        >
            <Cards data={person} title="person"/>
        </InfiniteScroll>
    </div>
    </div>
  ) : <Loading/>
}

export default People