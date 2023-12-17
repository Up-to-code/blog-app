import UserImage from "../../assets/user.png";
function Writer() {
  return (
    <div className="flex  gap-2 items-center">
    <img src={UserImage} alt="user" />
    <p className="text-zinc-500 font-light mr-4 ">Jason Francisco</p>
    <p className="text-zinc-500 font-light ">August 20, 2022</p>
  </div>
  )
}

export default Writer



