import { useState } from "react";
import { DataItem } from "./interfaces";
type Props = {
  data: DataItem[];
};

const TypesAndInterface = ({ data }: Props) => {
  return (
    <div>
      {data.map((item: DataItem) => (
        <div key={item.id}>
          <h4>{`${item.id}  name: ${item.name}`}</h4>
          <h5>{`role: ${item.role}`} </h5>
          {item?.skills && <h3> {`skills: ${item.skills.join(",")}`} </h3>}
          {item.contact &&
            Object.entries(item.contact).map(([x, y]) => {
              return (
                <div>
                  <h3>{`${x}:${y}`} </h3>
                </div>
              );
            })}

          {item.meta && <h3>{`projects: ${item.meta.projects.join(",")}`} </h3>}

          {item.meta &&
            Object.entries(item.meta.address).map(([key, value]) => {
              return (
                <div key={key}>
                  <h1>{`${key}: ${value}`}</h1>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default TypesAndInterface;
