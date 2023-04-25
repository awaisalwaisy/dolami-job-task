import { accountBtnData } from "./data";

const NavMenu: React.FC = () => {
  return (
    <div className="card card-compact rounded w-20 shadow-xl fixed top-20 right-0">
      <div className="card-body">
        {[...accountBtnData].slice(0, 3).map((btn) => (
          <button
            key={btn.id}
            className="btn btn-square bg-[#34353A] border-none md:hidden"
          >
            {btn.icon && <btn.icon className="h-6 w-6 text-white" />}
            {btn.img && (
              <img src={btn.img} alt="" className="h-12 w-12 rounded-md" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavMenu;
