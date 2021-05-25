import React from 'react'
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'sidebar-text',
    },
    {
        title: 'Trade',
        path: '/trade',
        icon: <FaIcons.FaExchangeAlt />,
        cName: 'sidebar-text',
    },
    {
        title: 'Farms',
        path: '/farm',
        icon: <GiIcons.GiFarmer />,
        cName: 'sidebar-text',
    },
    {
        title: 'Pools',
        path: '/pool',
        icon: <GiIcons.GiBrandyBottle />,
        cName: 'sidebar-text',
    },
    {
        title: 'Prediction (BETA)',
        path: '/prediction',
        icon: <GiIcons.GiSunglasses />,
        cName: 'sidebar-text',
    },
    {
        title: 'Lottery',
        path: '/lottery',
        icon: <GiIcons.GiPerspectiveDiceSixFacesRandom />,
        cName: 'sidebar-text',
    },
    {
        title: 'Collectibles',
        path: '/collectible',
        icon: <AiIcons.AiFillCopyrightCircle />,
        cName: 'sidebar-text',
    },
    {
        title: 'Team Battle',
        path: '/teambattle',
        icon: <GiIcons.GiTrophyCup />,
        cName: 'sidebar-text',
    },
    {
        title: 'Teams & profile',
        path: '/teamsandprofile',
        icon: <RiIcons.RiTeamFill />,
        cName: 'sidebar-text',
    },
    {
        title: 'Info',
        path: '/info',
        icon: <FaIcons.FaInfoCircle />,
        cName: 'sidebar-text',
    },
    {
        title: 'IFO',
        path: '/ifo',
        icon: <FaIcons.FaBitcoin />,
        cName: 'sidebar-text',
    },
    {
        title: 'More',
        path: '/more',
        icon: <FiIcons.FiMoreHorizontal />,
        cName: 'sidebar-text',
    },


]

function SideBar() {
    return (
        <div>
            
        </div>
    )
}

export default SideBar
