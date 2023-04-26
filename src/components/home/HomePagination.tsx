import { PageNextIcon, PagePrevIcon } from "icons";
import { useState } from "react";

const HomePagination: React.FC = () => {
  const [prevIconColor, setPrevIconColor] = useState<string>("black");
  const [nextIconColor, setNextIconColor] = useState<string>("black");

  return (
    <div className="my-20">
      <div className="btn-group">
        <button
          className="btn btn-outline border-none hover:bg-[#441e84]"
          onMouseEnter={() => setPrevIconColor("white")}
          onMouseLeave={() => setPrevIconColor("black")}
        >
          <PagePrevIcon color={prevIconColor} />
        </button>
        <button className="btn btn-outline border-none bg-[#D9D9D9]">1</button>
        <button className="btn btn-outline border-none">2</button>
        <button
          className="btn btn-outline border-none hover:bg-[#441e84]"
          onMouseEnter={() => setNextIconColor("white")}
          onMouseLeave={() => setNextIconColor("black")}
        >
          <PageNextIcon color={nextIconColor} />
        </button>
      </div>
    </div>
  );
};

export default HomePagination;
