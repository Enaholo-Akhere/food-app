import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/Cart-Contest";
import { useContext } from "react";

const MealItem = ({ key, name, description, price, id }) => {
  const cartCtx = useContext(CartContext);
  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      price,
      amount,
    });
  };
  return (
    <li className={classes.meal} key={id}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={key} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
