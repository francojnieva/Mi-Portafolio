import NavbarMobile from '../../components/Navbar/NavbarMobile'
import Footer from '../../components/Footer/Footer'
import NabarDesktop from '../../components/Navbar/NabarDesktop'
import Projects from '../../components/Projects/Projects'
import Technologies from '../../components/Technologies/Technologies'
import { Welcome } from '../../components/Welcome/Welcome'
import AboutMe from '../../components/AboutMe/AboutMe'
import LogoWpp from '../../assets/wppIcon.svg'
import Testimonials from '../../components/Testimonials/Testimonials'

const Home = () => {
	return (
		<section>
			<a href='https://wa.me/5493865629703' target='_blank' className='fixed z-50 bottom-16 right-4 xl:w-16 xl:right-6'>
				<img className="w-12 xl:w-14" src={LogoWpp} alt="Logo Whatsapp" title="Abrir chat de WhatsApp" />
			</a>
			<NavbarMobile />
			<NabarDesktop />
			<Welcome />
			<AboutMe />
			<Technologies />
			<Projects />
			<Testimonials />
			<Footer />
		</section>
	)
}

export default Home