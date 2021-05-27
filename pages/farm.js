import { useRouter } from "next/router";
import { useState } from "react";

import Avatar from "../components/Avatar";
import { MenuIcon } from "@heroicons/react/outline";
import { MenuAlt1Icon } from '@heroicons/react/outline';


function Farm() {
    const router = useRouter();

    const [showSideBar, setshowSideBar] = useState(false);

    function toggle(){
        setshowSideBar(!showSideBar);
        // showSideBar = !showSideBar;
    }

    return (
        <div>
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-100">
                {/* TODO: Navigation */}
                <nav className="flex w-full p-5 justify-between">
                {/* Left */}
                <div className="flex space-x-4 items-center">
                    {/* Menu Button */}
                    <button onClick={toggle} >
                    {showSideBar ? <MenuAlt1Icon className="h-10 w-10 p-2 transition duration-150 transform hover:scale-110 cursor-pointer"/> : <MenuIcon className="h-10 w-10 p-2 transition duration-150 transform hover:scale-110 cursor-pointer"/>}
                    </button>

                    {/* Pancake Logo */}
                    <a href="/" className="flex items-center space-x-2">
                        <Avatar url="https://image.flaticon.com/icons/png/512/3009/3009983.png" />
                        <p className="hidden sm:inline-flex link text-lg">PancakeSwap</p>
                    </a>
                </div>

                {/* Right */}
                <div className="flex space-x-4 items-center">
                    {/* Icon */}
                    <button className="link bg-green-300 py-1 px-2 text-white font-bold rounded-full hover:bg-green-200">Address</button>
                    {/* Avatar */}
                    <Avatar url="https://cdn4.iconfinder.com/data/icons/happy-easter-5/64/easter_rabbit_bunny_holiday_animal_happy_cute-512.png" />
                </div>
                </nav>
            </header>
        </div>
    )
}

export default Farm
