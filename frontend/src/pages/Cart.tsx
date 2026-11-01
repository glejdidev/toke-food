import { useCart } from "../hooks/useCart";

const Cart = () => {
  // Custom Hook (React): Lexon të dhënat e shportës nga CartContext.
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  // JavaScript: reduce llogarit totalin e çmimeve sipas sasisë.
  const cartTotal = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);
  return (
    <main>
      <h1>Shporta ime</h1>

      {/* React: Ul sasinë vetëm kur klikohet butoni. */}

      {cartItems.length === 0
        ? "Shporta eshte bosh"
        : cartItems.map((item) => (
            <div key={item.product.id} className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => decreaseQuantity(item.product.id)}
                disabled={item.quantity <= 1}
                className="cursor-pointer"
              >
                -
              </button>

              <div>
                <h1>{item.product.name}</h1>
                <h2>{item.quantity}</h2>
                <p>{item.product.price}</p>
              </div>

              {/* React: Rrit sasinë vetëm kur klikohet butoni. */}
              <button
                type="button"
                onClick={() => increaseQuantity(item.product.id)}
                className="cursor-pointer"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => removeFromCart(item.product.id)}
                className="cursor-pointer"
              >
                Fshi
              </button>
            </div>
             
          ))}
          <p>Totali eshte: {cartTotal} Leke</p>
    </main>
  );
};

export default Cart;
