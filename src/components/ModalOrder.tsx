import { useState } from "react";
import { Link } from "react-router-dom";
import OrderComplete from "../assets/order-complete.svg";

interface ModalOrderProps {
  showModal: boolean;
}

export const ModalOrder = ({ showModal }: ModalOrderProps) => {
  return (
    <>
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-3/4 my-6 mx-auto max-w-3xl">
              <div className="rounded-lg shadow-lg relative items-center justify-center flex flex-col w-full bg-white outline-none focus:outline-none py-4">
                <div className="flex items-center justify-center p-5">
                  <h3 className="text-3xl font-semibold">
                    Thank you for order!
                  </h3>
                </div>
                <div className="flex flex-col h-full w-full justify-center items-center px-5">
                  <p className="text-xl leading-relaxed text-gray-500">
                    We will send a process notification, before it delivered.
                  </p>
                  <p className="text-xl leading-relaxed">
                    Your order id:{" "}
                    <span className="text-primary">
                      dff796c4-1a08-5768-97e3-bd65d98b1559
                    </span>
                  </p>
                  <div className="m-4 items-center">
                    <img src={OrderComplete} alt="" />
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 ">
                  <Link
                    to="/"
                    className="rounded-lg  bg-primary/30 px-4 py-2 font-medium text-primary duration-300 hover:bg-primary/25"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};
