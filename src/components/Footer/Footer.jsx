import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="footer px-6 py-10 font-medium bg-[#000] text-[#a0a0a0] flex flex-col lg:px-0 lg:w-[85%] mx-auto">
			<section>
				<h6 className="text-lg text-[#fff] mb-4">Página</h6>
				<section className=" space-y-12">
					<nav className=' flex flex-col space-y-6 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8'>
						<a href='#home' className="hover:text-[#fff] text-base transition-all">Inicio</a>
						<a href='#aboutMe' className="hover:text-[#fff] text-base transition-all">Sobre mí</a>
						<a href='#hability' className="hover:text-[#fff] text-base transition-all">Habilidades y Conocimientos</a>
						<a href='#projects' className="hover:text-[#fff] text-base transition-all">Proyectos</a>
					</nav>
					<nav className=" flex items-baseline space-x-4 text-xl lg:text-2xl">
						<a className='hover:text-[#fff] transition duration-500 ease-out' href='https://www.linkedin.com/in/francojnieva/' target='_blanck'><FaLinkedin /></a>
						<a className='hover:text-[#fff] transition duration-500 ease-out' href='https://github.com/francojnieva' target='_blanck'><FaGithub /></a>
						<a className='hover:text-[#fff] transition duration-500 ease-out' href='https://instagram.com/franconieva.97' target='_blanck'><RiInstagramFill /></a>
						<a className='hover:text-[#fff] transition duration-500 ease-out' href='mailto:franco97nieva@gmail.com' target='_blanck'><MdEmail /></a>
					</nav>
				</section>
			</section>
		</footer>
	)
}

export default Footer