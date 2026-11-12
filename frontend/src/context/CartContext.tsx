import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { CartItem } from "../types/cart";
import type { Product } from "../types/product";

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;

  // TypeScript: Funksionet marrin ID-në e produktit dhe nuk kthejnë vlerë.
  increaseQuantity: (productId: Product["id"]) => void;
  decreaseQuantity: (productId: Product["id"]) => void;
  removeFromCart: (productId: Product["id"]) => void;
};

// createContext (React): Krijon një Context për të ndarë të dhëna mes
// komponentëve pa i kaluar manualisht si props në çdo nivel.
export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

type CartProviderProps = {
  children: ReactNode; // Tip i React qe pershkruan permbajtje te rendersuhme si JSX , tekst , numra
};

export const CartProvider = ({ children }: CartProviderProps) => {
  // Lazy Initialization (React): Llogarit gjendjen fillestare
  // duke ekzekutuar funksionin gjatë inicializimit të state.
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // getItem (Web Storage API): Lexon të dhënat e ruajtura në browser.
    const savedCart = localStorage.getItem("toke-food-cart");
    // JSON.parse (JavaScript): Kthen tekstin JSON në të dhëna JavaScript.
    console.log(savedCart);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // useEffect (React): Ekzekuton kod pas renderimit dhe sa herë
  // ndryshon një nga varësitë e dependency array.
  useEffect(() => {
    // JSON.stringify (JavaScript): Kthen array-n cartItems në tekst JSON.
    const cartJSON = JSON.stringify(cartItems);

    // setItem (Web Storage API): Ruan tekstin në localStorage.
    localStorage.setItem("toke-food-cart", cartJSON);
  }, [cartItems]);

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
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // JavaScript + React: Përditëson sasinë e produktit me ID-në përkatëse.
  const increaseQuantity = (productId: Product["id"]) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
  };

  const decreaseQuantity = (productId: Product["id"]) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  };

  const removeFromCart = (productId: Product["id"]) => {
    setCartItems((prevItems) =>
      // JavaScript: filter krijon një array të ri pa produktin që po fshijmë.
      // Perfshihen te gjithe qe plotesojne kushtin ne array te ri pervec item.id != productId;
      prevItems.filter((item) => item.product.id !== productId),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
