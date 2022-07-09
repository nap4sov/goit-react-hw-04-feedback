import { useState } from 'react'
import Section from './Section'
import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'
import Notifitation from './Notification'

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const feedback = { good, neutral, bad }
  const feedbackOptions = Object.keys(feedback)
  const totalFeedback = Object.values(feedback).reduce((total, value) => total + value, 0)
  const positivePercentage = Math.round((good/totalFeedback)*100)

  const handleButtonClick = (event) => {
    const buttonName = event.target.name

    switch (buttonName) {
      case 'good':
        setGood(prev => prev + 1)
        break;
      case 'neutral':
        setNeutral(prev => prev + 1)
        break;
      case 'bad':
        setBad(prev => prev + 1)
        break;
    
      default:
        break;
    }
  }
  

    return (<>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={feedbackOptions} incrementStatisticsData={handleButtonClick} />
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

