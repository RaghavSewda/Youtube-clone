import React from "react";
import Button from "./Button";

const List = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Chess",
  "News",
];
const ButtonList = () => {
  return (
    <div className="flex justify-center">
      {List.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
