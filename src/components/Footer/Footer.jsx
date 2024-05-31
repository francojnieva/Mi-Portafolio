import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="footer px-6 py-10 font-medium bg-[#000] text-[#a0a0a0] flex flex-col lg:px-0 lg:w-[85%] mx-auto">
			<section>
				<h6 className="text-lg text-[#fff] mb-4">Página</h6>
				<nav className=' flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8'>
					<a className="hover:text-[#fff] text-base transition-all">Inicio</a>
					<a className="hover:text-[#fff] text-base transition-all">Sobre mí</a>
					<a className="hover:text-[#fff] text-base transition-all">Tecnologías</a>
					<a className="hover:text-[#fff] text-base transition-all">Proyectos</a>
				</nav>
			</section>
			<section className=" flex flex-col-reverse w-full lg:flex-row justify-between lg:items-center">
				<aside className="text-center pt-8 lg:pt-0">
					<p>Copyright © 2024 - All right reserved</p>
				</aside>
				<nav className=" flex items-baseline space-x-4 text-xl lg:text-2xl">
					<a className='hover:text-[#fff] transition duration-500 ease-out' href='#' target='_blanck'><FaLinkedin /></a>
					<a className='hover:text-[#fff] transition duration-500 ease-out' href='#' target='_blanck'><FaGithub /></a>
					<a className='hover:text-[#fff] transition duration-500 ease-out' href='#' target='_blanck'><RiInstagramFill /></a>
					<a className='hover:text-[#fff] transition duration-500 ease-out' href='#' target='_blanck'><MdEmail /></a>
				</nav>
			</section>
		</footer>
	)
}

export default Footer