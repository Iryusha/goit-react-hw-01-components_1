import PropTypes from "prop-types";
import style from "../statistics/statistics.module.css";

export default function Statistics({ title, stats }) {
  const renderTitle = title ? (
    <h2 className={style.title}> Upload status</h2>
  ) : (
    ""
  );

  return (
    <section className={style.statistics}>
      {renderTitle}
      <ul className={style.stats_list}>
        {stats.map(({ id, label, percentage }) => (
          <li className={style.item} key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,

  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
