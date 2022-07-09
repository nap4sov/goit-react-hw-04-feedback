import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Statistics = (props) => {
  const {
    good,
    neutral,
    bad,
    total,
    percentage,
  } = props;
  
  const percentageClassname = percentage >= 50 ? styles.aboveAverage : styles.belowAverage
  return (
    <>
      <div className={styles.rating}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <p className={styles.stats}>Total: {total}</p>
      <p className={styles.stats}>Positive feedback: <span className={percentageClassname}>{percentage}%</span></p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired
}

export default Statistics;
