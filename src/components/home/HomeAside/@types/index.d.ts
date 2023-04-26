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

type HomeAsideFilter = Record<
  HomeAsideFilterKeys,
  HomeAsideFilterItem[] | string
>;

type HomeAsideProps = {
  readonly className?: string | string[];
};
