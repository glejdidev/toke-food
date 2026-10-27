import type { Product } from "../types/product";
import { useEffect } from "react";

type ProductQuickViewProps = {
  product: Product;
  onClose: () => void;
};

const ProductQuickView = ({ product, onClose }: ProductQuickViewProps) => {
useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
      
    }
  };
  document.addEventListener("keydown" , handleKeyDown);
  return () => {
      document.removeEventListener("keydown", handleKeyDown);
  };
}, [onClose]);
  return (
      <div className="fixed flex items-center justify-center p-4 inset-0 z-50 bg-black/50" onClick={onClose}>
        <div className="rounded-xl w-full max-w-3xl p-6 max-h-[90vh] overflow-y-auto bg-white"  onClick={(event) => event.stopPropagation()}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <img src={product.image} alt={product.name} />
            </div>
            <div>
              <button type="button" className="cursor-pointer" onClick={onClose}>
                Mbyll
              </button>
              <h2> {product.name}</h2>
              <p>{product.description}</p>
              <h2>{product.price}</h2>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductQuickView;
