import React from "react";
import TypesAndInterface from "./project1/TypesAndInterface";
import { data } from "./project1/data";
import States from "./project1/StateCapital";
import FormData from "./project1/FormData";
import FormWithHookForm from "./project1/FormData";
import HookFormWithZod, {
  RecursiveStructure,
} from "./project1/RecursiveStructure";
import { courses } from "./project1/recursiveData";
import TheatreMovieData from "./project3/PracticeEx";

import PracticeEx from "./project3/PracticeEx";

import OrdersList from "./project4/OrdersListPagination";
import ProductSearch from "./DummyInputsSearch/ProductSearch";
interface Props {}

const orders = [
  { id: 1, name: "Mahesh", product: "Laptop" },
  { id: 2, name: "Namrata", product: "Phone" },
  { id: 3, name: "Goutam", product: "Shoes" },
  { id: 4, name: "Sitara", product: "Laptop" },
  { id: 5, name: "Ajay", product: "Phone" },
  { id: 6, name: "Laya", product: "Shoes" },
];
const PlayGround = (props: Props) => {
  return (
    <div>
      {/* <FormData/> */}
      {/* <TypesAndInterface data={data} /> */}
      {/* <States/> */}
      {/* <FormWithHookForm /> */}
      {/* <RecursiveStructure data={courses} /> */}
      {/* <PracticeEx /> */}
      {/* <OrdersList data={orders} /> */}
      <ProductSearch />
    </div>
  );
};

export default PlayGround;
