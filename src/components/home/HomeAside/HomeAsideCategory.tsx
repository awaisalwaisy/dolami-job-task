import { AppText } from "components/shared";

const HomeAsideCategory: React.FC<HomeAsideCategoryProps> = ({
  name,
  options,
}) => {
  return (
    <>
      <ul>
        <li className="ml-3 cursor-pointer">
          {options && (
            <ul>
              {options.map((option) => (
                <li key={option.id} className="ml-3">
                  <AppText
                    as="p"
                    size="base"
                    weight="normal"
                    className={"font-inter"}
                  >
                    {option.name}
                  </AppText>
                  {option.options && (
                    <HomeAsideCategory
                      name="Category"
                      options={option.options}
                    />
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </>
  );
};

export default HomeAsideCategory;
