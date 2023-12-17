import HeroImage from "../../../assets/Image.png";

import Max from "../../layout/Contaniner";
import Writer from "../Writer";
function Hero() {
  return (
    <div>
      <Max>
        <div className="relative mb-20 ">
          <img src={HeroImage} alt="" className="w-full " />
          {/* cont box  */}
          <div className="w-max absolute left-7 bottom-[-50px] bg-white rounded-xl shadow-lg p-10  ">
            <p className="bg-blue-600  w-max rounded  text-zinc-100  text-xs p-1 ">
              Technology
            </p>
            <p className="max-w-md font-bold text-3xl my-5 text-gray-900">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <Writer />
          </div>
        </div>
      </Max>
    </div>
  );
}

export default Hero;
