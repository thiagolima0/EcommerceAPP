import { useQuery } from "react-query";
import { Api } from "../../providers/Api";
import { ListGroup } from "../ListGroup";

export const MenuCategory = () => {
  const { data: categories } = useQuery(["categories"], async () => {
    const { data } = await Api.get("/users");
    return data;
  });

  return <ListGroup title="Categories" list={categories} />;
};
