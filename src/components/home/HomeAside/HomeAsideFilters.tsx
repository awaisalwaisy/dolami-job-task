import { AppText } from "components/shared";
import { filters } from "./data";
import { capitalize } from "utils";

const HomeAsideFilters: React.FC = () => {
  return (
    <>
      {Object.keys(filters).map((key) => {
        const filterArr: HomeAsideFilterItem[] = filters[
          key as HomeAsideFilterKeys
        ] as HomeAsideFilterItem[];

        return (
          <div key={key} id={key} className="mb-5">
            <AppText as="h4" size="lg" weight="bold" className={"font-inter"}>
              {capitalize(key)}
            </AppText>
            <ul>
              {filterArr.map((filter: HomeAsideFilterItem) => (
                <li key={filter.id} className="flex items-center gap-x-2">
                  <input
                    name={filter.name}
                    type="checkbox"
                    className="checkbox checkbox-sm rounded"
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
          </div>
        );
      })}
      {/* <div>
        <AppText as="h4" size="lg" weight="bold" className={"font-inter"}>
          Contents
        </AppText>
        <ul>
          <li className="flex items-center gap-x-2">
            <input type="checkbox" className="checkbox checkbox-sm rounded" />
            <AppText
              as="p"
              size="base"
              weight="normal"
              className={"font-inter"}
            >
              VRChat(Quest)
            </AppText>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default HomeAsideFilters;
