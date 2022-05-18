import React from 'react';
import '../../../dist/css/Buttons/AuthButton';

export default function AuthButton({ text }: {text:string}) {
	return (
		<button className={text}>{text}</button>
	)
}
