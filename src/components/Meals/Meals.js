import MealsSummary from "./MealsSummary";
import AvailableMeans from "./AvailableMeals";
import { Fragment } from "react";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeans />
    </Fragment>
  );
};

export default Meals;
