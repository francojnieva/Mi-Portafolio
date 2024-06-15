import React from 'react'
import CardProject from '../CardProject/CardProject';

const Projects = () => {
	return (
		<section id='projects' className='px-6 pt-20 lg:pt-0 lg:w-[85%] lg:mx-auto lg:px-0'>
			<h2 className='text-4xl font-bold text-center text-[#8c8f8f] py-3 lg:text-5xl'>Proyectos</h2>
			<section className='py-8 grid items-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:py-12'>
				<CardProject />
			</section>

		</section>
	)
}

export default Projects

