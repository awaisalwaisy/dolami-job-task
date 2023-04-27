import { AppText } from "components/shared";
import HomeAsideCategory from "./HomeAsideCategory";
import { categories } from "./data";
import HomeAsideFilters from "./HomeAsideFilters";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useWindowSize } from "usehooks-ts";
import { filters } from "./data";
import HomeAsideFilterPrice from "./HomeAsidePriceFilter";

const HomeAside: React.FC<HomeAsideProps> = ({
  toggleAside,
  handlePriceFilter,
}) => {
  const { width } = useWindowSize();

  const slicedNoPrice = Object.keys(filters)
    .slice(0, 1)
    .reduce((result: any, key) => {
      result[key] = filters[
        key as HomeAsideFilterKeys
      ] as HomeAsideFilterItem[];
      return result;
    }, {});

  const slicedNoPriceRem = Object.keys(filters)
    .slice(2)
    .reduce((result: any, key) => {
      result[key] = filters[
        key as HomeAsideFilterKeys
      ] as HomeAsideFilterItem[];
      return result;
    }, {});

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
        <HomeAsideFilters filters={slicedNoPrice} />
        <HomeAsideFilterPrice handlePriceFilter={handlePriceFilter} />
        <HomeAsideFilters filters={slicedNoPriceRem} />
      </div>
    </div>
  );
};

export default HomeAside;
