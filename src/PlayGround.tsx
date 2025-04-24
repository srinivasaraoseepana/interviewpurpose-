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
import TheatreMovieData from "./project3/TheatreMovieData";

interface Props {}

const PlayGround = (props: Props) => {
  return (
    <div>
      {/* <FormData/> */}
      {/* <TypesAndInterface data={data} /> */}
      {/* <States/> */}
      {/* <FormWithHookForm /> */}
      {/* <RecursiveStructure data={courses} /> */}
      <TheatreMovieData />
    </div>
  );
};

export default PlayGround;
