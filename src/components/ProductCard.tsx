import React from "react";
import { HiShoppingCart } from "react-icons/hi";

interface Props {
  url?: string;
}

export const ProductCard = ({ url }: Props) => {
  const uri =
    "https://media.wired.co.uk/photos/606d9de1a876dd2203a63d29/3:2/pass/ps-wired-2.jpg";

  return (
    <div className="flex h-80 flex-col rounded-lg border border-background duration-300 hover:scale-105">
      <img
        loading="lazy"
        className="h-3/4 w-full rounded-t-lg object-cover "
        src={url ? url : uri}
      />
      <div className="relative flex flex-1 flex-col justify-center px-3">
        <span className="text-lg font-semibold">MacBook Air Pro</span>
        <span className="text-lg font-semibold">$15</span>
        <button className="absolute -top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md">
          <HiShoppingCart color="white" size={20} />
        </button>
      </div>
    </div>
  );
};
