import classes from "./Product.module.css";
import Card from "../UI/Card";
import FormContext from "../../Store/FormData/form-context";
import { useContext } from "react";

const Product = (props) => {
  const { formcontent } = useContext(FormContext);

  console.log(formcontent);
  return (
    <div className={classes.main}>
      <div className={classes.name}>Shoes Name : {formcontent.shoesName}</div>
      <div className={classes.descreption}>
        Descreption : {formcontent.Descreption}
      </div>
      <div className={classes.price}>Price : {formcontent.Price} </div>
      <div className={classes.size}>
        <button className={classes.small}> S : {formcontent.Small} </button>
        <button className={classes.medium}>M : {formcontent.Medium}</button>
        <button className={classes.large}> L : {formcontent.Large} </button>
      </div>
    </div>
  );
};

export default Product;
