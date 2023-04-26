import { AppText } from "components/shared";
import { filters } from "./data";

// console.log(Object.keys(filters));

Object.keys(filters).map((key) => {
  console.log(key);
  console.log(filters[key as HomeAsideFilterKeys]);

  // map through the array with typescript type
  const filterArr: HomeAsideFilterItem[] = filters[
    key as HomeAsideFilterKeys
  ] as HomeAsideFilterItem[];

  filterArr.map((filter: any) => {
    console.log(filter);
  });
});

const HomeAsideFilters: React.FC = () => {
  return (
    <>
      {Object.keys(filters).map((key) => {
        const filterArr: HomeAsideFilterItem[] = filters[
          key as HomeAsideFilterKeys
        ] as HomeAsideFilterItem[];

        return (
          <div key={key}>
            <AppText as="h4" size="lg" weight="bold" className={"font-inter"}>
              {key}
            </AppText>
            <ul>
              {filterArr.map((filter: any) => (
                <li key={filter} className="flex items-center gap-x-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm rounded"
                  />
                  <AppText
                    as="p"
                    size="base"
                    weight="normal"
                    className={"font-inter"}
                  >
                    {filter.name}
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
