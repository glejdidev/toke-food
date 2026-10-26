import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const Products = () => {
  return (
    <main className="bg-[#FAF8F3] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center"> 
      <span className="text-xs font-medium uppercase tracking-[0.3em] text-[#7C826F]"> 
        Produktet tona
      </span>
      <h1 className="mt-3 font-['Cormorant_Garamond'] text-5xl font-semibold text-[#30372D] md:text-6xl">Nga natyra, për ju</h1>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-gray-600 md:text-base">Zbuloni produktet tona artizanale, të përgatitura
            me përbërës të përzgjedhur me kujdes.
</p>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}  />
        ))}

        
      </div>
      </div>
    </main>
  );
};

export default Products;
