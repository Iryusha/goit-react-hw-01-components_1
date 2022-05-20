import style from "../transactions/transactions.module.css";
import PropTypes from "prop-types";

export default function TransactionHistory({ items }) {
  return (
    <table className={style.transaction}>
      <thead>
        <tr>
          <th className={style.transaction__head}>Type</th>
          <th className={style.transaction__head}>Amount</th>
          <th className={style.transaction__head}>Currency</th>
        </tr>
      </thead>

      <tbody className={style.transaction__body}>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr
            className={index % 2 === 0 ? style.transaction__row : style.accent}
            key={id}
          >
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
