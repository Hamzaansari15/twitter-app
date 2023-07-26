import Image from "next/image";
import { ReactNode } from "react";
import { BsTwitter, BsBell } from "react-icons/bs";
import { BiSearch, BiHomeCircle } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { CgList, CgProfile, CgMoreO } from 'react-icons/cg'
import { FiBookmark } from 'react-icons/fi'
import { GrGroup } from 'react-icons/gr'
import { GoVerified } from 'react-icons/go'
import Link from "next/link";

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

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] grid grid-cols-3">
      <section className="w-full h-full flex flex-row-reverse">
        <div className="w-1/2 h-full bg-white flex justify-end border-r-2">
          <div className="w-4/5">
            {
              NAVIGATION_ITEM.map((item, index) => {
                return (
                  <Link className="w-auto h-auto group" href={'/'} key={index}>
                    <span className={`${item.title === 'Twitter' ? 'w-12 px-3 ml-2' : 'justify-start'} w-fit h-fit py-2 my-2 px-4 flex items-center gap-5 rounded-full group-hover:bg-gray-200 duration-200`}>
                      <span className="text-2xl">{item.icon}</span>
                      <p className="text-[22px] font-sans">{item.title === 'Twitter' ? '' : item.title}</p>
                    </span>
                  </Link>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className="w-full h-full"></section>
      <section className="w-full h-full"></section>
    </main>
  );
}
