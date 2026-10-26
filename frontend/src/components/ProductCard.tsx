import type { Product } from "../types/product";
import { ShoppingBag } from "lucide-react";

type ProductCardProps = {
  product: Product;
  showPrice?: boolean;
};

function ProductCard({ product, showPrice = true }: ProductCardProps) {
  const isOutOfStock = product.stock <= 0 || !product.isAvailable;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
      {/* Product Cover */}
      <div className="relative aspect-[5/5] overflow-hidden bg-[#F0EDE6]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-120"
        />
        {isOutOfStock && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-medium text-[#505C45]">
            {" "}
            Nuk ka stok{" "}
          </span>
        )}
      </div>

      {/* Product information */}
      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#7C826F]">
          Tokë Food
        </span>
        <h3 className="mb-2 font-['Cormorant_Garamond'] text-2xl font-semibold text-[#30372D]">
          {product.name}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-500">
          {product.description}
        </p>
        <div className="mt-auto">
          {showPrice && (
            <p className="mb-4 text-lg font-semibold text-[#505C45]">
              {product.price.toLocaleString("sq-Al")} Lekë{" "}
            </p>
          )}

          <button
            type="button"
            disabled={isOutOfStock}
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#505C45] px-4 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#354330] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ShoppingBag size={18} />
            {isOutOfStock ? "I padisponueshem" : "Shto ne shporte"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
