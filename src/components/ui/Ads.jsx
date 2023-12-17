import Max from "../layout/Contaniner";

function Ads() {
  return (
    <Max>
      <div className="flex justify-center items-center my-10">
        <div className="max-w-3xl bg-zinc-100 rounded-md w-full py-2 flex flex-col items-center">
          <p className="text-zinc-400 ">Advertisement</p>
          <p className="text-zinc-600 text-lg ">You can place ads</p>
          <p className="text-zinc-400 ">750x100</p>
        </div>
      </div>
    </Max>
  );
}

export default Ads;
