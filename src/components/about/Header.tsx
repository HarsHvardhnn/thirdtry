import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='min-h-[70px] bg-slate-50 flex flex-col sm:flex-row items-center justify-between px-4'>
      <div className="text-zinc-900 text-3xl font-extrabold font-['Rounded Mgen+ 1pp'] leading-[39px] tracking-wide mb-4 sm:mb-0">LOGO</div>
      <div className="flex flex-col sm:flex-row">
        <div className="text-orange-950 text-sm font-bold font-['Rounded Mgen+ 1pp'] leading-none tracking-tight mb-2 sm:mb-0 sm:ml-4">助成金を探す</div>
        <div className="text-orange-950 text-sm font-bold font-['Rounded Mgen+ 1pp'] leading-none tracking-tight mb-2 sm:mb-0 sm:ml-4">専門家依頼</div>
        <div className="text-orange-950 text-sm font-bold font-['Rounded Mgen+ 1pp'] leading-none tracking-tight mb-2 sm:mb-0 sm:ml-4">コラム</div>
        <div className="text-orange-950 text-sm font-bold font-['Rounded Mgen+ 1pp'] leading-none tracking-tight mb-2 sm:mb-0 sm:ml-4">お問い合わせ</div>
      </div>

      <div className='flex flex-col sm:flex-row'>
        <div className='flex flex-col sm:flex-row'>
          <div className='flex items-center space-x-2 sm:w-[285px]'>
            <input className='h-[31px] w-full sm:w-full pl-4 pr-8 rounded' placeholder='サイト検索<' />
            <IoSearchOutline />
          </div>
          <div className='flex flex-col items-center justify-between mt-2 sm:mt-0 sm:flex-row'>
            <div className="w-[112px] sm:w-[112px] h-[31px] sm:h-[31px] bg-sky-700 flex justify-center items-center rounded-md text-white text-sm sm:text-base font-bold font-['Rounded Mgen+ 1pp'] leading-none tracking-tight">
              マイページ
            </div>
            <div className='h-[31px] w-[31px] bg-sky-700 rounded-full flex justify-center items-center text-white'>
              H
            </div>
            <div className='h-[31px] w-[31px] bg-sky-700 rounded-full flex justify-center items-center text-white'>
              V
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
