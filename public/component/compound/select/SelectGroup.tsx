import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SelectGroup = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <select>{children}</select>
    </div>
  );
};

const OptionItem = (props: Props) => {
  return (
    <div>
      <option value="1">Option 1</option>
    </div>
  );
};

export default SelectGroup;

SelectGroup.OptionItem = OptionItem;
