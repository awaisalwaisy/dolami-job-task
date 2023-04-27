import { AppText } from "components/shared";
import { filters } from "./data";
import { useState } from "react";

const HomeAsideFilterPrice: React.FC<HomeAsidePriceFilterProps> = ({
  handlePriceFilter,
}) => {
  const [selected, setSelected] = useState<string>();

  const toggleCheckbox = (
    e: React.ChangeEvent<HTMLInputElement>,
    val: string
  ) => {
    setSelected(val);
    handlePriceFilter(e);
  };

  return (
    <div id="price" className="mb-5">
      {
        <>
          <AppText as="h4" size="lg" weight="bold" className={"font-inter"}>
            Price
          </AppText>
          <ul>
            {filters?.price.map((filter) => (
              <li key={filter.id} className="flex items-center gap-x-2">
                <input
                  // name={filter.name}
                  type="checkbox"
                  className="checkbox checkbox-sm rounded"
                  onChange={(e) => toggleCheckbox(e, filter.name)}
                  value={filter.name}
                  checked={selected === filter.name}
                />
                <AppText
                  as="p"
                  size="base"
                  weight="normal"
                  className={"font-inter"}
                >
                  {filter.label}
                </AppText>
              </li>
            ))}
          </ul>
        </>
      }
    </div>
  );
};

export default HomeAsideFilterPrice;
