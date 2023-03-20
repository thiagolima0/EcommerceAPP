import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ProductsPage, ProductDetail, Checkout } from "./pages";

const Header = () => (
  <>
    <div className="mt-4 flex h-28 flex-col justify-center rounded-lg bg-primary/10 px-6">
      <h1 className="text-2xl font-semibold">Shop</h1>
      <ul>
        <li>Shop</li>
      </ul>
    </div>
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <div>Page not found!</div>,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="container mx-auto flex flex-col gap-y-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
