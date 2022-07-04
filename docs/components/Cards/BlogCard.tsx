import { StringifyOptions } from 'querystring';
import React from 'react';
import '../../../dist/css/Cards/BlogCard.css';

type CardProps = {
	img: string,
	title: string,
	description: string,
};

export default function BlogCards({ img, title, description }: CardProps) {
	return (
		<div className="card">
			<div className="card-img"><img src={img} alt={title} />{title}</div>
			<div className="card-info">{description}</div>
		</div>	
	)
}
