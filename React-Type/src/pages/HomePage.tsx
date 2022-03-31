import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <div className="sm:mx-auto sm:container px-6 xl:px-0">
        <div className="flex items-center justify-between md:flex-row flex-col py-12 space-y-6 md:space-y-0 w-full">
          <div className="hidden md:block">
            <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
            <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
          </div>
          <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">
            <div className="">
              <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-gray-800">Act before it’s too late!</h1>
            </div>
            <div className="mt-4">
              <p className="xl:text-xl text-base leading-7 text-center text-gray-600">Furniture that looks modern and is comfortable as well. Avail the 50% offer now.</p>
            </div>
            <div className="mt-8 flex justify-center items-center w-full">
              <button className="hover:opacity-75 flex justify-center bg-gray-800 sm:w-32 w-full h-10 py-3">
                <p className="text-base font-medium leading-none text-white">Explore</p>
              </button>
            </div>
          </div>
          <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
            <div className="w-full">
              <img className="hidden xl:block w-full" src="https://i.ibb.co/kg4KPBG/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
              <img className="xl:hidden w-full" src="https://i.ibb.co/JjMcGH1/sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1.png" alt="sven-brandsma-Qz6-Zx4-Rjd-D8-unsplash-1" />
            </div>
            <div className="md:hidden w-full">
              <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
              <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto 2xl:-mt-24 md:py-12 py-9">
        <div className=" bg-gray-50 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">
          {/* Delivery grid Card */}
          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.3334 4H1.33337V21.3333H21.3334V4Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21.3334 10.6665H26.6667L30.6667 14.6665V21.3332H21.3334V10.6665Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M7.33333 28.0002C9.17428 28.0002 10.6667 26.5078 10.6667 24.6668C10.6667 22.8259 9.17428 21.3335 7.33333 21.3335C5.49238 21.3335 4 22.8259 4 24.6668C4 26.5078 5.49238 28.0002 7.33333 28.0002Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M24.6667 28.0002C26.5077 28.0002 28 26.5078 28 24.6668C28 22.8259 26.5077 21.3335 24.6667 21.3335C22.8258 21.3335 21.3334 22.8259 21.3334 24.6668C21.3334 26.5078 22.8258 28.0002 24.6667 28.0002Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Delivery</h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Free worldwide delivery over orders above $100</p>
          </div>

          {/* customer Grid Card */}

          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M28 20C28 20.7072 27.719 21.3855 27.219 21.8856C26.7189 22.3857 26.0406 22.6667 25.3333 22.6667H9.33333L4 28V6.66667C4 5.95942 4.28095 5.28115 4.78105 4.78105C5.28115 4.28095 5.95942 4 6.66667 4H25.3333C26.0406 4 26.7189 4.28095 27.219 4.78105C27.719 5.28115 28 5.95942 28 6.66667V20Z" stroke="#4B5563" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Customer Care</h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
              Our customer care is available 24/7 at <span className=" font-semibold cursor-pointer">+495-589-509</span> and <span className=" font-semibold cursor-pointer">customercare@gmail.com</span>
            </p>
          </div>

          {/* Recycle Grid Card */}

          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.6667 1.3335L28.0001 6.66683L22.6667 12.0002" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 14.6665V11.9998C4 10.5853 4.5619 9.22879 5.5621 8.2286C6.56229 7.22841 7.91885 6.6665 9.33333 6.6665H28" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.33333 30.6667L4 25.3333L9.33333 20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 17.3335V20.0002C28 21.4147 27.4381 22.7712 26.4379 23.7714C25.4377 24.7716 24.0812 25.3335 22.6667 25.3335H4" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Recycle</h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">All out products are 100 percent recycable</p>
          </div>

          {/* Secure Payment Card */}

          <div>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.9999 29.3332C15.9999 29.3332 26.6666 23.9998 26.6666 15.9998V6.6665L15.9999 2.6665L5.33325 6.6665V15.9998C5.33325 23.9998 15.9999 29.3332 15.9999 29.3332Z" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className=" text-xl leading-5 font-semibold text-gray-800 lg:mt-10 mt-8 ">Secure Payment</h3>
            <p className=" text-base leading-6 font-normal text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Transaction process has end to end encryption</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center -mt-20">
        <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800">This Week Blogs</h1>
            <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p>
          </div>
          <div className="lg:flex items-stretch md:mt-12 mt-8">
            <div className="lg:w-1/2">
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                <div className="sm:w-1/2 relative">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                      <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full" alt="chair" />
                </div>
                <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                      <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full" alt="wall design" />
                </div>
              </div>
              <div className="relative">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
                <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
              </div>
            </div>
            <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
              <div className="relative">
                <div>
                  <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                  <div className="absolute bottom-0 left-0 md:p-10 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                    <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                      <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                      <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full sm:block hidden" />
                <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
              </div>
              <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                <div className="relative w-full">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                      <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full" alt="chair" />
                </div>
                <div className="relative w-full sm:mt-0 mt-4">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">12 April 2021</p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">The Decorated Ways</h2>
                      <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p>
                      <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                        <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full" alt="wall design" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:container 2xl:mx-auto 2xl:-mt-10">
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">Quick Shopping</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
            <div className="bg-gray-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img className="" src="https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png" alt="A chair with designed back" />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                <button aria-label="show in red color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="#DC2626" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
                <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
                <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img className="" src="https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png" alt="A chair with wooden legs" />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-8 md:mt-24">
                <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
                <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img className="" src="https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png" alt="A sofa chair with wooden legs" />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                <button aria-label="show in green color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
                <button aria-label="show in brown color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="#92400E" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
            <div className="bg-gray-50 p-8">
              <div>
                <h2 className="text-xl leading-tight text-gray-600">Sectional Sofa</h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">$78900</p>
              </div>
              <div className="flex justify-center items-center mt-28 md:mt-3">
                <img src="https://i.ibb.co/CPdBFwZ/pexels-pixabay-276583-removebg-preview-1-1.png" alt="A large sectional sofa" />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                <button aria-label="show in yellow color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="#F59E0B" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
                <button aria-label="show in light gray color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <div>
                <h2 className="text-xl leading-tight text-gray-600">Two Seater Sofa</h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">$2900</p>
              </div>
              <div className="flex justify-center items-center mt-28 md:mt-1">
                <img src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png" alt="A beautiful two seater sofa" />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
                <button aria-label="show in green color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" strokeWidth="0.5" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="2xl:mx-auto 2xl:container flex justify-center items-center   md:py-12 py-9 xl:px-20 sm:px-6 px-4 ">
            <div className=" xl:w-auto md:flex hidden flex-col space-y-6 xl:space-y-0 xl:flex-row justify-center items-center">
                <div className="flex  justify-between w-full   items-center space-x-6 xl:space-x-8 ">
                    <div className="flex justify-center items-center">
                        <img src="https://i.ibb.co/YDKkv5H/heather-ford-5gk-Ysr-H-eb-Y-unsplash-1.png" alt="shoes and clothes" />
                    </div>
                    <div className="flex flex-col justify-between  xl:mt-0  items-center space-y-6  xl:space-y-8">
                        <div className="flex flex-col xl:flex-row justify-between h-full xl:justify-center items-center space-y-8 xl:space-y-0 xl:space-x-8">
                            <div className="md:w-72 mx-1 md:h-64 lg:mt-4 xl:mt-0  flex flex-col justify-center items-center text-center">
                                <p className=" text-3xl xl:text-4xl font-semibold  leading-7 xl:leading-9 text-center text-gray-800">Our Instagram</p>
                                <p className=" text-base leading-6 mt-3 text-center text-gray-600">Follow us on instagram and tag us to get featured on our timeline</p>
                                <a href="javascript:void(0)" className="focus:outline-none mt-4 focus:underline text-base leading-4 hover:underline text-center text-gray-800">
                                    @Ourinstaname
                                </a>
                            </div>
                            <div className=" ">
                                <img className="hidden xl:block" src="https://i.ibb.co/XYPJ0pQ/nordwood-themes-Nv4-QHk-TVEa-I-unsplash-1.png" alt="jewellery" />
                                <img className="xl:hidden" src="https://i.ibb.co/b51F6gj/nordwood-themes-Nv4-QHk-TVEa-I-unsplash-1-1.png" alt="shoes and clothes" />
                            </div>
                        </div>
                        <div className="hidden xl:flex flex-row justify-center  items-center space-x-6 xl:space-x-8">
                            <div >
                                <img  src="https://i.ibb.co/FD9ZHbF/camilla-carvalho-Y9dc-Qp-OIMHQ-unsplash-1.png" alt="jewellery" />
                            </div>
                            <div >
                                <img  src="https://i.ibb.co/KxxFD8R/jonathan-francisca-YHbcum51-JB0-unsplash-1.png" alt="watch" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" xl:hidden flex flex-row justify-between   space-x-6 xl:space-x-8">
                    <div >
                        <img  src="https://i.ibb.co/FD9ZHbF/camilla-carvalho-Y9dc-Qp-OIMHQ-unsplash-1.png" alt="jewellery" />
                    </div>
                    <div >
                        <img  src="https://i.ibb.co/KxxFD8R/jonathan-francisca-YHbcum51-JB0-unsplash-1.png" alt="watch" />
                    </div>
                </div>
            </div>
            {/* mobile responsive */}
            <div className="md:hidden flex justify-center items-center flex-col">
                <div className="w-80  flex flex-col justify-center items-center text-center">
                    <p className=" text-3xl lg:text-4xl font-semibold  leading-7 lg:leading-9 text-center text-gray-800">Our Instagram</p>
                    <p className=" text-base leading-6 mt-3 text-center text-gray-600">Follow us on instagram and tag us to get featured on our timeline</p>
                    <a href="javascript:void(0)" className="focus:outline-none mt-4 focus:underline text-base leading-4 hover:underline text-center text-gray-800">
                        @Ourinstaname
                    </a>
                </div>
                <div className="mt-8 flex flex-col justify-center space-y-4">
                    <img src="https://i.ibb.co/dpQZWPz/heather-ford-5gk-Ysr-H-eb-Y-unsplash-1.png" alt="shoes and clothes" />
                    <img src="https://i.ibb.co/b51F6gj/nordwood-themes-Nv4-QHk-TVEa-I-unsplash-1-1.png" alt="shoes and clothes" />
                    <img src="https://i.ibb.co/2c03gv4/camilla-carvalho-Y9dc-Qp-OIMHQ-unsplash-1.png" alt="jewellery" />
                    <img src="https://i.ibb.co/PDMYNxh/jonathan-francisca-YHbcum51-JB0-unsplash-1.png" alt="watch" />
                </div>
            </div>
        </div>
        <div className="2xl:mx-auto 2xl:container mx-4 -mt-16 py-16">
            <div className=" w-full  relative flex items-center justify-center">
                <img src="https://i.ibb.co/4sYZ8gC/img-2.png" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0  sm:hidden " />
                <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                        Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />a week on every friday so subscribe to get latest news and updates.
                    </p>
                    <div className="sm:border border-white flex-col sm:flex-row  flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                        <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage