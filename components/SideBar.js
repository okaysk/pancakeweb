import React from 'react'
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';

const iconSize = 22;

export const SideBarData = [
    
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'Trade',
        path: '/trade',
        icon: <FaIcons.FaExchangeAlt size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'Farms',
        path: '/farm',
        icon: <GiIcons.GiFarmer size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'Pools',
        path: '/pool',
        icon: <GiIcons.GiBrandyBottle size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'Prediction (BETA)',
        path: '/prediction',
        icon: <GiIcons.GiSunglasses size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'Lottery',
        path: '/lottery',
        icon: <GiIcons.GiPerspectiveDiceSixFacesRandom size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'Collectibles',
        path: '/collectible',
        icon: <AiIcons.AiFillCopyrightCircle size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'Team Battle',
        path: '/teambattle',
        icon: <GiIcons.GiTrophyCup size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'Teams & profile',
        path: '/teamsandprofile',
        icon: <RiIcons.RiTeamFill size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'Info',
        path: '/info',
        icon: <FaIcons.FaInfoCircle size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'IFO',
        path: '/ifo',
        icon: <FaIcons.FaBitcoin size={iconSize}/>,
        cName: 'sidebar-text',
    },
    {
        title: 'More',
        path: '/more',
        icon: <FiIcons.FiMoreHorizontal size={iconSize}/>,
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
