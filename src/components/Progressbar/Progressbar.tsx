import React from "react";

const ProgressBar = () => {
  const progress = 40; 

  return (
    <div className="relative pt-1 w-[90%] mx-auto ">
      <div className="flex mb-2 items-center justify-between"></div>
      <div className="flex mb-2 items-center justify-between">
        <div className="flex-1 relative">
          <div className="flex items-center justify-between">
            <div className={`w-full bg-white rounded-full h-2`}>
              <div
                className={`rounded-full bg-orange-950 h-2`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
