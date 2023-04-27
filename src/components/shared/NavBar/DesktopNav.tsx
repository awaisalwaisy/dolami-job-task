import { AppText } from "components/shared";
import styles from "./scss/navbar.module.scss";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { NavbarAccountBtn } from "../AppText/@types";
import { useWindowSize } from "usehooks-ts";
import { useEffect, useMemo, useState } from "react";
import NavMenu from "./NavMenu";
import { accountBtnData } from "./data";
import { NavLink } from "react-router-dom";

const DesktopNav: React.FC = () => {
  const { width } = useWindowSize();
  const accountBtn: NavbarAccountBtn[] = useMemo(() => accountBtnData, []);
  const [isMenu, setMenu] = useState(false);

  useEffect(() => {
    if (width < 1200 && accountBtn.length < 4) {
      accountBtn.unshift({
        id: 0,
        icon: MagnifyingGlassIcon,
      });
    } else if (width > 1198 && accountBtn.length > 3) {
      accountBtn.shift();
    }
  }, [accountBtn, width]);
  return (
    <div
      className={`flex justify-between items-center p-3 ${styles["navbar-bg"]}`}
    >
      <div className="flex items-center">
        <img
          src="https://res.cloudinary.com/dcyrcksal/image/upload/v1682446037/dolami-job-test/logo_avatown_manual_1_basi_inverse_qz9ymd.png"
          alt=""
          className="h-14"
        />
        <NavLink to={"/"}>
          <AppText
            as="p"
            weight="bold"
            color="light"
            className={
              "text-[22px] ml-14 underline-offset-[6px] cursor-pointer"
            }
            children={"Go to Marketpage"}
            decor="underline"
          />
        </NavLink>
      </div>
      <div className="flex items-center gap-x-3">
        <input
          type="text"
          placeholder="Search"
          className={`input ${styles["navbar-search"]}`}
        />

        {accountBtn.map((btn) => (
          <button
            key={btn.id}
            className="btn btn-square bg-[#34353A] border-none max-md:hidden"
          >
            {btn.icon && <btn.icon className="h-6 w-6 text-white" />}
            {btn.img && (
              <img src={btn.img} alt="" className="h-12 w-12 rounded-md" />
            )}
          </button>
        ))}
        {accountBtn.slice(-1).map((btn) => (
          <button
            key={btn.id}
            className="btn btn-square bg-[#34353A] border-none md:hidden"
            onClick={() => setMenu(!isMenu)}
          >
            {btn.icon && <btn.icon className="h-6 w-6 text-white" />}
            {btn.img && (
              <img src={btn.img} alt="" className="h-12 w-12 rounded-md" />
            )}
          </button>
        ))}
        {isMenu && <NavMenu />}
      </div>
    </div>
  );
};

export default DesktopNav;
