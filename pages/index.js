import Head from 'next/head';
import Image from "next/image";
import Avatar from "../components/Avatar";
import { MenuIcon } from "@heroicons/react/outline";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Picple</title>
        <meta name="description" content="PICPLE Web like pancake swap" />
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          {/* Icon */}
          <MenuIcon className="h-10 w-10 p-2 transition duration-150 transform hover:scale-110 cursor-pointer"/>
          {/* Icon */}
          <Avatar url="https://image.flaticon.com/icons/png/512/3009/3009983.png" />
          <p className="hidden sm:inline-flex link text-lg">PancakeSwab</p>
          {/* <Image src="/images/logo.png" height={100} width={300} /> */}
        </div>
        {/* Right */}

        <div className="flex space-x-4 items-center">
          {/* Icon */}
          <button className="link bg-green-300 py-1 px-2 text-white font-bold rounded-full hover:bg-green-200">Address</button>
          {/* Avatar */}
          <Avatar url="https://cdn4.iconfinder.com/data/icons/happy-easter-5/64/easter_rabbit_bunny_holiday_animal_happy_cute-512.png" />
        </div>

      </header>

      <body className="bg-gray-100">
        {/* First */}
        <div className="flex flex-col justify-center items-center py-10">
          <Avatar url="https://en.pimg.jp/066/456/337/1/66456337.jpg"/>
          <h1 className="text-3xl  font-bold text-purple-800 mt-0 mb-2 leading-normal">PancakeSwab</h1>
          <p>The #1 AMM and yield farm on Binance Smart Chain.</p>

        </div>

        {/* Second */}
        <div className="flex sm:flex-col lg:flex md:flex">
          {/* Farms & Staking */}
          <div className="flex flex-col bg-white justify-center px-6 py-5 rounded-lg m-10">
            <div>
              <h2 className="text-3xl font-bold text-indigo-900">Farms & Staking</h2>
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
              <h2 className="text-3xl font-bold text-indigo-900">Your Lottery Winnings</h2>
              <img className="py-4" src="https://as1.ftcdn.net/jpg/01/66/50/68/500_F_166506838_2fbBwcQIbnkvnYeQYTFbFZSFE8UTWy4O.jpg" alt="cake logo" width={64} height={64}/>
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
        <div className="flex space-x-4">
          
          <div className="flex flex-col justify-center bg-white px-6 py-5 rounded-lg m-10">
            <p className="text-xl font-bold text-indigo-900">Earn up to</p>
            <p className="text-2xl font-bold text-purple-700">281.32%</p>
            <p className="text-xl font-bold text-indigo-900 pb-5">APR in Farms</p>
          </div>
          <div className="flex flex-col justify-center bg-gradient-to-r from-green-400 to-blue-500 px-6 py-5 rounded-lg m-10">
            <p className="text-xl font-bold text-indigo-900">Earn</p>
            <p className="text-2xl font-bold text-white">CAKE, XEND, HGET, HOTCROSS</p>
            <p className="text-xl font-bold text-indigo-900 pb-5">in Pools</p>
          </div>
          <div className="flex flex-col justify-center bg-white px-6 py-5 rounded-lg m-10">
            <p className="text-xl font-bold text-indigo-900">Lottery</p>
            <p className="text-2xl font-bold text-purple-700">Coming Soon</p>
          </div>

        </div>
        
      </body>

      {/* Body */}

      {/* Footer */}

    </div>
  )
}
