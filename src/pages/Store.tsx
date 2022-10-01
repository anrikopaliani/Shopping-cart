import StoreItem from "../components/StoreItem";
import items from "../data/items.json";

const Store = () => {
  return (
    <div className="w-100 grid-row-3 container row gap-3 mt-5">
      {items.map((item) => {
        return <StoreItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default Store;
