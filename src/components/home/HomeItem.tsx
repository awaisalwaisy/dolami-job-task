import { AppText } from "components/shared";
import ShareIcon from "icons/ShareIcon";

const HomeItem: React.FC = () => {
  return (
    <div id="item" className="flex w-full flex-col items-center gap-y-1">
      <img
        src="https://res.cloudinary.com/dcyrcksal/image/upload/v1682452467/dolami-job-test/VRC_image_C_M_ldtm5y.png"
        alt=""
        className="w-full object-cover rounded"
      />
      {/* <div className="" id="item-image">
            </div> */}
      <AppText
        as="h1"
        className="font-inter"
        size="base"
        color="dark"
        weight="semibold"
      >
        Avatar name “Avatown” -nice original avatar of Avatown
      </AppText>
      {/* <div className="flex justify-between w-full" id="item-feedback">
              <div id="item-rating">rating</div>
              <div id="item-likes">likes</div>
            </div> */}
      <div className="flex w-full items-start flex-col" id="item-info">
        <div id="item-author" className="flex items-center gap-x-2">
          <img
            src="https://res.cloudinary.com/dcyrcksal/image/upload/v1682452467/dolami-job-test/VRC_image_C_M_ldtm5y.png"
            alt=""
            className="h-5 w-5 object-cover rounded-full"
          />
          <AppText
            as="p"
            className={"text-[10px] text-[#6A6A6A]"}
            weight="medium"
          >
            Avatar Joe’s
          </AppText>
        </div>
        <AppText as="p" className={"font-inter"} weight="medium" size="base">
          <sub>$</sub>
          50.00
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
            PC Only
          </AppText>
        </div>
        <div id="item-features" className="flex items-center">
          <AppText as="p" weight="normal" className="text-[10px] font-inter">
            Auto upload service ready, you can use this avatar within 24 hours.
          </AppText>
          <ShareIcon />
        </div>
      </div>
    </div>
  );
};

export default HomeItem;
