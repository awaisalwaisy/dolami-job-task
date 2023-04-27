import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { AppText } from "components/shared";
import { itemsData } from "data/items-data";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useWindowSize } from "usehooks-ts";
import StarsRating from "react-star-rate";

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState<number>(1);

  const handleQuantity = (type: string) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const item = itemsData.find((item) => item.id === id);

  const { width } = useWindowSize();

  return (
    <section className="grid grid-cols-2 max-lg:grid-cols-1 items-center justify-center m-10 gap-x-20">
      <div className="flex justify-center items-center border border-purple-200 rounded-xl h-[500px]">
        <img
          src={item?.imgUrl}
          alt={item?.title}
          className="w-96 h-96 object-cover rounded-xl"
        />
      </div>
      <div className="flex flex-col justify-between rounded-xl h-[500px]">
        <AppText as="h1" className="font-inter" size="3xl" weight="semibold">
          {item?.title}
        </AppText>
        <AppText
          as="p"
          className="font-inter text-[#441e84] leading-10"
          size="base"
          weight="medium"
        >
          <span className="text-[#6A6A6A]">by </span> {item?.info?.author?.name}
        </AppText>
        <div className="bg-[#D9D9D9] w-fit p-3 rounded-lg">
          <sub className="text-[#6A6A6A] text-base font-medium font-poppins">
            $
          </sub>
          <AppText
            as="span"
            size="2xl"
            weight="bold"
            className="font-inter text-[#441e84]"
          >
            {item?.info?.price}
          </AppText>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-x-2">
            <div className="w-4 h-4 bg-[#3CD4F5] rounded-full" />
            <AppText as="p" size="sm" weight="semibold">
              {item?.note.tag}
            </AppText>
          </div>
          <AppText as="p" size="base" weight="normal">
            {item?.note.feature}
          </AppText>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <button
              className="btn btn-outline border-none bg-[#D9D9D9] hover:bg-[#441e84]"
              onClick={handleQuantity.bind(null, "minus")}
            >
              <MinusCircleIcon className="w-5 h-5" />
            </button>
            <input
              type="text"
              readOnly
              className="input input-bordered w-20"
              value={quantity}
            />
            <button
              className="btn btn-outline border-none bg-[#D9D9D9] hover:bg-[#441e84]"
              onClick={handleQuantity.bind(null, "plus")}
            >
              <PlusCircleIcon className="w-5 h-5" />
            </button>
          </div>
          <button className={`btn bg-[#441e84]`}>Add to cart</button>
          <button className={`btn bg-[#441e84]`}>Buy now</button>
        </div>
        <div className="my-5 flex flex-col">
          <span>Total rating {item?.feedback?.rating}</span>
          <StarsRating value={item?.feedback?.rating} disabled />
          <span>Total likes {item?.feedback?.likes?.count}</span>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
