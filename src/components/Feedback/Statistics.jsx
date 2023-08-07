import React from 'react';
import NotificationMessage from './NotificationMessage';
import css from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.feedback__statistics}>
    <h2> Statistics</h2>
    {total === 0 ? (
      <NotificationMessage message={'There is no feedback'} />
    ) : (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p className="total">Total: {total}</p>
        <p className="percentage">Positive feedback: {positivePercentage}%</p>
      </>
    )}
  </div>
);

export default Statistics;
