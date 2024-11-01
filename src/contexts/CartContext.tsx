import { createContext, useContext, useReducer } from "react";
import { Recipe, CartItem } from "../types";

interface CartState {
  items: CartItem[];
  total: number;
}

type CartAction =
  | { type: "ADD_ITEM"; payload: Recipe }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_QUANTITY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR_CART" };

const CartContext = createContext<
  | {
      state: CartState;
      dispatch: React.Dispatch<CartAction>;
    }
  | undefined
>(undefined);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.recipe.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.recipe.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          total: state.total + action.payload.price,
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { id: action.payload.id, recipe: action.payload, quantity: 1 },
        ],
        total: state.total + action.payload.price,
      };
    }

    case "REMOVE_ITEM": {
      const item = state.items.find(
        (item) => item.recipe.id === action.payload
      );
      return {
        ...state,
        items: state.items.filter((item) => item.recipe.id !== action.payload),
        total: state.total - (item ? item.recipe.price * item.quantity : 0),
      };
    }

    case "UPDATE_QUANTITY": {
      const item = state.items.find(
        (item) => item.recipe.id === action.payload.id
      );
      if (!item) return state;

      const quantityDiff = action.payload.quantity - item.quantity;

      return {
        ...state,
        items: state.items.map((item) =>
          item.recipe.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
        total: state.total + item.recipe.price * quantityDiff,
      };
    }

    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
      };

    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0,
  });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
