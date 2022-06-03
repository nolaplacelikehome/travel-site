import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

export default function QuestionAccordion({ question, answer }: {question: string, answer: string}) {
	const [isActive, setIsActive] = useState(false);

	return (
		<div className="accordian">
			<div className="accordian-item" onClick={() => setIsActive(!isActive)}>
				<div className="accordian-title">
					<div className="title-left">
						<FontAwesomeIcon icon={faCircleQuestion} color='#007FFF' />
						<div>{question}</div>
					</div>
					<div className='sign'>{ isActive ? '-' : '+' }</div>
				</div>
				{isActive && <div className="accordian-info">{answer}</div>}
			</div>
		</div>
	)
}
