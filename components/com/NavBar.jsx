import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavBar({ Products, setProducts, ShoppingCart }) {
  const [SearchValue, setSearchValue] = useState("");

  useEffect(() => {
    const NewArrange = Products.filter((product, index) => {
      return product.title.toLowerCase().includes(SearchValue.toLowerCase());
    });
    setProducts([
      ...NewArrange,
      ...Products.filter((product, index) => {
        return !product.title.toLowerCase().includes(SearchValue.toLowerCase());
      }),
    ]);
  }, [SearchValue]);

  return (
    <nav className="bg-white z-40 shadow-sm sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
        <div className="flex items-center justify-between md:justify-start">
          <button
            type="button"
            className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center"
          >
            <svg
              className="text-gray-500 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <Link href="/">
            <a className="font-bold text-gray-700 text-2xl">Shop.</a>
          </Link>

          <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
            <Link href="/electronics">
              <a className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                Electronics
              </a>
            </Link>
            <Link href="/fashion">
              <a className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                Fashion
              </a>
            </Link>
            <Link href="/tools">
              <a className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                Tools
              </a>
            </Link>
            <Link href="/books">
              <a className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                Books
              </a>
            </Link>
            <Link href="/more">
              <a className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
                More
              </a>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="search"
                className="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                placeholder="Search For products"
                onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                value={SearchValue}
              />
              <svg
                className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {/* shopping cart */}
            <a
              className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
              href="#!/cart"
            >
              <svg
                className="h-6 w-6 leading-none text-gray-300 stroke-current"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="pl-1 text-gray-500 text-md">
                {/* {ShoppingCart.length} */}
                <div className="snipcart-summary">
                  <span className="snipcart-total-items">0</span>
                </div>
              </span>
            </a>

            <button
              type="button"
              className="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
            >
              <img
                src="https://avatars.dicebear.com/api/bottts/2.svg"
                alt="bottts"
                width="28"
                height="28"
                className="rounded-lg mx-auto"
              />
            </button>
          </div>
        </div>

        <div className="relative md:hidden">
          <input
            type="search"
            className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
            placeholder="Search"
            onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            value={SearchValue}
          />

          <svg
            className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
