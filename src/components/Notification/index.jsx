import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const Notifitation = ({ message }) => {
    return (
            <p className={styles.message}>{message}</p>
    )
}

Notifitation.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notifitation