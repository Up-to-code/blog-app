import Post from "../ui/Card/Post";
import Max from "./Contaniner";
function Grid_posts() {
  return (
    <Max>
      <p className="font-bold text-lg ">
        Latest Post
      </p>
      <div className="grid justify-between gap-5 grid-cols-3">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </Max>
  );
}

export default Grid_posts;
