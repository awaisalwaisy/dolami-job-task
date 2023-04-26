import { AppText } from "components/shared";
import React from "react";
import HomeAsideCategory from "./HomeAsideCategory";
import { categories } from "./data";
import HomeAsideFilters from "./HomeAsideFilters";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useWindowSize } from "usehooks-ts";

const HomeAside: React.FC<{ toggleAside: (val: boolean) => void }> = ({
  toggleAside,
}) => {
  const { width } = useWindowSize();

  return (
    <div className="w-64 fixed top-[90px] bottom-0 overflow-y-scroll">
      {width < 768 && (
        <div
          className="w-full flex justify-end cursor-pointer"
          onClick={() => toggleAside(false)}
        >
          <XMarkIcon className="h-8 w-8" />
        </div>
      )}
      <div id="category" className="mb-5">
        <AppText as="h4" size="lg" weight="bold" className={"font-inter"}>
          Category
        </AppText>
        <HomeAsideCategory name="Category" options={categories} />
      </div>
      <div id="filters">
        <HomeAsideFilters />
      </div>
    </div>
  );
};

export default HomeAside;
