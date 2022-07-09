import { Component } from 'react'
import Section from './Section'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Notifitation from './Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleButtonClick = (event) => {
    const buttonName = event.target.name

    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1
    }))
  }
  countTotalFeedback() {
    return Object.values(this.state).reduce((total, value) => total + value, 0)
  }
  countPositiveFeedbackPercentage(total) {
    return Math.round((this.state.good / total) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state
    const buttonOptions = Object.keys(this.state)
    const totalFeedback = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage(totalFeedback)

    return (<>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={buttonOptions} incrementStatisticsData={this.handleButtonClick} />
      </Section>

      <Section title='Statistics'>
        {totalFeedback
          ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            percentage={positivePercentage}>
          </Statistics>
          : <Notifitation message='There is no feedback' />}
      </Section>
    </>
    );
  }
}

export default App

