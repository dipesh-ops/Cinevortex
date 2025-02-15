import loader from "../../assets/image/loader1.gif"
const Loading = () => {
  return (
    <div className="bg-white w-[100%] h-[100%] flex justify-center items-center">
        <img src={loader} alt="" />
    </div>
  )
}

export default Loading