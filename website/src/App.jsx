
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza
      name="Pepperonni"
      description="A classic pizza topped with pepperoni slices and melted cheese."
      image={"/public/pizzas/pepperoni.webp"}
      />
      <Pizza
        name="BBQ Chicken"
        description="A delicious chicken pizza with a tangy BBQ sauce and melted cheese."
        image={"/public/pizzas/bbq_ckn.webp"}
      />
      <Pizza
        name="Veggie Delight"
        description="A colorful pizza loaded with bell peppers, onions, mushrooms, and olives."
        image={"/public/pizzas/veggie_veg.webp"}
      />
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
