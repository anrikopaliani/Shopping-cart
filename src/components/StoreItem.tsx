import { Card, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingContext";
import { currencyFormatter } from "../utilities/formatCurrency";

interface StoreItemProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className="col-xl" style={{ width: "28rem" }}>
      <Card.Img
        variant="top"
        src={imgUrl}
        style={{ objectFit: "cover", height: "15rem" }}
      />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title>{name}</Card.Title>
          <p>{currencyFormatter(price)}</p>
        </div>
        <div>
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} className="w-100">
              + Add To Cart
            </Button>
          ) : (
            <div className="d-flex w-100 flex-column justify-content-center align-items-center">
              <div className="d-flex">
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className="px-2">{quantity} In Cart</span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <div className="pt-2">
                <Button
                  className="bg-danger"
                  onClick={() => removeFromCart(id)}
                >
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
