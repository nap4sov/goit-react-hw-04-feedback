import PropTypes from 'prop-types';
import styles from './styles.module.scss'

const FeedbackOptions = ({ options, incrementStatisticsData }) => {
  return (
    <div className={styles.feedbackOptions}>
      {options.map(option => {
        return <button
          key={option}
          className={styles[option]}
          name={option}
          type="button"
          onClick={incrementStatisticsData}>
          {option}
      </button>
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  incrementStatisticsData: PropTypes.func.isRequired
}

export default FeedbackOptions;
