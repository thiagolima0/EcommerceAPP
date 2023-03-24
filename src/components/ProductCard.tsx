import { toast } from "react-hot-toast";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { CartItem, useCartContext } from "../contexts";
import { numberToUSD } from "../utils/numberToUSD";

interface ProductCardProps {
  product: CartItem;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItemCart } = useCartContext();
  const navigate = useNavigate();

  return (
    <div className="flex h-80 flex-col rounded-lg border border-background">
      <img
        onClick={() => navigate(`/product/${product.productId}`)}
        loading="lazy"
        className="h-3/4 w-full cursor-pointer rounded-t-lg object-cover"
        src={product.url}
      />
      <div className="relative flex flex-1 flex-col justify-center px-3">
        <span className="text-lg font-semibold truncate">{product.name}</span>
        <span className="text-lg font-semibold">
          {numberToUSD(product.price)}
        </span>
        <button
          onClick={() => {
            addItemCart(product);
            toast.success("Added to cart!");
          }}
          className="absolute -top-6 right-6 hover:scale-125 duration-300 flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-md"
        >
          <HiShoppingCart color="white" size={20} />
        </button>
      </div>
    </div>
  );
};
