import { useEffect } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { Link, useOutletContext } from "react-router-dom";
import { QuantityProducts } from "../components";
import { useCartContext } from "../contexts";
import { numberToUSD } from "../utils/numberToUSD";

interface CheckoutProps {
  title: string;
}

export const Checkout = ({ title }: CheckoutProps) => {
  const { quantityCart, cartItems, removeItemCart, totalPrice } =
    useCartContext();

  const { setTitle } = useOutletContext<any>();

  useEffect(() => {
    setTitle(title);
  }, []);

  return (
    <div className="flex flex-col gap-5 rounded-lg border border-background/50 p-6 shadow-md">
      <div className="text-2xl font-semibold">
        Cart Item ({quantityCart()}){" "}
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-y font-bold">
            <tr>
              <th className="px-6 py-3">Product</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Quantity</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((product) => {
              return (
                <tr key={product.productId} className="border-b bg-white">
                  <th className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 ">
                    <div className="flex items-center gap-2">
                      <img
                        className="h-14 w-14 rounded-lg object-cover"
                        src={product.url}
                        alt="Product Image"
                      />
                      <span>{product.name}</span>
                    </div>
                  </th>
                  <td className="px-6 py-4">{numberToUSD(product.price)}</td>
                  <td className="px-6 py-4">
                    <QuantityProducts
                      productId={product.productId}
                      quantity={product.quantity}
                    />
                  </td>
                  <td className="px-6 py-4">
                    {numberToUSD(product.price * product.quantity)}
                  </td>

                  <td>
                    <button
                      onClick={() => removeItemCart(product.productId)}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center  rounded-full duration-300 hover:bg-gray-100"
                    >
                      <HiOutlineTrash size={22} className="text-negative" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-12 flex w-full flex-col rounded-lg border p-4">
        <span className="text-xl font-semibold">Order Summary</span>
        <ul className="flex flex-col gap-2.5 p-4 font-medium text-secondary">
          <li className="flex justify-between">
            <div>Sub Total</div>
            <div>$25</div>
          </li>
          <li className="flex justify-between">
            <div>Shipping Charges</div>
            <div>-</div>
          </li>
          <li className="flex text-lg justify-between font-bold text-black">
            <div>Total</div>
            <div>{numberToUSD(totalPrice())}</div>
          </li>
        </ul>
      </div>

      <div className="mt-10 flex w-full justify-between">
        <Link
          to="/"
          className="rounded-lg bg-primary/30 px-4 py-2 font-medium text-primary duration-300 hover:bg-primary/25"
        >
          Continue Shopping
        </Link>

        <button className="rounded-lg bg-primary px-4 py-2 font-medium text-white duration-300 hover:bg-primary/90">
          Complete Order
        </button>
      </div>
    </div>
  );
};
