import { Loading, ProductCard } from "../components";
import { HiOutlineSearch } from "react-icons/hi";
import { useQuery } from "react-query";
import { MenuCategory } from "../components/layout";
import { Api } from "../providers/Api";
import { CartItem, useFilterContext } from "../contexts";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

interface ProductsPageProps {
  title: string | null;
}

export const ProductsPage = ({ title }: ProductsPageProps) => {
  const { categoryIds } = useFilterContext();
  const [filterProduct, setFilterProduct] = useState<string | null>(null);

  const { setTitle } = useOutletContext<any>();

  useEffect(() => {
    setTitle(title);
  }, []);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery(
    ["products"],
    async () => {
      const { data } = await Api.get("/todos", {
        params: {
          userId: categoryIds,
          title_like: `^${filterProduct === null ? "" : filterProduct}`,
        },
      });

      return data.map(
        ({ title: name, userId: categoryId, id: productId }: any) => ({
          name,
          categoryId,
          productId,
          price: name.length * productId,
          url: `https://picsum.photos/700?image=${productId}`,
        })
      );
    },
    {
      enabled: !categoryIds?.length,
    }
  );

  useEffect(() => {
    refetch();
  }, [categoryIds]);

  useEffect(() => {
    if (filterProduct !== null) {
      const timeOutId = setTimeout(() => refetch(), 250);
      return () => clearTimeout(timeOutId);
    }
  }, [filterProduct]);

  return (
    <>
      <div className="flex flex-row rounded-lg border border-background/50 shadow-md">
        <div className="hidden rounded-lg border border-background/50 sm:block sm:w-1/2  md:w-1/3 lg:w-1/6">
          <MenuCategory />
        </div>
        <div className="w-full flex-row flex-wrap p-6">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">
              Products ({products?.length})
            </h2>
            <div className="relative">
              <input
                onChange={(event) => setFilterProduct(event.target.value)}
                placeholder="Search Product"
                type="text"
                className="block w-full rounded-lg border border-background bg-gray-50 px-8  py-2.5 text-sm text-gray-900 outline-none"
              />
              <div className="absolute left-2 top-3">
                <HiOutlineSearch size={20} color="grey" />
              </div>
            </div>
          </div>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="xs:grid-cols-1 mt-4 grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
              {products?.map((product: CartItem) => {
                return (
                  <ProductCard product={product} key={product.productId} />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
