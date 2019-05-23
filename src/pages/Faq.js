import React from 'react';
import Qa from '../components/Qa';

const list = [
  {
    question: '질문 1',
    answer: '답변 1'
  },
  {
    question: '질문 2',
    answer: '답변 2'
  },
  {
    question: '질문 3',
    answer: '답변 3'
  }
]

function Faq() {
  return (
    <div>
      {list.map(qa => {
        return <Qa question={qa.question} answer={qa.answer} />
      })}
    </div>
  );
}

export default Faq;