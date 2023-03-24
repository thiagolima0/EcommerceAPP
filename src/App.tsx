import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import {
  CartProvider,
  FilterContextProvider,
  useCartContext,
} from "./contexts";
import { ProductsPage, ProductDetail, Checkout } from "./pages";

const queryClient = new QueryClient();

const Header = () => {
  const { quantityCart } = useCartContext();
  const [title, setTitle] = useState("");

  return (
    <>
      <div className="mt-4 flex h-28 items-center justify-between rounded-lg bg-primary/10 px-6">
        <div>
          <h1 className="text-2xl font-semibold">Shop</h1>
          <ul>
            <li>{title} </li>
          </ul>
        </div>

        <Link
          to="/checkout"
          className="w-12 h-12 relative flex justify-center bg-white items-center border border-black/20 rounded-full"
        >
          <HiOutlineShoppingCart className="text-primary" size={24} />
          <div className="h-5 w-5 top-0 right-0 translate-x-2 flex justify-center items-center absolute font-semibold text-white bg-negative rounded-full">
            {quantityCart()}
          </div>
        </Link>
      </div>
      <Outlet context={{ setTitle }} />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <div>Page not found!</div>,
    children: [
      {
        path: "/",
        element: <ProductsPage title="Shop" />,
      },
      {
        path: "product/:id",
        element: <ProductDetail title="Product Details" />,
      },
      {
        path: "checkout",
        element: <Checkout title="Checkout" />,
      },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <FilterContextProvider>
        <QueryClientProvider client={queryClient}>
          <div className="container mx-auto flex flex-col gap-y-4">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </FilterContextProvider>
    </CartProvider>
  );
}

export default App;
