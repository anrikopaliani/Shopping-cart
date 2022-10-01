import StoreItems from "../data/items.json";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingContext";
import { currencyFormatter } from "../utilities/formatCurrency";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const { isOpen, closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <div className="ms-auto fs-5 fw-bold">
            Total:{" "}
            {currencyFormatter(
              cartItems.reduce((total, cartItem) => {
                const item = StoreItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
