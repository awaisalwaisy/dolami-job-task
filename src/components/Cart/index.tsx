import CartItem from "./CartItem";
import { useCartStore } from "stores/cart-store";

const Cart: React.FC = () => {
  const { cart } = useCartStore();

  let total = 0;
  if (cart) {
    total = cart.reduce((acc, product) => acc + product?.info?.price, 0);
  }

  return (
    <section>
      <h3 className="text-2xl font-bold mb-4">Shopping Cart</h3>
      <ul>
        {cart?.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
    </section>
  );
};

export default Cart;
