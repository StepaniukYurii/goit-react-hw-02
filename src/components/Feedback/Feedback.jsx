const Feedback = ({ feedback, totalFeedback, positiveFeedbackPercentage }) => (
  <div>
    <p>Good: {feedback.good}</p>
    <p>Neutral: {feedback.neutral}</p>
    <p>Bad: {feedback.bad}</p>
    <p>Total: {totalFeedback}</p>
    <p>Positive: {positiveFeedbackPercentage}%</p>
  </div>
);

export default Feedback;
