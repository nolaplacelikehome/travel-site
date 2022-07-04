import React from 'react';
import Beach from '../../../assets/Beach.jpg';
import PaddleBoarding from '../../../assets/PaddleBoarding.jpg';
import MountainClimbing from '../../../assets/MountainClimbing.jpg';
import CamelRiding from '../../../assets/CamelRiding.jpg';
import { blogNavItems } from '../Footer/blogNavItems';
import '../../../dist/css/Blog/Blog.css';

export default function Blog() {

	return (
		<div className="blog-container" id='blog'>
			<p className='blog-paragraph'>Our latest blog posts</p>
			<h2 className='blog-header'>From the Resource Center</h2>
			<div className="blogs">
				<div className="blog" id={blogNavItems[0].path}>
					<img src={Beach} alt="The beach" className='blog-img' />
					<p className="img-blog-title">Top 10 Best Things To Do In Bali</p>
					<p className="img-blog-text">All Things Europe, All Things Italy</p>
				</div>
				<div className='blog' id={blogNavItems[1].path}>
					<img src={PaddleBoarding} alt="Paddle Boarding" className='blog-img' />
					<p className="img-blog-title">Paddle Boarding In the Grand Canyon's Soap Creek</p>
					<p className="img-blog-text">Suggested Iteneraries</p>
				</div>
				<div className='blog' id={blogNavItems[2].path}>
					<img src={MountainClimbing} alt="Mountain Climbing" className='blog-img' />
					<p className="img-blog-title">Mountain Climbing</p>
					<p className="img-blog-text">Suggested Iteneraries</p>
				</div>
				<div className='blog' id={blogNavItems[3].path}>
					<img src={CamelRiding} alt="Camel Riding" className='blog-img' />
					<p className="img-blog-title">Camel Back Riding in South Africa</p>
					<p className="img-blog-text">Suggested Iteneraries</p>
				</div>
			</div>
		</div>
	)
}
