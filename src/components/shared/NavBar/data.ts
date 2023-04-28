import { BellIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavbarAccountBtn } from "../AppText/@types";

export const accountBtnData: NavbarAccountBtn[] = [
  {
    id: 1,
    icon: BellIcon,
  },
  {
    id: 2,
    icon: ShoppingCartIcon,
    indicator: true,
    label: "Cart",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dcyrcksal/image/upload/v1682452467/dolami-job-test/VRC_image_C_M_ldtm5y.png",
  },
];
