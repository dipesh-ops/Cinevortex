import { Link, useNavigate } from "react-router-dom"
import notFound from "../../assets/image/404.gif"

const NotFound = () => {

    const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
        <Link onClick={()=> navigate(-1)} className="absolute top-30 right-50"><i className="text-3xl text-white ri-close-large-line"></i></Link>
        <img className="w-[40%]" src={notFound} alt="no image" />
    </div>
  )
}

export default NotFound