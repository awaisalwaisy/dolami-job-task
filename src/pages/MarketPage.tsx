import { AppText } from "components/shared";
import { HomeAside, HomeItem, HomePagination } from "components/home";
import { CSSProperties, useEffect, useState } from "react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { useWindowSize } from "usehooks-ts";
import { itemsData } from "data/items-data";

const styles = {
  aside: {} as CSSProperties,
  main: {} as CSSProperties,
};

const MarketPage: React.FC = () => {
  const [isAside, setAside] = useState(false);
  const { width } = useWindowSize();
  const [data, setData] = useState(itemsData);

  /* 
    "featured",
    "Price: Low to High",
    "Price: High to Low",
    "Customer Review",
    "New",
    "Polygon:Low to High",
    "Polygon:High to Low",
  */

  const sortOptions = [
    {
      id: 0,
      label: "Featured",
      value: "featured",
    },
    {
      id: 1,
      label: "Price: Low to High",
      value: "price-low-to-high",
    },
    {
      id: 2,
      label: "Price: High to Low",
      value: "price-high-to-low",
    },
    {
      id: 3,
      label: "Customer Review",
      value: "customer-review",
    },
    {
      id: 4,
      label: "New",
      value: "new",
    },
    {
      id: 5,
      label: "Polygon: Low to High",
      value: "polygon-low-to-high",
    },
    {
      id: 6,
      label: "Polygon: High to Low",
      value: "polygon-high-to-low",
    },
  ];

  const handleOnSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);

    if (e.target.value === "price-low-to-high") {
      setData([...itemsData.sort((a, b) => a.info.price - b.info.price)]);
    } else if (e.target.value === "price-high-to-low") {
      setData([...itemsData.sort((a, b) => b.info.price - a.info.price)]);
    } else if (e.target.value === "customer-review") {
      setData([
        ...itemsData.sort((a, b) => b.feedback.rating - a.feedback.rating),
      ]);
    } else {
      setData([...itemsData]);
    }

    console.log(data, "data from sort");
  };

  const handlePriceFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    // filter on the bases of priceFilter array
    if (value === "under-230") {
      setData([...itemsData.filter((item) => item.info.price < 230)]);
    } else if (value === "240-to-340") {
      setData([
        ...itemsData.filter(
          (item) => item.info.price >= 240 && item.info.price <= 340
        ),
      ]);
    } else if (value === "350-to-450") {
      setData([
        ...itemsData.filter(
          (item) => item.info.price >= 350 && item.info.price <= 450
        ),
      ]);
    } else if (value === "450-to-550") {
      setData([
        ...itemsData.filter(
          (item) => item.info.price >= 450 && item.info.price <= 550
        ),
      ]);
    } else if (value === "550-to-650") {
      setData([
        ...itemsData.filter(
          (item) => item.info.price >= 550 && item.info.price <= 650
        ),
      ]);
    } else if (value === "650-to-800") {
      setData([
        ...itemsData.filter(
          (item) => item.info.price >= 650 && item.info.price <= 800
        ),
      ]);
    } else if (value === "over-800") {
      setData([...itemsData.filter((item) => item.info.price > 800)]);
    } else {
      setData([...itemsData]);
    }

    // console.log(filteredData);
  };

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
              <HomeAside
                toggleAside={setAside}
                handlePriceFilter={handlePriceFilter}
              />
            </aside>
          </div>
        )}
        <main
          className={`flex flex-col items-center justify-center w-full mx-3`}
          // style={styles.main}
        >
          <div className="flex justify-between w-full mb-2">
            <AppText
              as="h3"
              className={"w-full"}
              align={width > 768 ? "left" : "center"}
            >
              All items
            </AppText>
            <select
              className="select select-bordered w-30 focus:outline-none rounded-sm select-xs"
              onChange={handleOnSort}
            >
              <option disabled defaultValue={"sort-by-featured"}>
                Sort by featured
              </option>
              {sortOptions.map((option) => (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div
            id="items"
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-sm:grid-cols-1 w-full gap-x-2 gap-y-4"
          >
            {data.length > 0 ? (
              data.map((_) => <HomeItem key={_.id} data={_} id={_.id} />)
            ) : (
              <AppText as="h3" className="text-center">
                No items found
              </AppText>
            )}
          </div>

          <HomePagination />
        </main>
      </article>
    </>
  );
};

export default MarketPage;
