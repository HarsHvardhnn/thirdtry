import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import ClampedSidebar from "./ClampedSidebar";

const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="min-w-[80%] sm:w-[200px] bg-white relative block ml-6 sm:top-4 mr-[50px] mb-18">
      <div className="flex items-center text-xl font-medium cursor-pointer tracking-wide">
        <MdHomeFilled className="mr-2" /> マイページ
      </div>
      <div className="text-xl font-bold cursor-pointer leading-[49px]">
        <img src="/Header/padIcon.png" alt="Icon" className="inline mr-2" />{" "}
        まるなげ助成金一覧
      </div>
      <div className="text-xl font-medium cursor-pointer leading-[49px]">
        <img src="/Header/paperIcon.png" alt="Icon" className="inline mr-2" />{" "}
        自分で助成金一覧
      </div>
      <div className="text-lg font-medium cursor-pointer leading-[49px]">
        <img src="/Header/walletIcon.png" alt="Icon" className="inline mr-2" />{" "}
        お支払い履歴・領収書発行
      </div>
      <div className="text-xl font-medium cursor-pointer leading-[49px]">
        <img src="/Header/questionIcon.png" alt="Icon" className="inline mr-2" />{" "}
        サポート
      </div>
      <div>
        <div className="text-xl font-medium cursor-pointer leading-[49px] tracking-wide flex items-center">
          <img
            src="/Header/personIcon.png"
            alt="Icon"
            className="inline h-4 w-4 mr-3"
          /> 
          <div className="flex justify-between items-center">
            <span className="mr-8">設定</span>
            <button
              className="absolute right-0 cursor-pointer"
              onClick={() => {
                setShow(!show);
              }}
            >
              {show ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </div>
        </div>

        {show && (
          <div>
            <div className="cursor-pointer text-md font-medium leading-[49px] tracking-wide relative left-8">
              法人情報の設定
            </div>
            <div className="cursor-pointer text-md font-medium leading-[49px] tracking-wide relative left-8">
              会員情報の設定
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
