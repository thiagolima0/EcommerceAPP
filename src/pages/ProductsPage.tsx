import React from "react";
import { ListGroup, ProductCard } from "../components";
import { HiOutlineSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

export const ProductsPage = () => {
  return (
    <>
      <div className="flex flex-row rounded-lg border border-background/50 shadow-md">
        <div className="hidden rounded-lg border border-background/50 sm:block sm:w-1/2  md:w-1/3 lg:w-1/6">
          <ListGroup />

          <div className="m-5 flex flex-col gap-4 border-b pb-5 text-black/70">
            <span className="text-xl font-semibold">Price</span>
            <ul className="flex flex-col gap-4 font-medium">
              <li className="flex items-center  gap-2">
                <input type="radio" />
                <span>Below $10</span>
              </li>
              <li className="flex items-center  gap-2">
                <input type="radio" />
                <span>$10 - $50</span>
              </li>
              <li className="flex items-center  gap-2">
                <input type="radio" />
                <span>$50 - $100</span>
              </li>
              <li className="flex items-center  gap-2">
                <input type="radio" />
                <span>Over $100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full flex-row flex-wrap p-6 ">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">Products</h2>
            <div className="relative">
              <input
                placeholder="Search Product"
                type="text"
                className="block w-full rounded-lg border border-background bg-gray-50 px-8  py-2.5 text-sm text-gray-900 outline-none"
              />
              <div className="absolute left-2 top-3">
                <HiOutlineSearch size={20} color="grey" />
              </div>
            </div>
          </div>

          <div className="xs:grid-cols-1 mt-4 grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            <Link to="product/1">
              <ProductCard url={`https://picsum.photos/400?image=1`} />
            </Link>
            <Link to="product/1">
              <ProductCard url={`https://picsum.photos/400?image=2`} />
            </Link>
            <Link to="product/1">
              <ProductCard url={`https://picsum.photos/400?image=3`} />
            </Link>
            <Link to="product/1">
              <ProductCard url={`https://picsum.photos/400?image=4`} />
            </Link>
            <Link to="product/1">
              <ProductCard url={`https://picsum.photos/400?image=8`} />
            </Link>
            <Link to="product/1">
              <ProductCard url={`https://picsum.photos/400?image=6`} />
            </Link>
            <Link to="product/1">
              <ProductCard />
            </Link>
            <Link to="product/1">
              <ProductCard />
            </Link>
            <Link to="product/1">
              <ProductCard />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
