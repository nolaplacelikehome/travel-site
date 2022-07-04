import React from 'react';
import QuestionAccordion from './QuestionAccordion';
import { questions } from './questions';
import '../../../dist/css/FrequentQuestions/FrequentQuestions.css'

export default function FrequentQuestions() {
	return (
		<div className="questions-container" id='faq'>
			<h2>Frequently Asked Questions</h2>
			{
				questions.map(({ id, question, answer }) => 
					<QuestionAccordion key={id} question={question} answer={answer} />
				)
			}
		</div>
	)
}
