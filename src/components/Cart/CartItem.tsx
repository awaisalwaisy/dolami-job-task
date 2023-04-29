import { TrashIcon } from "@heroicons/react/24/solid";
import { useCartStore } from "stores/cart-store";

const CartItem: React.FC<ItemCartProps> = ({ product }) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <li className="flex justify-between items-center gap-4  mb-2 shadow-md p-4">
      <div className="flex items-center">
        <img
          src={product.imgUrl}
          alt={product.title}
          width={100}
          height={100}
          className="h-10 w-10 rounded-full mr-4"
        />
        <div className="flex flex-col">
          <span className="font-bold flex-1">{product.title}</span>
          <span className="text-gray-600 font-bold">
            ${product.info?.price}
          </span>
          {/* <span>Quantity: {quantity}</span> */}
        </div>
      </div>
      <div>
        <button
          title="Remove Item"
          className="text-red-500 hover:text-red-600 ml-4"
          onClick={() => removeFromCart(product)}
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
