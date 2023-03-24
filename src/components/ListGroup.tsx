import { useFilterContext } from "../contexts";

type ListGroupProps = {
  title: string;
  list: {
    id: number;
    name: string;
  }[];
};

export const ListGroup = ({ title, list }: ListGroupProps) => {
  const { addCategory, categoryIds } = useFilterContext();

  return (
    <div className="m-5 flex flex-col gap-4 border-b pb-5 text-black/70">
      <h4 className="text-xl font-semibold">{title}</h4>
      <ul className="w-48 text-sm font-medium">
        {list?.map((item) => {
          return (
            <li key={item.id} className="w-full">
              <div className="flex items-center ">
                <input
                  id={`${item.id}`}
                  defaultChecked={categoryIds.includes(item.id)}
                  type="checkbox"
                  className="w-5 h-5 outline-none"
                  onClick={() => addCategory(item.id)}
                />
                <label
                  htmlFor={String(item.id)}
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {item.name}
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
