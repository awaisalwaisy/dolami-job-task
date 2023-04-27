interface HomeAsideCategory {
  readonly id: number;
  readonly name: string;
  readonly options?: HomeAsideCategory[];
}

type HomeAsideCategoryProps = {
  readonly className?: string | string[];
} & Omit<HomeAsideCategory, "id">;

interface HomeAsideFilterItem {
  readonly id: number;
  readonly label: string;
  readonly name: string;
}

type HomeAsideFilterKeys =
  | "contents"
  | "price"
  | "polygon amount"
  | "auto upload support";

type HomeAsideFilter = Record<HomeAsideFilterKeys, HomeAsideFilterItem[]>;

type HomeAsideFilterProps = {
  filters: HomeAsideFilter;
};

type HomeAsidePriceFilterProps = {
  handlePriceFilter: (e: ChangeEvent<HTMLInputElement>) => void;
};

type HomeAsideProps = {
  readonly className?: string | string[];
  toggleAside: (val: boolean) => void;
} & Pick<HomeAsidePriceFilterProps, "handlePriceFilter">;
