'use client';
import { ReactNode } from "react";
import Image from "next/image";
import './component.css';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { CgList, CgProfile } from "react-icons/cg";
import { GoVerified } from "react-icons/go";
import { FiBookmark, FiSettings } from "react-icons/fi";
import { GrGroup } from "react-icons/gr";
import { BiMoney, BiHelpCircle, BiLogOut } from 'react-icons/bi';
import { VscGraph } from 'react-icons/vsc'
import { BsArrowUpRightSquare } from 'react-icons/bs'
import { BsDisplay } from 'react-icons/bs';
import { MdDataSaverOn } from 'react-icons/md'
import Link from "next/link";

const Sidebar: React.FC = () => {

    const NAVIGATION_ITEM: { title: String; icon: ReactNode }[] = [
        {
            title: 'Profile',
            icon: <CgProfile />
        },
        {
            title: 'Verified',
            icon: <GoVerified />
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
            title: 'Monetization',
            icon: <BiMoney />
        }
    ];



    return (
        <Sheet>
            <SheetTrigger>
                <Image width={100} height={100} className="w-10 h-10 rounded-full" src={'/images/download.jpg'} alt="image is not loaded" />
            </SheetTrigger>
            <SheetContent className="h-auto overflow-y-auto bg-white p-[14px]" side={'left'}>
                <div className="flex w-full h-12 justify-between items-center">
                    <Image width={80} height={80} className="w-10 h-10 rounded-full" src={'/images/download.jpg'} alt="image is not loaded" />
                    <div className="absolute right-3 top-3 border-2 w-8 h-8 rounded-full flex justify-center items-center pb-1">
                        <button className="text-3xl font-[300]" type="button">+</button>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold font-sans">Hamza Ansari</h1>
                    <p className="text-sm">@hamzaansaree15</p>
                </div>
                <div className="w-2/3 h-8 flex justify-between items-center text-sm my-2">
                    <p><span className="font-bold">3</span> Following</p>
                    <p><span className="font-bold">0</span> Followers</p>
                </div>
                <div>
                    {NAVIGATION_ITEM.map((item, index) => {
                        return (
                            <Link href='/' className="w-auto h-12 flex gap-6 items-center my-2">
                                <p className="text-2xl">{item.icon}</p>
                                <p className="text-xl font-sans font-bold">{item.title}</p>
                            </Link>
                        )
                    })}
                </div>
                <Accordion type="single" collapsible>
                    <AccordionItem className="font-sans" value="item-1">
                        <AccordionTrigger className="font-bold">Creator Studio</AccordionTrigger>
                        <AccordionContent>
                            <Link href='/' className="w-auto h-6 flex items-center gap-4 text-base">
                                <p><VscGraph /></p>
                                <p>Analytics</p>
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="font-bold">Professional Tools</AccordionTrigger>
                        <AccordionContent>
                            <Link href='/' className="w-auto h-6 flex items-center gap-4 text-base">
                                <p><BsArrowUpRightSquare /></p>
                                <p>Twiiter Ads</p>
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className="font-bold">Settings and Support</AccordionTrigger>
                        <AccordionContent>
                            <Link href='/' className="w-auto h-6 flex items-center gap-4 text-base my-4">
                                <p><FiSettings /></p>
                                <p>Settings and privacy</p>
                            </Link>
                            <Link href='/' className="w-auto h-6 flex items-center gap-4 text-base my-4">
                                <p><BiHelpCircle /></p>
                                <p>Help Centre</p>
                            </Link>
                            <Link href='/' className="w-auto h-6 flex items-center gap-4 text-base my-4">
                                <p><MdDataSaverOn /></p>
                                <p>Data saver</p>
                            </Link>
                            <Link href='/' className="w-auto h-6 flex items-center gap-4 text-base my-4">
                                <p><BsDisplay /></p>
                                <p>Display</p>
                            </Link>
                            <Link href='/' className="w-auto h-6 flex items-center gap-4 text-base my-4">
                                <p><BiLogOut /></p>
                                <p>Log out</p>
                            </Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </SheetContent>
        </Sheet>
    )
}

export default Sidebar