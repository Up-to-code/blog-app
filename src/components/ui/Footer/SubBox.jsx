import Title from "../Card/Title"
import Input from "../Input"
import MS from "../../../assets/Vector.png"
import Button from "../Button"
function SubBox() {
  return (
    <div className="bg-white  rounded-md max-w-xs w-full min-h-[200px] flex flex-col justify-center  items-center p-5">
      <Title className={"my-0"}>
        Weekly Newsletter
      </Title>
      <p className="mb-5 text-zinc-500">
        Get blog articles and offers via email
      </p>
      <Input >
        <img src={MS} alt="" className="w-6 opacity-75"/>
      </Input>
      <Button/>
    </div>
  )
}

export default SubBox