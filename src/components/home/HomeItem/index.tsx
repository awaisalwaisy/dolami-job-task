import { AppText } from "components/shared";
import ShareIcon from "icons/ShareIcon";
// import { faker } from "@faker-js/faker";
import { NavLink } from "react-router-dom";
import StarsRating from "react-star-rate";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";
// import styles from "./HomeItem.module.scss";

const HomeItem: React.FC<{ data: ItemData; id: string | number }> = ({
  data,
  id,
}) => {
  // use faker to generate data
  /* const generateData = (length: number) => {
    const data = [];
    for (let i = 0; i < length; i++) {
      data.push({
        id: faker.datatype.uuid(),
        title: `Avatar name “Avatown” -nice original avatar of Avatown ${i}`,
        imgUrl: `https://res.cloudinary.com/dcyrcksal/image/upload/v1682516748/dolami-job-test/items/VRC_image_Q_M_soqutq.png`,
        feedback: {
          rating: faker.datatype.number({ min: 1.3, max: 5, precision: 0.1 }),
          likes: {
            count: faker.datatype.number(10),
            like: faker.datatype.boolean(),
          },
        },
        info: {
          author: {
            name: faker.name.firstName(),
            avatarUrl: faker.image.avatar(),
          },
          price: faker.datatype.number(1000),
        },
        note: {
          tag: "PC Only",
          feature:
            "Auto upload service ready, you can use this avatar within 24 hours.",
          shareId: faker.random.alphaNumeric(5),
        },
      });
    }
    return data;
  }; */

  // console.log(generateData(25));

  const [isLike, setLike] = useState<boolean>(false);
  const toggleLike = () => setLike(!isLike);

  const ratingStyle = {
    style: {
      fontSize: "20px",
    },
    full: {
      star: {
        marginRight: "0",
      },
    },
    half: {
      star: {
        marginRight: "0",
      },
    },
    zero: {
      star: {
        marginRight: "0",
      },
    },
  };

  return (
    <div id="item" className="flex w-full flex-col items-center gap-y-1">
      <NavLink to={`/product/${id}`}>
        <img
          src={data.imgUrl}
          alt={data.title}
          className="w-full object-cover rounded"
        />

        <AppText
          as="h1"
          className="font-inter"
          size="base"
          color="dark"
          weight="semibold"
        >
          {data.title}
        </AppText>
      </NavLink>

      <div className="flex justify-between w-full" id="item-feedback">
        <div id="item-rating" className="flex items-center gap-x-2">
          <StarsRating
            value={data?.feedback?.rating}
            disabled
            style={ratingStyle}
          />
          <AppText as="span" className="text-[#6A6A6A] font-inter" size="sm">
            {data?.feedback?.rating}
          </AppText>
          <AppText as="span" className="text-[#6A6A6A] font-inter" size="sm">
            & likes {data?.feedback?.likes?.count}
          </AppText>
        </div>
        <div id="item-likes">
          <button
            className="btn btn-outline border-none bg-none hover:bg-transparent"
            onClick={toggleLike}
          >
            {isLike ? (
              <HeartIconSolid className={`text-[#441e84] h-5 w-5`} />
            ) : (
              <HeartIcon className={`text-[#6A6A6A] h-5 w-5`} />
            )}
          </button>
        </div>
      </div>
      <div className="flex w-full items-start flex-col" id="item-info">
        <div id="item-author" className="flex items-center gap-x-2">
          <img
            src={data.info?.author?.avatarUrl}
            alt={data.title}
            className="h-5 w-5 object-cover rounded-full"
          />
          <AppText
            as="p"
            className={"text-[10px] text-[#6A6A6A]"}
            weight="medium"
          >
            {data.info?.author?.name}
          </AppText>
        </div>
        <AppText as="p" className={"font-inter"} weight="medium" size="base">
          <sub>$</sub>
          {data.info?.price}
        </AppText>
      </div>
      <div id="item-note" className="flex w-full items-start flex-col">
        <div id="item-tag" className="flex items-center gap-x-2">
          <div className="w-4 h-4 bg-[#3CD4F5] rounded-full" />
          <AppText
            as="span"
            className="text-[10px] font-inter"
            weight="medium"
            color="dark"
          >
            {data.note?.tag}
          </AppText>
        </div>
        <div id="item-features" className="flex items-center">
          <AppText as="p" weight="normal" className="text-[10px] font-inter">
            {data.note.feature}
          </AppText>
          <ShareIcon />
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
