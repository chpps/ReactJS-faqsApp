import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isAnswerShown: {}}

  toggleAnswer = id => {
    this.setState(prevState => ({
      isAnswerShown: {
        ...prevState.isAnswerShown,
        [id]: !prevState.isAnswerShown[id],
      },
    }))
  }

  render() {
    const {faqsList} = this.props
    const {isAnswerShown} = this.state

    return (
      <div className="faqs-app">
        <h1 className="heading">FAQs</h1>
        <div className="faqs-list">
          {faqsList.map(faq => (
            <FaqItem
              key={faq.id}
              faqDetails={faq}
              isAnswerShown={isAnswerShown[faq.id] || false}
              toggleAnswer={() => this.toggleAnswer(faq.id)}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Faqs
