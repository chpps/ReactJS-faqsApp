import './index.css'

const FaqItem = ({faqDetails, isAnswerShown, toggleAnswer}) => {
  const {questionText, answerText} = faqDetails

  const toggleButton = () => {
    toggleAnswer()
  }

  return (
    <li className="faq-item">
      <div className="question-line">
        <h2 className="question">{questionText}</h2>
        <button type="button" onClick={toggleButton} className="toggle-btn">
          <img
            src={
              isAnswerShown
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
            alt={isAnswerShown ? 'minus' : 'plus'}
          />
        </button>
      </div>
      {isAnswerShown && (
        <div>
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
