import React from 'react'
import NavbarMobile from '../../components/Navbar/NavbarMobile'
import Footer from '../../components/Footer/Footer'
import NabarDesktop from '../../components/Navbar/NabarDesktop'
import Projects from '../../components/Projects/Projects'
import Technologies from '../../components/Technologies/Technologies'
import { AboutMe } from '../../components/AboutMe/AboutMe'

const Home = () => {
	return (
		<section>
			<NavbarMobile />
			<NabarDesktop />
			<AboutMe />
			<Technologies />
			<Projects />
			<Footer />
		</section>
	)
}

export default Home