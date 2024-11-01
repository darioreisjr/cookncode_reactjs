import { ShoppingCart } from "lucide-react";
import { useCart } from "../contexts/CartContext";

export default function CartButton() {
  const { state } = useCart();
  const itemCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <button className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-[#e67e22] transition-colors">
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#e67e22] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
}
