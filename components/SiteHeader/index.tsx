import React from "react";
import Link from "next/link";
import { usePlayerContext } from "@/context/PlayerContext";

export default function SiteHeader() {
  const { searchTerm, setSearchTerm } = usePlayerContext();

  return (
    <header className="w-full fixed top-0 z-20 border-b-2	border-black bg-[rgba(255,255,255,0.1)] backdrop-blur-xl">
      <nav className="container mx-auto">
        <div className="px-4 lg:flex flex-wrap lg:justify-between items-center">
          <Link href="/`" className="flex items-center text-black">
            <span className="self-center text-xl font-semibold whitespace-nowrap">
              Melo Wave
            </span>
          </Link>

          <form className="lg:ml-24 lg:mr-auto">
            <div className="relative">
              <div className="absolute inset-y-0 right-4 flex items-center pl-4 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full lg:w-[500px] p-4 pl-4 text-sm text-white dark:bg-[#050505] dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                required
              />
            </div>
          </form>

          <div className="flex items-center lg:order-2">
            <Link
              href="#"
              className="text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Artist
            </Link>
            <Link
              href="#"
              className="text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Radio
            </Link>
            <Link
              href="#"
              className="text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Programme
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
