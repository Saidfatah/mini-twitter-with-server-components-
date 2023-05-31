import React from "react";
import {
    FaHome,
    FaHashtag,
    FaRegBell,
    FaRegEnvelope,
    FaRegBookmark,
    FaRegListAlt,
    FaUserAlt,
    FaEllipsisH,
} from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import NavItem from "./NavItem";

function TwitterNavbar() {
    return (
        <div className="flex flex-col justify-between h-screen p-4">
            <div className="flex flex-col items-center">
                <VscTwitter className="text-gray-200 text-4xl mb-4" />
                <nav className="mb-4">
                    <NavItem icon={<FaHome className="text-xl" />} label="Home" />
                    <NavItem icon={<FaHashtag className="text-xl" />} label="Explore" />
                    <NavItem
                        icon={<FaRegBell className="text-xl" />}
                        label="Notifications"
                    />
                    <NavItem
                        icon={<FaRegEnvelope className="text-xl" />}
                        label="Messages"
                    />
                    <NavItem
                        icon={<FaRegBookmark className="text-xl" />}
                        label="Bookmarks"
                    />
                    <NavItem icon={<FaRegListAlt className="text-xl" />} label="Lists" />
                    <NavItem icon={<FaUserAlt className="text-xl" />} label="Profile" />

                    {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">More ... <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                            </li>
                        </ul>
                    </div> */}

                    <NavItem icon={<FaEllipsisH className="text-xl" />} label="More" />
                </nav>
                <button className="w-full bg-blue-500 text-white rounded-full py-3 font-bold">
                    Tweet
                </button>
            </div>






            <button className="bg-white rounded-full border border-gray-200 text-gray-800 px-4 py-2 flex items-center space-x-2 hover:bg-gray-200">
                <img
                    className="h-8 w-8 rounded-full"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    alt="User profile"
                />
                <span>Profile</span>
            </button>
        </div>
    );
}


export default TwitterNavbar;