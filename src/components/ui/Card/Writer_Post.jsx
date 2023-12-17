import UserImage from "../../../assets/user.png";

function Writer_Post() {
  return (
    <div className="flex  gap-3 items-center mt-2 text-sm">
    <img src={UserImage} alt="user" />
    <p className="text-zinc-500 font-light m ">Jason Francisco</p>
    <p className="text-zinc-500 font-light ">August 20, 2022</p>
  </div>
  )
}

export default Writer_Post