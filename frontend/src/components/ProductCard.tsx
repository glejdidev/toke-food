import type { Product } from "../types/product";
import { Eye, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

type ProductCardProps = {
  product: Product;
  showPrice?: boolean;
  onQuickView?: (product: Product) => void;
};

function ProductCard({
  product,
  showPrice = true,
  onQuickView,
}: ProductCardProps) {
  const isOutOfStock = product.stock <= 0 || !product.isAvailable;
  // Destructuring (JavaScript): Nxjerr një ose disa properties
  // nga një objekt dhe i ruan në variabla me të njëjtët emra.
  const { addToCart } = useCart();
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Product Cover */}
      <Link to={`/products/${product.slug}`}>
        <div className="relative aspect-5/5 overflow-hidden bg-[#F0EDE6]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-120"
          />
          {isOutOfStock && (
            <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-brand">
              {" "}
              Nuk ka stok{" "}
            </span>
          )}
        </div>
      </Link>
      {/* Product information */}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#7C826F]">
          Tokë Food
        </span>
        <Link to={`/products/${product.slug}`}>
          <h3 className="mb-2 font-heading text-2xl font-semibold text-[#30372D]">
            {product.name}
          </h3>
        </Link>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {product.description}
        </p>
        <div className="mt-auto">
          {showPrice && (
            <p className="mb-4 text-lg font-semibold text-brand">
              {product.price.toLocaleString("sq-Al")} Lekë{" "}
            </p>
          )}

          <button
            type="button"
            disabled={isOutOfStock}
            className="flex w-full items-center cursor-pointer justify-center mb-2 gap-2 rounded-lg bg-brand
             px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50"
             onClick={() => {addToCart(product)}}
          >
            <ShoppingBag size={18} />
            {isOutOfStock ? "I padisponueshem" : "Shto ne shporte"}
          </button>
          <button
            type="button"
            className="flex items-center justify-center w-full cursor-pointer gap-2 rounded-lg border border-brand px-4 py-3 text-brand transition-colors hover:bg-brand hover:text-white"
            onClick={() => onQuickView?.(product)}
          >
            {" "}
            <Eye size={18} />
            Shiko detajet
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
