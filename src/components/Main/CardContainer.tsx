import React from "react";
import Card from "./Card";
import Media from "react-media";
import CarasoulContainer from "./CarasoulContainer";

const CardContainer = () => {
  const checkData = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col items-center justify-center  mb-8">
      <div className="text-orange-950 text-2xl font-extrabold font-['Rounded Mgen+ 1pp'] leading-[1.5] tracking-wider ">
        作成中の助成金一覧
      </div>
      <div className="mt-4 ">
        <Media query={{ minWidth: "890px" }}>
          {(matches) =>
            matches ? (
              <div className="flex flex-wrap ml-[10%] gap-x-6 gap-y-4 p-4 items-center">
                {checkData.map((element) => (
                  <Card key={element} />
                ))}
              </div>
            ) : (
              <div className="mx-auto">
                <CarasoulContainer />
              </div>
            )
          }
        </Media>
      </div>

      <div className="flex justify-center mt-4">
        <button className="bg-sky-700 h-[30px] w-[150px] rounded-2xl font-['Rounded Mgen+ 1pp'] font-extrabold text-white">
          もっと見る
        </button>
      </div>
    </div>
  );
};

export default CardContainer;
