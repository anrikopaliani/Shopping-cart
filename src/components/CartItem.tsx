import items from "../data/items.json";
import { currencyFormatter } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingContext";
import { Button, Stack } from "react-bootstrap";

interface CartItemProps {
  id: number;
  quantity: number;
}

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt={item.name}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}
          {"  "}
          {quantity > 1 && <span className="text-muted">x{quantity}</span>}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          <span>{currencyFormatter(item.price)}</span>
        </div>
      </div>
      <div>
        <span>{currencyFormatter(quantity * item.price)}</span>
      </div>
      <Button variant="outline-danger" onClick={() => removeFromCart(item.id)}>
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
