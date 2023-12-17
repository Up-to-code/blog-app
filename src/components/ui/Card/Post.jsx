import PostCvaer from "../../../assets/Rectangle 38.png";
import HashTitle from "../HashTitle";
import Title from "./Title";
import Writer_Post from "./Writer_Post";
function Post() {
  return (
    <div className="p-5 flex flex-col gap-4 rounded-md border ">
      <div className="fex justify-center items-center overflow-hidden mb-5">
        <img src={PostCvaer} alt="" className="w-full max-h-60  rounded-md " />
      </div>
      <div>
        <HashTitle>Technology</HashTitle>
        <Title>
        The Impact of Technology on the Workplace: How Technology is Changing
        </Title>
        <Writer_Post/>
      </div>
    </div>
  );
}

export default Post;
