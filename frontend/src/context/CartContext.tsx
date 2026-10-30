import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
};

// createContext (React): Krijon një Context për të ndarë të dhëna mes
// komponentëve pa i kaluar manualisht si props në çdo nivel.
export const CartContext = createContext<CartContextType | undefined>(undefined);

type CartProviderProps = {
  children: ReactNode; // Tip i React qe pershkruan permbajtje te rendersuhme si JSX , tekst , numra
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      // .find() (JavaScript): Kërkon në array dhe kthen elementin e parë që plotëson kushtin;
      //  Nëse nuk e gjen, kthen undefined.
      const existingItem = prevItems.find(           
        (item) => item.product.id === product.id,
      );
      if (existingItem) {  
        // .map() (JavaScript): Kalon nëpër çdo element të array-t dhe krijon një array të ri, 
        // duke ruajtur ose ndryshuar elementet sipas kushtit, pa ndryshuar array-n origjinal.                        
        return prevItems.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
           return item;
        });

      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
