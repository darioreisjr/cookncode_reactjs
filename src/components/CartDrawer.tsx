import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch({ type: "REMOVE_ITEM", payload: id });
    } else {
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-gray-900 shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Carrinho de compras
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <X className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {state.items.length === 0 ? (
              <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
                Seu carrinho está vazio
              </p>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div
                    key={item.recipe.id}
                    className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <img
                      src={item.recipe.imageUrl}
                      alt={item.recipe.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {item.recipe.title}
                      </h3>
                      <p className="text-[#e67e22] font-medium">
                        ${item.recipe.price.toFixed(2)}
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.recipe.id, item.quantity - 1)
                          }
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(item.recipe.id, item.quantity + 1)
                          }
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_ITEM",
                              payload: item.recipe.id,
                            })
                          }
                          className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded ml-2"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium text-gray-900 dark:text-white">
                Total
              </span>
              <span className="text-lg font-bold text-[#e67e22]">
                R${state.total.toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => dispatch({ type: "CLEAR_CART" })}
              className="w-full bg-[#e67e22] text-white py-3 rounded-lg hover:bg-[#d35400] transition-colors"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
