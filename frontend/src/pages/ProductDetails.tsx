import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);
  if (!product) {
    return <h1>Produkti nuk u gjet</h1>;
  }
  const isOutOfStock = product.stock <= 0 || !product.isAvailable;
  return (
    <main className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Product Cover */}
          <div className="aspect-square overflow-hidden rounded-xl">
            <img  src={product.image} alt={product.name}
            className="w-full h-full object-cover"
             />
          </div>
          {/* Product Information */}
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-brand font-heading">{product.name}</h1>
            <p className="text-gray-600 text-base leading-relaxed">{product.description}</p>
            <p className="text-2xl font-semibold text-brand">{product.price} Lekë</p>
            {isOutOfStock && 
            (<p className="text-sm font-medium text-red-600">
              Nuk ka stok</p>
            )}
            <button
            type="button"
            disabled={isOutOfStock}
            className="rounded-lg cursor-pointer bg-brand px-6 py-3 font-medium text-white transition-colors hover:bg-brand-hover disabled:cursor-not-allowed disabled:opacity-50">
              {isOutOfStock ? "Nuk ka stok" : "Shto ne shportë"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
