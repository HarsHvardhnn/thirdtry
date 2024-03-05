import React from "react";
import ProgressBar from "../Progressbar/Progressbar";

const Card = (props: any) => {
  const { data } = props;

  return (
    <div className="h-[300px] w-[244px] border rounded-xl bg-orange-200">
      <div className="flex justify-between p-2">
        <span className="inline-flex items-center justify-center text-orange-950 bg-white rounded-[5px] px-2 text-[9px] font-extrabold font-['Rounded Mgen+ 1pp] leading-[17px]">
          正社員化コース
        </span>
        <span className="inline-flex items-center justify-center text-right text-orange-950 text-[11px] px-2 font-extrabold font-['Rounded Mgen+ 1pp] leading-[21px]">
          2023年1月10日
          {data}
        </span>
      </div>
      <div className="text-orange-950 text-base font-extrabold font-['Rounded Mgen+ 1pp] leading-[25px] text-center">
        キャリアアップ助成金
      </div>
      <div className="w-[194px] h-[75px] bg-white rounded-md mx-auto my-2"></div>
      <ProgressBar />
      <div className="text-orange-950 text-[11px] font-extrabold font-['Rounded Mgen+ 1pp] leading-[25px] text-center">
        資料作成中
      </div>
      <div className="h-[1px] w-full bg-white border border-white"></div>
      <div className="flex justify-center mt-4 ml-3">
        <div className="w-[56px] h-[29px] text-orange-950 text-xs font-extrabold text-center font-['Rounded Mgen+ 1pp] leading-[25px] bg-white p-1">
          状況
        </div>
        <div className="text-orange-950 text-xs font-extrabold font-['Rounded Mgen+ 1pp] leading-[25px] p-1">
          資料作成中
        </div>
      </div>
    </div>
  );
};

export default Card;
