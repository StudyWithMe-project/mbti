import React, { ReactNode } from "react";
import SelectGroup from "./select/SelectGroup";

interface MainProps {
  children: ReactNode;
}

const CompoundMain = (props: MainProps) => {
  return (
    <div>
      <SelectGroup>
        <SelectGroup.OptionItem></SelectGroup.OptionItem>
      </SelectGroup>
    </div>
  );
};

export default CompoundMain;
