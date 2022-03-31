import { Outlet } from 'react-router-dom'
import React, { useState } from "react";

// export default function Index() {

type Props = {}

const WebsiteLayout = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuSm, setShowMenuSm] = useState(false);
  const [search, setSearch] = useState(false);
  return (
    <div>
      <header>
        <div className="dark:bg-gray-900">
          <div className="2xl:container 2xl:mx-auto md:py-5 lg:px-20 md:px-6 p-4">
            <div className="flex items-center justify-between">
              <div className="lg:w-3/12">
                <div className="w-7/12 hidden lg:flex items-center space-x-3 border-b border-gray-200 pb-2">
                  <div>
                    <svg className="fill-stroke text-gray-600 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M19.0004 19.0004L14.6504 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Search for products" className="bg-transparent text-sm text-gray-600 focus:outline-none" />
                </div>
                <button onClick={() => setShowMenu(true)} aria-label="Open Menu" className="text-gray-800 dark:text-white hidden md:block lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded">
                  <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 18L4 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18 6L4 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button onClick={() => setSearch(true)} aria-label="Search Menu" className="text-gray-800 dark:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                  <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.9984 19.0004L14.6484 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              <div className="lg:w-6/12 flex flex-col justify-center items-center space-y-3.5">
                <div aria-label="Luxiwood. Logo" role="img" className="cursor-pointer">
                  <svg className="fill-stroke text-gray-800 dark:text-white" width={146} height={26} viewBox="0 0 146 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M37.376 17.336H45.728V20H34.064V4.16H37.376V17.336ZM52.154 20.24C51.354 20.24 50.634 20.096 49.994 19.808C49.354 19.52 48.842 19.064 48.458 18.44C48.09 17.816 47.906 16.992 47.906 15.968V8H51.194V15.176C51.194 16.104 51.386 16.752 51.77 17.12C52.154 17.472 52.706 17.648 53.426 17.648C54.114 17.648 54.722 17.4 55.25 16.904C55.794 16.392 56.066 15.576 56.066 14.456V8H59.354V20H56.426L56.306 17.912C55.906 18.696 55.354 19.28 54.65 19.664C53.946 20.048 53.114 20.24 52.154 20.24ZM65.4779 8L67.9979 12.176L70.5419 8H74.2619L70.0139 13.928L74.3339 20H70.5179L67.8539 15.656L65.1419 20H61.4219L65.8379 13.928L61.6379 8H65.4779ZM78.134 6.272C76.774 6.272 76.094 5.688 76.094 4.52C76.094 3.336 76.774 2.744 78.134 2.744C79.494 2.744 80.174 3.336 80.174 4.52C80.174 5.688 79.494 6.272 78.134 6.272ZM79.766 8V20H76.478V8H79.766ZM98.7314 8H102.235L98.3954 20H94.6034L91.9874 11.84L89.4674 20H85.6754L81.8354 8H85.3394L87.7394 17.192L90.4034 8H93.6674L96.3554 17.192L98.7314 8ZM109.419 7.76C110.619 7.76 111.683 8.008 112.611 8.504C113.539 9 114.259 9.712 114.771 10.64C115.299 11.568 115.563 12.688 115.563 14C115.563 15.312 115.299 16.432 114.771 17.36C114.259 18.288 113.539 19 112.611 19.496C111.683 19.992 110.619 20.24 109.419 20.24C108.203 20.24 107.131 19.992 106.203 19.496C105.291 19 104.571 18.288 104.043 17.36C103.531 16.432 103.275 15.312 103.275 14C103.275 12.688 103.531 11.568 104.043 10.64C104.571 9.712 105.291 9 106.203 8.504C107.131 8.008 108.203 7.76 109.419 7.76ZM109.419 10.208C108.523 10.208 107.819 10.528 107.307 11.168C106.811 11.792 106.563 12.736 106.563 14C106.563 15.264 106.811 16.216 107.307 16.856C107.819 17.48 108.523 17.792 109.419 17.792C110.299 17.792 110.987 17.48 111.483 16.856C111.995 16.216 112.251 15.264 112.251 14C112.251 12.736 111.995 11.792 111.483 11.168C110.987 10.528 110.299 10.208 109.419 10.208ZM123.786 7.76C124.986 7.76 126.05 8.008 126.978 8.504C127.906 9 128.626 9.712 129.138 10.64C129.666 11.568 129.93 12.688 129.93 14C129.93 15.312 129.666 16.432 129.138 17.36C128.626 18.288 127.906 19 126.978 19.496C126.05 19.992 124.986 20.24 123.786 20.24C122.57 20.24 121.498 19.992 120.57 19.496C119.658 19 118.938 18.288 118.41 17.36C117.898 16.432 117.642 15.312 117.642 14C117.642 12.688 117.898 11.568 118.41 10.64C118.938 9.712 119.658 9 120.57 8.504C121.498 8.008 122.57 7.76 123.786 7.76ZM123.786 10.208C122.89 10.208 122.186 10.528 121.674 11.168C121.178 11.792 120.93 12.736 120.93 14C120.93 15.264 121.178 16.216 121.674 16.856C122.186 17.48 122.89 17.792 123.786 17.792C124.666 17.792 125.354 17.48 125.85 16.856C126.362 16.216 126.618 15.264 126.618 14C126.618 12.736 126.362 11.792 125.85 11.168C125.354 10.528 124.666 10.208 123.786 10.208ZM137.217 20.24C136.225 20.24 135.337 19.992 134.553 19.496C133.785 19 133.177 18.296 132.729 17.384C132.297 16.456 132.081 15.336 132.081 14.024C132.081 12.696 132.313 11.568 132.777 10.64C133.241 9.696 133.865 8.984 134.649 8.504C135.449 8.008 136.345 7.76 137.337 7.76C138.201 7.76 138.945 7.968 139.569 8.384C140.193 8.8 140.665 9.352 140.985 10.04V2.744H144.273V20H141.321L141.177 17.672C140.841 18.472 140.321 19.104 139.617 19.568C138.913 20.016 138.113 20.24 137.217 20.24ZM138.177 17.72C139.025 17.72 139.705 17.392 140.217 16.736C140.729 16.064 140.985 15.12 140.985 13.904C140.985 12.752 140.729 11.864 140.217 11.24C139.721 10.6 139.057 10.28 138.225 10.28C137.329 10.28 136.625 10.6 136.113 11.24C135.617 11.864 135.369 12.784 135.369 14C135.369 15.216 135.617 16.144 136.113 16.784C136.609 17.408 137.297 17.72 138.177 17.72Z"
                      fill="currentColor"
                    />
                    <path d="M2.25 21.5V16.25C2.25235 15.4551 2.56917 14.6934 3.13128 14.1313C3.69338 13.5692 4.45507 13.2523 5.25 13.25H18.75C19.5449 13.2523 20.3066 13.5692 20.8687 14.1313C21.4308 14.6934 21.7477 15.4551 21.75 16.25V21.5M18 13.25H4.5V8.375C4.50148 7.87818 4.6995 7.40212 5.05081 7.05081C5.40212 6.6995 5.87818 6.50148 6.375 6.5H17.625C18.1218 6.50148 18.5979 6.6995 18.9492 7.05081C19.3005 7.40212 19.4985 7.87818 19.5 8.375V13.25H18Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M12 13.25V12.5C12.0011 12.1025 12.1595 11.7216 12.4406 11.4406C12.7216 11.1595 13.1025 11.0011 13.5 11H17.25C17.6475 11.0011 18.0284 11.1595 18.3094 11.4406C18.5905 11.7216 18.7489 12.1025 18.75 12.5V13.25M2.25 21.5V21.125C2.25087 20.8269 2.36967 20.5413 2.58046 20.3305C2.79125 20.1197 3.0769 20.0009 3.375 20H20.625C20.9231 20.0009 21.2087 20.1197 21.4195 20.3305C21.6303 20.5413 21.7491 20.8269 21.75 21.125V21.5H2.25ZM5.25 13.25V12.5C5.25111 12.1025 5.40951 11.7216 5.69057 11.4406C5.97163 11.1595 6.35252 11.0011 6.75 11H10.5C10.8975 11.0011 11.2784 11.1595 11.5594 11.4406C11.8405 11.7216 11.9989 12.1025 12 12.5V13.25H5.25Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="hidden lg:block">
                  <ul className="flex items-center space-x-10">
                    <li>
                      <a href="javascript:void(0)" className="dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        Catalog
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        Pages
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)" className="dark:text-white dark:hover:text-gray-300 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                        Contact us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-3/12 flex justify-end items-center space-x-4">
                <a aria-label="view favourites" className="hidden md:block focus:outline-none text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5" href="javascript:void(0)">
                  <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20.8401 4.60987C20.3294 4.09888 19.7229 3.69352 19.0555 3.41696C18.388 3.14039 17.6726 2.99805 16.9501 2.99805C16.2276 2.99805 15.5122 3.14039 14.8448 3.41696C14.1773 3.69352 13.5709 4.09888 13.0601 4.60987L12.0001 5.66987L10.9401 4.60987C9.90843 3.57818 8.50915 2.99858 7.05012 2.99858C5.59109 2.99858 4.19181 3.57818 3.16012 4.60987C2.12843 5.64156 1.54883 7.04084 1.54883 8.49987C1.54883 9.95891 2.12843 11.3582 3.16012 12.3899L4.22012 13.4499L12.0001 21.2299L19.7801 13.4499L20.8401 12.3899C21.3511 11.8791 21.7565 11.2727 22.033 10.6052C22.3096 9.93777 22.4519 9.22236 22.4519 8.49987C22.4519 7.77738 22.3096 7.06198 22.033 6.39452C21.7565 5.72706 21.3511 5.12063 20.8401 4.60987V4.60987Z"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a aria-label="Shopping bag" className="hidden md:block focus:outline-none text-gray-800 dark:text-white focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5" href="javascript:void(0)">
                  <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.5 8.25V6.75C7.5 5.55653 7.97411 4.41193 8.81802 3.56802C9.66193 2.72411 10.8065 2.25 12 2.25V2.25C13.1935 2.25 14.3381 2.72411 15.182 3.56802C16.0259 4.41193 16.5 5.55653 16.5 6.75V8.25M3.75 8.25C3.55109 8.25 3.36032 8.32902 3.21967 8.46967C3.07902 8.61032 3 8.80109 3 9V19.125C3 20.5425 4.2075 21.75 5.625 21.75H18.375C19.7925 21.75 21 20.6011 21 19.1836V9C21 8.80109 20.921 8.61032 20.7803 8.46967C20.6397 8.32902 20.4489 8.25 20.25 8.25H3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 10.5V11.25C7.5 12.4435 7.97411 13.5881 8.81802 14.432C9.66193 15.2759 10.8065 15.75 12 15.75C13.1935 15.75 14.3381 15.2759 15.182 14.432C16.0259 13.5881 16.5 12.4435 16.5 11.25V10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <button onClick={() => setShowMenuSm(true)} aria-label="open menu" className="text-gray-800 dark:text-white md:hidden focus:outline-none focus:ring-2 focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                  <svg className="fill-stroke" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
            <div id="md-menu" className={`${showMenu ? "md:block" : ""} hidden lg:hidden absolute z-10 inset-0 h-screen w-full dark:bg-gray-800 bg-gray-800 bg-opacity-70 dark:bg-opacity-70`}>
              <div className="relative w-full h-screen">
                <div className="absolute inset-0 w-1/2 bg-white dark:bg-gray-900 p-6 justify-center">
                  <div className="flex items-center justify-between border-b pb-4 border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3 mx-2">
                      <div>
                        <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M18.9984 19.0004L14.6484 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <input type="text" placeholder="Search for products" className="text-sm text-gray-600 dark:text-gray-300 focus:outline-none bg-transparent" />
                    </div>
                    <button onClick={() => setShowMenu(false)} aria-label="close menu" className="focus:outline-none focus:ring-2 focus:ring-gray-800">
                      <svg className="fill-stroke text-gray-800 dark:text-white" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-8">
                    <ul className="flex flex-col space-y-8">
                      <li className="flex items-center justify-between">
                        <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                          Home
                        </a>
                        <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </li>
                      <li className="flex items-center justify-between">
                        <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                          Catalog
                        </a>
                        <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </li>
                      <li className="flex items-center justify-between">
                        <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                          Pages
                        </a>
                        <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </li>
                      <li className="flex items-center justify-between">
                        <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                          Blog
                        </a>
                        <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </li>
                      <li className="flex items-center justify-between">
                        <a href="javascript:void(0)" className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                          Contact us
                        </a>
                        <button className="fill-stroke text-black dark:text-white" aria-label="show options">
                          <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Search menu */}
            <div id="mobile-search-menu" className={`${search ? "flex" : "hidden"} md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white dark:bg-gray-900 pt-4`}>
              <div className="w-full">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3 mx-4">
                  <div className="flex items-center space-x-3 mx-2">
                    <div>
                      <svg className="fill-stroke text-gray-800 dark:text-white" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.9984 19.0004L14.6484 14.6504" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <input type="text" placeholder="Search for products" className="text-sm text-gray-600 focus:outline-none bg-transparent" />
                  </div>
                  <button aria-label="close menu" onClick={() => setSearch(false)} className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                    <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 5L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-8 mx-4">
                <h2 className="text-sm text-gray-600 dark:text-gray-300 uppercase">Suggestions</h2>
                <ul className="mt-6 flex flex-col space-y-6">
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Bags
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Shoes
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Capes
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Coats
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Denim 2021
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Leather shoe collection 2021
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Active wear
                    </a>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-sm text-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline">
                      Sweat suits
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full h-full flex items-end">
                <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
                  <li>
                    <a className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                      <div>
                        <svg className="fill-stroke" width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M1 5H21" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-base">Cart</p>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center space-x-2 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                      <div>
                        <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-base">Wishlist</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Main Menu */}
            <div id="mobile-menu" className={`${showMenuSm ? "flex" : "hidden"} md:hidden absolute inset-0 z-10 flex-col w-full h-screen bg-white pt-4`}>
              <div className="w-full">
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 mx-4">
                  <div />
                  <div>
                    <p className="text-base font-semibold text-gray-800">Menu</p>
                  </div>
                  <button aria-label="close menu" onClick={() => setShowMenuSm(false)} className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800">
                    <svg className="fill-stroke" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 5L5 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 5L15 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6 mx-4">
                <ul className="flex flex-col space-y-8">
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                      Home
                    </a>
                    <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                      <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                      Catalog
                    </a>
                    <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                      <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                      Pages
                    </a>
                    <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                      <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                      Blog
                    </a>
                    <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                      <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </li>
                  <li className="flex items-center justify-between">
                    <a href="javascript:void(0)" className="text-base text-gray-800 focus:outline-none dark:text-white focus:ring-2 focus:ring-gray-800 hover:underline">
                      Contact us
                    </a>
                    <button className="focus:outline-none focus:ring-2 text-black dark:text-white focus:ring-gray-800 rounded hover:bg-gray-100 p-0.5">
                      <svg className="fill-stroke" width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="w-full h-full flex items-end">
                <ul className="bg-gray-50 dark:bg-gray-800 py-10 px-4 flex flex-col space-y-8 w-full">
                  <li>
                    <a className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                      <div>
                        <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.33333 1L1 5V19C1 19.5304 1.23413 20.0391 1.65087 20.4142C2.06762 20.7893 2.63285 21 3.22222 21H18.7778C19.3671 21 19.9324 20.7893 20.3491 20.4142C20.7659 20.0391 21 19.5304 21 19V5L17.6667 1H4.33333Z" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M1 5H21" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M15.4436 9C15.4436 10.0609 14.9753 11.0783 14.1418 11.8284C13.3083 12.5786 12.1779 13 10.9991 13C9.82039 13 8.68993 12.5786 7.85643 11.8284C7.02294 11.0783 6.55469 10.0609 6.55469 9" stroke="#1F2937" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <p className="text-base text-gray-800">Cart</p>
                    </a>
                  </li>
                  <li>
                    <a className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline" href="javascript:void(0)">
                      <div>
                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M17.3651 3.84172C16.9395 3.41589 16.4342 3.0781 15.8779 2.84763C15.3217 2.61716 14.7255 2.49854 14.1235 2.49854C13.5214 2.49854 12.9252 2.61716 12.369 2.84763C11.8128 3.0781 11.3074 3.41589 10.8818 3.84172L9.99847 4.72506L9.11514 3.84172C8.25539 2.98198 7.08933 2.49898 5.87347 2.49898C4.65761 2.49898 3.49155 2.98198 2.6318 3.84172C1.77206 4.70147 1.28906 5.86753 1.28906 7.08339C1.28906 8.29925 1.77206 9.46531 2.6318 10.3251L3.51514 11.2084L9.99847 17.6917L16.4818 11.2084L17.3651 10.3251C17.791 9.89943 18.1288 9.39407 18.3592 8.83785C18.5897 8.28164 18.7083 7.68546 18.7083 7.08339C18.7083 6.48132 18.5897 5.88514 18.3592 5.32893C18.1288 4.77271 17.791 4.26735 17.3651 3.84172V3.84172Z"
                            stroke="#1F2937"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p className="text-base text-gray-800">Wishlist</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>

      <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 px-4 py-12">
            <div className="flex flex-col items-center justify-center">
                <div>
                    <svg width="111" height="19" viewBox="0 0 111 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.376 15.336H11.728V18H0.0640001V2.16H3.376V15.336ZM18.154 18.24C17.354 18.24 16.634 18.096 15.994 17.808C15.354 17.52 14.842 17.064 14.458 16.44C14.09 15.816 13.906 14.992 13.906 13.968V6H17.194V13.176C17.194 14.104 17.386 14.752 17.77 15.12C18.154 15.472 18.706 15.648 19.426 15.648C20.114 15.648 20.722 15.4 21.25 14.904C21.794 14.392 22.066 13.576 22.066 12.456V6H25.354V18H22.426L22.306 15.912C21.906 16.696 21.354 17.28 20.65 17.664C19.946 18.048 19.114 18.24 18.154 18.24ZM31.4779 6L33.9979 10.176L36.5419 6H40.2619L36.0139 11.928L40.3339 18H36.5179L33.8539 13.656L31.1419 18H27.4219L31.8379 11.928L27.6379 6H31.4779ZM44.134 4.272C42.774 4.272 42.094 3.688 42.094 2.52C42.094 1.336 42.774 0.743999 44.134 0.743999C45.494 0.743999 46.174 1.336 46.174 2.52C46.174 3.688 45.494 4.272 44.134 4.272ZM45.766 6V18H42.478V6H45.766ZM64.7314 6H68.2354L64.3954 18H60.6034L57.9874 9.84L55.4674 18H51.6754L47.8354 6H51.3394L53.7394 15.192L56.4034 6H59.6674L62.3554 15.192L64.7314 6ZM75.4188 5.76C76.6188 5.76 77.6828 6.008 78.6108 6.504C79.5388 7 80.2588 7.712 80.7708 8.64C81.2988 9.568 81.5628 10.688 81.5628 12C81.5628 13.312 81.2988 14.432 80.7708 15.36C80.2588 16.288 79.5388 17 78.6108 17.496C77.6828 17.992 76.6188 18.24 75.4188 18.24C74.2028 18.24 73.1308 17.992 72.2028 17.496C71.2908 17 70.5708 16.288 70.0428 15.36C69.5308 14.432 69.2748 13.312 69.2748 12C69.2748 10.688 69.5308 9.568 70.0428 8.64C70.5708 7.712 71.2908 7 72.2028 6.504C73.1308 6.008 74.2028 5.76 75.4188 5.76ZM75.4188 8.208C74.5228 8.208 73.8188 8.528 73.3068 9.168C72.8108 9.792 72.5628 10.736 72.5628 12C72.5628 13.264 72.8108 14.216 73.3068 14.856C73.8188 15.48 74.5228 15.792 75.4188 15.792C76.2988 15.792 76.9868 15.48 77.4828 14.856C77.9948 14.216 78.2508 13.264 78.2508 12C78.2508 10.736 77.9948 9.792 77.4828 9.168C76.9868 8.528 76.2988 8.208 75.4188 8.208ZM89.7859 5.76C90.9859 5.76 92.0499 6.008 92.9779 6.504C93.9059 7 94.6259 7.712 95.1379 8.64C95.6659 9.568 95.9299 10.688 95.9299 12C95.9299 13.312 95.6659 14.432 95.1379 15.36C94.6259 16.288 93.9059 17 92.9779 17.496C92.0499 17.992 90.9859 18.24 89.7859 18.24C88.5699 18.24 87.4979 17.992 86.5699 17.496C85.6579 17 84.9379 16.288 84.4099 15.36C83.8979 14.432 83.6419 13.312 83.6419 12C83.6419 10.688 83.8979 9.568 84.4099 8.64C84.9379 7.712 85.6579 7 86.5699 6.504C87.4979 6.008 88.5699 5.76 89.7859 5.76ZM89.7859 8.208C88.8899 8.208 88.1859 8.528 87.6739 9.168C87.1779 9.792 86.9299 10.736 86.9299 12C86.9299 13.264 87.1779 14.216 87.6739 14.856C88.1859 15.48 88.8899 15.792 89.7859 15.792C90.6659 15.792 91.3539 15.48 91.8499 14.856C92.3619 14.216 92.6179 13.264 92.6179 12C92.6179 10.736 92.3619 9.792 91.8499 9.168C91.3539 8.528 90.6659 8.208 89.7859 8.208ZM103.217 18.24C102.225 18.24 101.337 17.992 100.553 17.496C99.7851 17 99.1771 16.296 98.7291 15.384C98.2971 14.456 98.0811 13.336 98.0811 12.024C98.0811 10.696 98.3131 9.568 98.7771 8.64C99.2411 7.696 99.8651 6.984 100.649 6.504C101.449 6.008 102.345 5.76 103.337 5.76C104.201 5.76 104.945 5.968 105.569 6.384C106.193 6.8 106.665 7.352 106.985 8.04V0.743999H110.273V18H107.321L107.177 15.672C106.841 16.472 106.321 17.104 105.617 17.568C104.913 18.016 104.113 18.24 103.217 18.24ZM104.177 15.72C105.025 15.72 105.705 15.392 106.217 14.736C106.729 14.064 106.985 13.12 106.985 11.904C106.985 10.752 106.729 9.864 106.217 9.24C105.721 8.6 105.057 8.28 104.225 8.28C103.329 8.28 102.625 8.6 102.113 9.24C101.617 9.864 101.369 10.784 101.369 12C101.369 13.216 101.617 14.144 102.113 14.784C102.609 15.408 103.297 15.72 104.177 15.72Z"
                            fill="#1F2937"
                        />
                    </svg>
                </div>
                <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">About</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Contact us</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Terms of Service</p>
                    <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800">Privacy Policy</p>
                </div>
                <div className="flex items-center gap-x-8 mt-6">
                    <div className="cursor-pointer">
                        <svg className="fill-current text-gray-800 hover:text-gray-500" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.5 11.0631C21.5 5.26467 16.7984 0.56311 11 0.56311C5.20156 0.56311 0.5 5.26467 0.5 11.0631C0.5 16.3037 4.33906 20.6476 9.35938 21.4361V14.0992H6.69266V11.0631H9.35938V8.74983C9.35938 6.11873 10.9273 4.6642 13.3255 4.6642C14.4744 4.6642 15.6763 4.86952 15.6763 4.86952V7.45373H14.3516C13.048 7.45373 12.6402 8.2628 12.6402 9.09436V11.0631H15.552L15.087 14.0992H12.6406V21.437C17.6609 20.649 21.5 16.3051 21.5 11.0631Z" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="cursor-pointer">
                        <svg className="fill-current text-gray-800 hover:text-gray-500" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2969 12C14.2969 13.2686 13.2686 14.2969 12 14.2969C10.7314 14.2969 9.70312 13.2686 9.70312 12C9.70312 10.7314 10.7314 9.70312 12 9.70312C13.2686 9.70312 14.2969 10.7314 14.2969 12Z" fill="currentColor" />
                            <path
                                d="M17.3716 7.93616C17.2612 7.63696 17.085 7.36615 16.8561 7.14386C16.6339 6.91498 16.3632 6.73883 16.0638 6.62842C15.821 6.53412 15.4563 6.42188 14.7845 6.3913C14.0577 6.35815 13.8398 6.35101 12 6.35101C10.16 6.35101 9.94208 6.35797 9.21552 6.39111C8.5437 6.42188 8.17877 6.53412 7.93616 6.62842C7.63678 6.73883 7.36597 6.91498 7.14386 7.14386C6.91498 7.36615 6.73883 7.63678 6.62823 7.93616C6.53394 8.17896 6.42169 8.54388 6.39111 9.2157C6.35797 9.94226 6.35083 10.1602 6.35083 12.0002C6.35083 13.84 6.35797 14.0579 6.39111 14.7847C6.42169 15.4565 6.53394 15.8212 6.62823 16.064C6.73883 16.3634 6.91479 16.634 7.14368 16.8563C7.36597 17.0852 7.6366 17.2614 7.93597 17.3718C8.17877 17.4662 8.5437 17.5785 9.21552 17.6091C9.94208 17.6422 10.1598 17.6492 11.9998 17.6492C13.84 17.6492 14.0579 17.6422 14.7843 17.6091C15.4561 17.5785 15.821 17.4662 16.0638 17.3718C16.6648 17.14 17.1398 16.665 17.3716 16.064C17.4659 15.8212 17.5781 15.4565 17.6089 14.7847C17.642 14.0579 17.649 13.84 17.649 12.0002C17.649 10.1602 17.642 9.94226 17.6089 9.2157C17.5783 8.54388 17.4661 8.17896 17.3716 7.93616ZM12 15.5383C10.0457 15.5383 8.46149 13.9543 8.46149 12C8.46149 10.0457 10.0457 8.46167 12 8.46167C13.9541 8.46167 15.5383 10.0457 15.5383 12C15.5383 13.9543 13.9541 15.5383 12 15.5383ZM15.6782 9.14868C15.2216 9.14868 14.8513 8.77844 14.8513 8.32178C14.8513 7.86511 15.2216 7.49487 15.6782 7.49487C16.1349 7.49487 16.5051 7.86511 16.5051 8.32178C16.5049 8.77844 16.1349 9.14868 15.6782 9.14868Z"
                                fill="currentColor"
                            />
                            <path
                                d="M12 0C5.3736 0 0 5.3736 0 12C0 18.6264 5.3736 24 12 24C18.6264 24 24 18.6264 24 12C24 5.3736 18.6264 0 12 0ZM18.8491 14.8409C18.8157 15.5744 18.6991 16.0752 18.5288 16.5135C18.1708 17.4391 17.4391 18.1708 16.5135 18.5288C16.0754 18.6991 15.5744 18.8156 14.8411 18.8491C14.1063 18.8826 13.8715 18.8906 12.0002 18.8906C10.1287 18.8906 9.8941 18.8826 9.15912 18.8491C8.42578 18.8156 7.9248 18.6991 7.48663 18.5288C7.02667 18.3558 6.61029 18.0846 6.26605 17.7339C5.91559 17.3899 5.64441 16.9733 5.47137 16.5135C5.30109 16.0754 5.18445 15.5744 5.15112 14.8411C5.11725 14.1061 5.10938 13.8713 5.10938 12C5.10938 10.1287 5.11725 9.89392 5.15094 9.15912C5.18427 8.4256 5.30072 7.9248 5.47101 7.48645C5.64404 7.02667 5.91541 6.61011 6.26605 6.26605C6.61011 5.91541 7.02667 5.64423 7.48645 5.47119C7.9248 5.3009 8.4256 5.18445 9.15912 5.15094C9.89392 5.11743 10.1287 5.10938 12 5.10938C13.8713 5.10938 14.1061 5.11743 14.8409 5.15112C15.5744 5.18445 16.0752 5.3009 16.5135 5.47101C16.9733 5.64404 17.3899 5.91541 17.7341 6.26605C18.0846 6.61029 18.356 7.02667 18.5288 7.48645C18.6993 7.9248 18.8157 8.4256 18.8492 9.15912C18.8828 9.89392 18.8906 10.1287 18.8906 12C18.8906 13.8713 18.8828 14.1061 18.8491 14.8409Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div className="cursor-pointer">
                        <svg className="fill-current text-gray-800 hover:text-gray-500" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.0027 0.554382C5.37441 0.554382 0 5.94525 0 12.5938C0 17.5224 2.9578 21.7577 7.18553 23.6228C7.15338 22.7843 7.18017 21.7739 7.39451 20.8602C7.62492 19.882 8.93771 14.2976 8.93771 14.2976C8.93771 14.2976 8.55191 13.529 8.55191 12.3949C8.55191 10.6105 9.58071 9.27759 10.8667 9.27759C11.9598 9.27759 12.4849 10.0999 12.4849 11.0835C12.4849 12.1853 11.783 13.83 11.424 15.3564C11.1239 16.6356 12.0616 17.6729 13.3208 17.6729C15.5928 17.6729 17.1253 14.7437 17.1253 11.2716C17.1253 8.63262 15.3516 6.66009 12.1313 6.66009C8.49297 6.66009 6.22103 9.38508 6.22103 12.4272C6.22103 13.4753 6.53181 14.217 7.01407 14.7867C7.23376 15.0501 7.26591 15.1576 7.18553 15.4585C7.12659 15.6789 6.99799 16.211 6.93905 16.426C6.85867 16.7324 6.61219 16.8398 6.33891 16.727C4.66176 16.039 3.87944 14.2008 3.87944 12.1262C3.87944 8.70786 6.75686 4.60694 12.4581 4.60694C17.0395 4.60694 20.0563 7.9339 20.0563 11.5027C20.0563 16.2271 17.436 19.753 13.578 19.753C12.2813 19.753 11.065 19.0489 10.647 18.2534C10.647 18.2534 9.95043 21.0268 9.8004 21.5642C9.54856 22.4941 9.05023 23.4185 8.59478 24.1441C9.6996 24.471 10.8454 24.6376 11.9973 24.6386C18.6256 24.6386 24 19.2477 24 12.5992C24 5.95062 18.6309 0.554382 12.0027 0.554382Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <p className="text-base leading-4 text-gray-800">
                        2021 <span className="font-semibold">Luxiwood</span>
                    </p>
                    <div className="border-l border-gray-800 pl-2 ml-2">
                        <p className="text-base leading-4 text-gray-800">Inc. All righys reserved</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
}

export default WebsiteLayout