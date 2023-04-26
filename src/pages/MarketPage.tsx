import { AppText } from "components/shared";
import { HomeAside, HomeItem, HomePagination } from "components/home";
import { CSSProperties, useState } from "react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { useWindowSize } from "usehooks-ts";

const styles = {
  aside: {} as CSSProperties,
  main: {} as CSSProperties,
};

const MarketPage: React.FC = () => {
  const [isAside, setAside] = useState(false);
  const { width } = useWindowSize();

  return (
    <>
      {width < 768 && !isAside && (
        <aside
          className="bg-[#441e84] w-10 h-10 flex items-center justify-center rounded-b-md fixed z-20"
          onClick={() => setAside(!isAside)}
        >
          <Bars2Icon className="h-7 w-7 text-white" />
        </aside>
      )}

      <article className="flex justify-between m-2">
        {(isAside || width > 768) && (
          <div className="w-64">
            <aside className="w-64 bg-white">
              <HomeAside toggleAside={setAside} />
            </aside>
          </div>
        )}
        <main
          className={`flex flex-col items-center justify-center w-full mx-3`}
          // style={styles.main}
        >
          <AppText
            as="h3"
            className={"w-full"}
            align={width > 768 ? "left" : "center"}
          >
            All items
          </AppText>
          <div
            id="items"
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-sm:grid-cols-1 w-full gap-x-2 gap-y-4"
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <HomeItem key={i} />
            ))}
          </div>

          <HomePagination />
        </main>
      </article>
    </>
  );
};

export default MarketPage;
