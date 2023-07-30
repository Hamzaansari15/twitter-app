'use client';

import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { BsTwitter, BsBell } from "react-icons/bs";
import { BiSearch, BiHomeCircle, BiDotsHorizontalRounded } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { CgList, CgProfile, CgMoreO } from 'react-icons/cg'
import { FiBookmark } from 'react-icons/fi'
import { GrGroup } from 'react-icons/gr'
import { GoVerified } from 'react-icons/go'
import Link from "next/link";
import profileAvatar from '../../public/images/download.jpg'
import { MdVerified } from 'react-icons/md';
import Sidebar from "@/components/ui/my_component/sidebar";

const Home: React.FC = () => {

  const [prevScrollY, setPrevScrollY] = useState<number>(1);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NAVIGATION_ITEM: { title: String; icon: ReactNode }[] = [
    {
      title: 'Twitter',
      icon: <BsTwitter />
    },
    {
      title: "Home",
      icon: <BiHomeCircle />,
    },
    {
      title: 'Explore',
      icon: <BiSearch />
    },
    {
      title: 'Notification',
      icon: <BsBell />
    },
    {
      title: 'Messages',
      icon: <HiOutlineMail />
    },
    {
      title: 'Lists',
      icon: <CgList />
    },
    {
      title: 'Bookmarks',
      icon: <FiBookmark />
    },
    {
      title: 'Communities',
      icon: <GrGroup />
    },
    {
      title: 'Verified',
      icon: <GoVerified />
    },
    {
      title: 'Profile',
      icon: <CgProfile />
    },
    {
      title: 'More',
      icon: <CgMoreO />
    },
  ];

  const mapArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (
    <main className="w-screen h-screen grid grid-cols-1 mb-96">
      <section className="w-full h-full">
        <div className={`w-full ${prevScrollY > 20 ? '-top-14' : 'top-0'} z-20 bg-gray-50 before:backdrop-blur-sm h-28 transition-all duration-300 fixed border-b-2 border-gray-200`}>
          <div className={`flex py-3 px-3 w-full h-1/2`}>
            <Sidebar />
            <div className="m-auto relative right-7 text-4xl text-sky-500"><BsTwitter /></div>
          </div>
          <div className="flex justify-around items-end h-1/2 pb-2 pl-1">
            <Link href={'/'} className="font-primary font-bold">For you</Link>
            <Link href={'/'} className="font-primary font-bold">Following</Link>
          </div>
        </div>
        <div className="fixed z-20 w-full h-14 bottom-0 border-2 bg-white border-gray-100 flex items-center justify-around text-3xl">
          <Link href={'/'}><BiHomeCircle /></Link>
          <Link href={'/'}><BiSearch /></Link>
          <Link href={'/'}><BsBell /></Link>
          <Link href={'/'}><HiOutlineMail /></Link>
        </div>
        <div className="w-14 h-14 rounded-full bg-sky-500 fixed bottom-[72px] right-5 z-20 flex items-center justify-center">
          <svg fill="white" viewBox="0 0 24 24" aria-hidden="true" className="w-6">
            <g><path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path></g>
          </svg>
        </div>
        <div className="mt-28 mb-20">
          {mapArray.map(item => {
            return (
              <div key={item} className="mt-2">
                <div className="w-full h-full flex">

                  <Image className="w-10 h-10 rounded-full m-3" src={profileAvatar} alt="error" />
                  <div className="flex mt-1 h-8 items-center gap-[5px]">
                    <p className="font-bold font-primary">PTI</p>
                    <p className="text-sky-500"><MdVerified /></p>
                    <p className="font-primary text-gray-800 opacity-95">@PTIofficial</p>
                    <p className="relative -top-[5px]">.</p>
                    <p className="font-primary text-gray-800 opacity-95">1h</p>
                    <p className="absolute right-2 text-xl text-gray-800 opacity-95"><BiDotsHorizontalRounded /></p>
                  </div>
                </div>
                <div className="w-full h-full  top-7 pl-16 pr-4 ">
                  <p className="font-primary leading-[22px] text-gray-700 opacity-95">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, velit eos ratione sunt ut, iure sint voluptatibus, doloribus omnis in consectetur expedita quos sapiente! Doloribus cum quo debitis soluta excepturi.
                  </p>
                  <Image className="w-full h-auto rounded-2xl mt-2" src={profileAvatar} alt="error" />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  );
}


export default Home;