import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ProductDetail = () => {
  const [count, setCount] = useState(1);

  return (
    <div className="p-auto flex flex-col justify-center rounded-lg border border-background/50 shadow-md sm:flex-row sm:p-4">
      <div className="flex w-auto justify-center sm:w-2/3 sm:justify-start">
        <img
          className="w-full rounded-lg object-cover"
          src="https://picsum.photos/700?image=1"
          alt=""
          loading="lazy"
        />
      </div>
      <div className="flex w-full flex-col gap-y-2 px-4 py-4 sm:py-0">
        <div className="flex gap-2">
          <div className="flex h-7 w-20 items-center justify-center rounded-full bg-positive  text-center text-white">
            In Stock
          </div>
          <div className="font-medium leading-relaxed text-black/60">
            Category
          </div>
        </div>

        <div className="flex flex-col gap-2 py-2">
          <div className="text-2xl font-semibold">MacBook Air Pro</div>
          <div className="mt-3 font-medium leading-tight text-black/60">
            Nivujapu rugugor gigbegi lisvabnun senam ohozufe womoezu odip tuw
            mokduz itno nissad ku feglo muamo pouf apsizra. Dibeset izunothob
            itenuzad wohrieh ibe romsehun nud li mehte su docualo vin vuol dizif
            hupzarliv ded bik tadepod.
          </div>
        </div>

        <div className="flex flex-col justify-center gap-y-6 border-y py-6 ">
          <div className="flex items-end gap-2">
            <div className="text-lg font-medium text-black/40 line-through">
              $12
            </div>
            <div className="text-4xl font-semibold">$15</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-semibold">Quantity</div>
            <div className="flex h-12 w-32 items-center justify-between rounded-md border  ">
              <button
                className="h-12 w-1/3 text-2xl font-semibold duration-300 hover:bg-gray-100"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <input
                className="h-10 w-1/3 text-center text-xl outline-none"
                value={count}
                onChange={({ target }) => setCount(Number(target.value))}
              />
              <button
                className="h-12 w-1/3 text-2xl font-semibold duration-300 hover:bg-gray-100"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 py-6">
          <Link
            to="/checkout"
            className="flex h-10 w-full items-center justify-center rounded-lg bg-primary px-6 font-medium text-white duration-300 hover:scale-105 hover:bg-primary/80 hover:shadow-md sm:w-auto"
          >
            Buy Now
          </Link>
          <button className="flex h-10 w-full items-center justify-center rounded-lg  bg-warning px-6 font-medium text-white duration-300 hover:scale-105 hover:bg-warning/80 hover:shadow-md sm:w-auto">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
