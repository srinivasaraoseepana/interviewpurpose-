import React, { useState } from "react";
import { CourseItem } from "./CourseItem";

interface RecursiveStructureProps {
  data: CourseItem[];
}

export const RecursiveStructure = ({ data }: RecursiveStructureProps) => {
  return (
    <ul style={{ listStyleType: "none", paddingLeft: "1rem" }}>
      {data.map((item, index) => (
        <TreeNode key={index} node={item} />
      ))}
    </ul>
  );
};

const TreeNode: React.FC<{ node: CourseItem }> = ({ node }) => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded(!expanded);

  return (
    <li>
      <div
        style={{
          cursor: "pointer",
          margin: 8,
          color: node.children ? "green" : "red",
          fontSize: 20,
          fontWeight: node.children ? "bold" : "normal",
        }}
        onClick={toggle}
      >
        {node.label}
      </div>

      {node.children && expanded && <RecursiveStructure data={node.children} />}
    </li>
  );
};
