import Head from 'next/head';
import Image from "next/image";
import Avatar from "../components/Avatar";
import { MenuIcon } from "@heroicons/react/outline";
import { MenuAlt1Icon } from '@heroicons/react/outline';
import { ArrowRightIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import Icon from '@material-ui/core/Icon';

import { useState } from "react";

import { SideBarData } from "../components/SideBar";
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FormatTextdirectionLToRSharp } from '@material-ui/icons';

import * as AiIcons from 'react-icons/io';


export default function Home() {
  const [showSideBar, setshowSideBar] = useState(false);

  function toggle(){
    setshowSideBar(!showSideBar);
    // showSideBar = !showSideBar;
  }

  return (
    <div>
      <Head>
        <title>Pancake</title>
        <meta name="description" content="PICPLE Web like pancake swap" />
        <link rel="icon" href="/favicon.ico"/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"/>
      </Head>

      {/* Header */}
      <header>
        {/* TODO: Navigation */}
        <nav className="flex w-full p-5 justify-between">
          {/* Left */}
          <div className="flex space-x-4 items-center">
            {/* Menu Button */}
            <button onClick={toggle} >
              {showSideBar ? <MenuAlt1Icon className="h-10 w-10 p-2 transition duration-150 transform hover:scale-110 cursor-pointer"/> : <MenuIcon className="h-10 w-10 p-2 transition duration-150 transform hover:scale-110 cursor-pointer"/>}
            </button>

            {/* Pancake Logo */}
            <a href="#" className="flex items-center space-x-2">
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


      {/* Body */}
      <body className="bg-gray-100 flex">
        {/* 1. Menu Bar */}
        <div style={{ display: showSideBar ? "block" : "none" }} className="z-50 transition duration-150">
          <div>
            <nav className={showSideBar? 'sidebar-menu active' : 'sidebar-menu'}>
              <div className="sidebar-menu-items flex flex-col justify-between">
                <div>
                  {SideBarData.map((item, index) => {
                    return (
                      <div className="flex items-center hover:bg-gray-200">
                        <div key={index} className={`$item.cName link border-transparent border-l-4 h-14 w-14 p-3`}>
                          {item.icon}
                        </div>
                        <div>
                          {item.title}
                        </div>
                      </div>
                      
                    )
                  })}
                </div>

                {/* 아래쪽 */}
                <div>
                  <div>
                    <a>
                      <Avatar url="https://en.pimg.jp/066/456/337/1/66456337.jpg" className="h-5 w-5"/>
                      <div className="text-sm font-bold">$17,264</div>
                    </a>
                  </div>
                  <div></div>
                </div>

              </div>
            </nav>
          </div>
        </div>
        
        {/* 2. Contents */}
        <div className={showSideBar ? "opacity-80" : ""}>
          {/* First */}
          <div className="flex flex-col justify-center items-center py-10 bg-blue-200">
            <Avatar url="https://en.pimg.jp/066/456/337/1/66456337.jpg"/>
            <h1 className="text-5xl  font-bold text-purple-800 mt-0 mb-2 leading-normal">PancakeSwap</h1>
            <p>The #1 AMM and yield farm on Binance Smart Chain.</p>

          </div>

          {/* Second */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 grid-flow-row-dense px-8 bg-yellow-200">
            {/* Farms & Staking */}
            <div className="flex flex-col justify-center bg-white px-6 py-5 rounded-lg m-10">
              <div>
                <h2 className="text-4xl font-bold text-indigo-900">Farms & Staking</h2>
                <img className="py-4 rounded-lg" src="https://as1.ftcdn.net/jpg/01/66/50/68/500_F_166506838_2fbBwcQIbnkvnYeQYTFbFZSFE8UTWy4O.jpg" alt="cake logo" width={64} height={64}/>
                <div className="pb-8">
                  <p className="text-lg py-1 text-purple-400">CAKE to Harvest:</p>
                  <p className="text-sm py-1 text-gray-500">Locked</p>
                </div>
                <div>
                  <p className="text-lg py-1 text-purple-400">CAKE in Wallet:</p>
                  <p className="text-sm py-1 text-gray-500">Locked</p>
                </div>
                <div className="pt-8">
                  <button className="btn link w-full h-12 bg-green-300 py-1 px-2 text-white font-bold rounded-full hover:bg-green-200">Unlock Wallet</button>
                </div>
              </div>
            </div>

            {/* Your Lottery Winnings */}
            <div className="flex flex-col justify-center bg-white px-6 py-5 rounded-lg m-10">
              <div>
                <h2 className="text-4xl font-bold text-indigo-900">Your Lottery Winnings</h2>
                <img className="py-4" src="https://cdn4.iconfinder.com/data/icons/casino-games-1/512/Lottery_Wheel-256.png" alt="cake logo" width={64} height={64}/>
                <div className="pb-8">
                  <p className="text-lg py-1 text-purple-400">CAKE to Collect:</p>
                  <p className="text-sm py-1 text-gray-500">Locked</p>
                </div>
                <div>
                  <p className="text-lg py-1 text-purple-400">Total jackpot this round:</p>
                  <p className="text-2xl py-1 font-bold text-gray-500">Coming soon</p>
                </div>
              </div>
              <div className="pt-8">
                  <button className="btn link w-full h-12 bg-green-300 py-1 px-2 text-white font-bold rounded-full hover:bg-green-200">Unlock Wallet</button>
                </div>
            </div>
          </div>

          {/* 3 Rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 grid-flow-row-dense px-8 bg-red-200">
            {/* Earn up to */}
            <div className="btn flex flex-col justify-center bg-white px-6 py-5 rounded-lg m-10">
              <a href="/farms">
                <p className="text-2xl font-bold text-indigo-900">Earn up to</p>
                <p className="text-4xl font-bold text-purple-700">281.32%</p>
                <div>
                  <p className="text-2xl font-bold text-indigo-900">APR in Farms</p>
                  <ArrowRightIcon className="float-right h-5 mr-1 text-green-300"/>
                </div>  
              </a>
            </div>

            {/* Earn */}
            <div className="btn flex flex-col justify-center bg-gradient-to-r from-green-400 to-blue-500 px-6 py-5 rounded-lg m-10">
              <a href="/pools">
                <p className="text-2xl font-bold text-indigo-900">Earn</p>
                <p className="text-4xl font-bold text-white">CAKE, XEND, HGET, HOTCROSS</p>
                <div>
                  <p className="text-2xl font-bold text-indigo-900">in Pools</p>
                  <ArrowRightIcon className="float-right h-5 mr-1 text-green-300"/>
                </div>  
              </a>
            </div>

            {/* Lottery */}
            <div className="btn flex flex-col justify-center bg-white px-6 py-5 rounded-lg m-10">
              <a href="/lottery">
                <p className="text-2xl font-bold text-indigo-900">Lottery</p>
                <p className="text-4xl font-bold text-purple-700">Coming Soon</p>
                <div>
                  <p className="text-2xl font-bold text-indigo-900"></p>
                  <ArrowRightIcon className="float-right h-5 mr-1 text-green-300"/>
                </div>  
              </a>
            </div>
          </div>

          {/* 2 Rows */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 grid-flow-row-dense">
            {/* Cake Stats */}
            <div className="flex flex-col w-sm-full justify-center bg-white px-6 py-5 rounded-lg m-10">
              <div>
                <p className="text-4xl font-bold text-indigo-900 pb-5">Cake Stats</p>
                <div className="flex justify-between pb-3">
                  <p className="text-sm text-indigo-900">Total CAKE Supply</p>
                  <p className="text-sm text-indigo-900 font-bold">172,073,683</p>
                </div>
                <div className="flex justify-between pb-3">
                  <p className="text-sm text-indigo-900">Total CAKE Burned</p>
                  <p className="text-sm text-indigo-900 font-bold">130,776,482</p>
                </div>
                <div className="flex justify-between pb-3">
                  <p className="text-sm text-indigo-900">New CAKE/block</p>
                  <p className="text-sm text-indigo-900 font-bold">20</p>
                </div>
              </div>
            </div>
            {/* Total Value Locked */}
            <div className="flex flex-col w-sm-full justify-center bg-white px-6 py-5 rounded-lg m-10">
              <div>
                <p className="text-2xl font-bold text-indigo-900 pb-5">Total Value Locked(TVL)</p>
                <div className="bg-gray-200 animate-pulse w-64 h-16 rounded-lg"></div>
              </div>
            </div>
          </div>


        </div>
        
        
      </body>
      {/* Footer */}

    </div>
  )
}
