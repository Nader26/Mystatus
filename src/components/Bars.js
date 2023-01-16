import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function Bars() {
  return (
    <div>
      <div className="w-[80%] m-auto flex flex-col justify-between gap-14">
        <div>
          <div className="text-center text-xl mb-2 tracking-wide">
            Physicality
          </div>
          <ProgressBar completed={25} animateOnRender={true} />
        </div>
        <div>
          <div className="text-center text-xl mb-2 tracking-wide">
            Mentality
          </div>
          <ProgressBar completed={40} animateOnRender={true} />
        </div>
        <div>
          <div className="text-center text-xl mb-2 tracking-wide">SMV</div>
          <ProgressBar completed={30} animateOnRender={true} />
        </div>
      </div>
    </div>
  );
}

export default Bars;
