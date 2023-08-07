import React from 'react';
import Statistics from './Statistics';
import css from './Feedback.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }

    const { good } = this.state;
    const percentage = (good / totalFeedback) * 100;
    return Math.round(percentage);
  };

  render() {
    return (
      <div className={css.feedback}>
        <h2> Please leave feedback</h2>

        <div className={css.feedback__controls}>
          <button type="button" onClick={() => this.handleIncrement('good')}>
            Good
          </button>
          <button type="button" onClick={() => this.handleIncrement('neutral')}>
            Neutral
          </button>
          <button type="button" onClick={() => this.handleIncrement('bad')}>
            Bad
          </button>
        </div>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}

export default Feedback;
