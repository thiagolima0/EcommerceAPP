import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";
import { Link, useOutletContext, useParams } from "react-router-dom";
import { Loading, QuantityProducts } from "../components";
import { CartItem, useCartContext } from "../contexts";
import { Api } from "../providers/Api";

interface ProductDetailProps {
  title: string;
}

export const ProductDetail = ({ title }: ProductDetailProps) => {
  const { setTitle } = useOutletContext<any>();

  useEffect(() => {
    setTitle(title);
  }, []);

  const { addItemCart } = useCartContext();

  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const { data: product, isLoading } = useQuery(["productId"], async () => {
    const { data } = await Api.get(`/todos/${id}`);

    const { title: name, userId: categoryId, id: productId } = data;
    return {
      name,
      categoryId,
      productId,
      price: name.length * productId,
      url: `https://picsum.photos/700?image=${productId}`,
    };
  });

  if (isLoading) return <Loading />;

  return (
    <div className="p-auto flex flex-col justify-center w-full rounded-lg border border-background/50 shadow-md sm:flex-row sm:p-4">
      <div className="flex w-auto justify-center sm:w-2/3 sm:justify-start">
        <img
          className="w-full rounded-lg object-cover"
          src={product?.url}
          alt=""
          loading="lazy"
        />
      </div>
      <div className="flex w-full flex-col gap-y-2 px-4 py-4 sm:py-0">
        <div className="flex gap-2">
          <div className="flex h-7 w-20 items-center justify-center rounded-full bg-positive  text-center text-white">
            In Stock
          </div>
        </div>

        <div className="flex flex-col gap-2 py-2">
          <div className="text-2xl font-semibold">{product?.name}</div>
          <div className="mt-3 font-medium leading-tight text-black/60">
            Nivujapu rugugor gigbegi lisvabnun senam ohozufe womoezu odip tuw
            mokduz itno nissad ku feglo muamo pouf apsizra. Dibeset izunothob
            itenuzad wohrieh ibe romsehun nud li mehte su docualo vin vuol dizif
            hupzarliv ded bik tadepod.
          </div>
        </div>
        <div className="flex flex-col justify-center gap-y-6 border-y py-6 ">
          <div className="flex items-end gap-2">
            <div className="text-4xl font-semibold">${product?.price}</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-lg font-semibold">Quantity</div>
            <QuantityProducts
              quantity={quantity}
              productId={product?.productId}
              setQuantity={setQuantity}
            />
          </div>
        </div>

        <div className="flex gap-4 py-6">
          <Link
            to="/checkout"
            onClick={() => addItemCart({ ...(product as CartItem), quantity })}
            className="flex h-10 w-full items-center justify-center rounded-lg bg-primary px-6 font-medium text-white duration-300 hover:scale-105 hover:bg-primary/80 hover:shadow-md sm:w-auto"
          >
            Buy Now
          </Link>
          <button
            onClick={() => {
              addItemCart({
                ...(product as CartItem),
                quantity,
              });
              toast.success("Added to cart!");
            }}
            className="flex h-10 w-full items-center justify-center rounded-lg  bg-warning px-6 font-medium text-white duration-300 hover:scale-105 hover:bg-warning/80 hover:shadow-md sm:w-auto"
          >
            Add To Cart
          </button>
        </div>

        <div className="flex flex-col justify-end  h-full ">
          <div>
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
  );
};
