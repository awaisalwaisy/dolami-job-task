import { PageNextIcon, PagePrevIcon } from "icons";
import { useState } from "react";

const HomePagination: React.FC<HomePaginationProps> = ({
  itemsPerPage,
  totalItems,
  currentPage,
  paginate,
}) => {
  const [prevIconColor, setPrevIconColor] = useState<string>("black");
  const [nextIconColor, setNextIconColor] = useState<string>("black");

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from(Array(totalPages).keys());

  const handlePrev = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="my-20">
      <div className="btn-group">
        <button
          className="btn btn-outline border-none hover:bg-[#441e84]"
          onMouseEnter={() => setPrevIconColor("white")}
          onMouseLeave={() => setPrevIconColor("black")}
          onClick={handlePrev}
        >
          <PagePrevIcon color={prevIconColor} />
        </button>
        {/* <button className="btn btn-outline border-none bg-[#D9D9D9]">1</button> */}
        {/* <button className="btn btn-outline border-none">2</button> */}

        {pages.map((page) => (
          <button
            key={page}
            className="btn btn-outline border-none"
            onClick={paginate.bind(null, page + 1)}
            disabled={page + 1 === currentPage}
          >
            {page + 1}
          </button>
        ))}
        <button
          className="btn btn-outline border-none hover:bg-[#441e84]"
          onMouseEnter={() => setNextIconColor("white")}
          onMouseLeave={() => setNextIconColor("black")}
          onClick={handleNext}
        >
          <PageNextIcon color={nextIconColor} />
        </button>
      </div>
    </div>
  );
};

export default HomePagination;
