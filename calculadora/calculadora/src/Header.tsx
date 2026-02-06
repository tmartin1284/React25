import React from "react";
type Item = {
  id: number;
  name: string;
};

type Props = {
  title: string;
  idea: number;
  items: Item[];
};

const Header: React.FC<Props> = ({ title, idea, items }) => {
  return (
    <h1>
      {title} + aaaaa {idea}{" "}
      {items.map((item) => (
        <span key={item.id}>{item.name} </span>
      ))}
    </h1>
  );
};

export default Header;
