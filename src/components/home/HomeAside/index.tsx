import { AppText } from "components/shared";
import React from "react";
import HomeAsideCategory from "./HomeAsideCategory";
import { categories } from "./data";
import HomeAsideFilters from "./HomeAsideFilters";

const HomeAside: React.FC = () => {
  return (
    <div className="border">
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
