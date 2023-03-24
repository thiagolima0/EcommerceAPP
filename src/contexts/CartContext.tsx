import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { increaseByValue } from "../utils";

type CartProviderProps = {
  children: ReactNode;
};

type CartContext = {
  getItemQuantity: (id: number) => number;
  addItemCart: (item: CartItem) => void;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItemCart: (id: number) => void;
  totalItemsCart: () => number;
  quantityCart: () => number;
  cartItems: CartItem[];
  totalPrice: () => number;
};

export type CartItem = {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  url: string;
  categoryId: number;
};

const CartContext = createContext({} as CartContext);

export const useCartContext = () => {
  return useContext(CartContext);
};

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const setProductQuantity = (
    products: any,
    product: CartItem,
    quantityFn: any
  ): CartItem[] => {
    return products.map((item: any) => {
      if (item.productId === product.productId) {
        return {
          ...item,
          quantity: quantityFn(item.quantity, product.quantity || 1),
        };
      } else {
        return item;
      }
    });
  };

  const getItemQuantity = (id: number) => {
    return cartItems.find((item) => item.productId === id)?.quantity || 1;
  };
  const addItemCart = (product: CartItem) => {
    setCartItems((currentItems) => {
      if (!currentItems.some((item) => item.productId === product.productId)) {
        return [
          ...currentItems,
          { ...product, quantity: product.quantity || 1 },
        ];
      } else {
        return setProductQuantity(currentItems, product, increaseByValue);
      }
    });
  };

  const decreaseItemQuantity = (productId: number) => {
    if (productId) {
      setCartItems((currentItems) => {
        return currentItems.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      });
    }
  };

  const removeItemCart = (id: number) => {
    setCartItems((currentItem) => {
      return currentItem.filter((item) => item.productId !== id);
    });
  };

  const totalItemsCart = () => {
    return cartItems.reduce(
      (quantatity, currentItem) => quantatity + currentItem.quantity,
      0
    );
  };

  const quantityCart = () => {
    return cartItems.length;
  };

  const totalPrice = () => {
    return cartItems.reduce(
      (price, currentItem) => price + currentItem.price * currentItem.quantity,
      0
    );
  };

  const increaseItemQuantity = (id: number) => {
    cartItems.find((item) => item.productId === id);
  };

  return (
    <CartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        addItemCart,
        removeItemCart,
        totalItemsCart,
        quantityCart,
        totalPrice,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
