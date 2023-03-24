import { useCartContext } from "../contexts";

interface QuantityProductsProps {
  quantity: number;
  productId: number;
  setQuantity?: React.Dispatch<React.SetStateAction<number>>;
}

export const QuantityProducts = ({
  quantity,
  productId,
  setQuantity,
}: QuantityProductsProps) => {
  const { increaseItemQuantity, decreaseItemQuantity } = useCartContext();

  return (
    <div className="flex h-12 w-32 items-center justify-between rounded-md border ">
      <button
        disabled={quantity <= 1}
        className="h-12 w-1/3 disabled:bg-gray-100 text-2xl font-semibold duration-300 hover:bg-gray-100"
        onClick={() => {
          if (setQuantity) {
            setQuantity((value) => value - 1);
          }
          decreaseItemQuantity(productId);
        }}
      >
        -
      </button>
      <span className="w-1/3 text-center text-xl outline-none">{quantity}</span>
      <button
        className="h-12 w-1/3 text-2xl font-semibold duration-300 hover:bg-gray-100"
        onClick={() => {
          if (setQuantity) {
            setQuantity((value) => value + 1);
          }
          increaseItemQuantity(productId);
        }}
      >
        +
      </button>
    </div>
  );
};
