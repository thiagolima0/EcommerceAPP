import { createContext, useContext, ReactNode, useState } from "react";

type FilterContextType = {
  categoryIds: number[];
  query: string;
  setQuery: (query: string) => void;
  addCategory: (id: number) => void;
};

type FilterContextProps = {
  children?: ReactNode;
};

const FilterContext = createContext({} as FilterContextType);

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export const FilterContextProvider = ({ children }: FilterContextProps) => {
  const [categoryIds, setCategoryIds] = useState<number[]>([]);
  const [query, setQuery] = useState("");

  function addCategory(id: number) {
    setCategoryIds((items) => {
      if (items.find((item) => item === id)) {
        return items.filter((i) => i !== id);
      } else {
        return [...items, id];
      }
    });
  }

  return (
    <FilterContext.Provider
      value={{ categoryIds, query, addCategory, setQuery }}
    >
      {children}
    </FilterContext.Provider>
  );
};
