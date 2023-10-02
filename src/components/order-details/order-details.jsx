import classNames from "classnames"
import PropTypes from "prop-types"
import iconDone from "../../images/done.svg"
import styles from "./order-details.module.css"

const OrderDetails = ({orderNumber}) => {
  return (
    <>
      <div className={styles.orderDetails}>
        <h1 className={classNames("text text_type_digits-large pt-1 pb-8", styles.orderNumber)}>
          {orderNumber}
        </h1>
        <p className="text text_type_main-medium pb-15">идентификатор заказа</p>
        <img className="pb-15" src={iconDone} alt="Заказ принят" />
        <p className="text text_type_main-default pb-2">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default pb-15 text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
};

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired
}

export default OrderDetails;