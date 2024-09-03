
const NabarDesktop = () => {
    return (
        <nav id='home' className='hidden lg:block w-[85%] font-medium text-[#a0a0a0] text-lg mx-auto'>
            <section className=' flex items-center justify-end pt-6 space-x-10'>
                <a href='#home' className='hover:text-[#fff] transition duration-500 ease-out'>Inicio</a>
                <a href='#aboutMe' className='hover:text-[#fff] transition duration-500 ease-out'>Sobre mí</a>
                <a href='#hability' className='hover:text-[#fff] transition duration-500 ease-out'>Habilidades y Conocimientos</a>
                <a href='#projects' className='hover:text-[#fff] transition duration-500 ease-out'>Proyectos</a>
                <button className="py-2 px-4 rounded-md text-white font-medium bg-gradient-to-r from-[#00eeffee] to-[#00A2FF] xl:text-base">
					<a href="mailto:franco97nieva@gmail.com" target='_blanck'>Contáctame</a>
				</button> 
            </section>
        </nav>
    )
}

export default NabarDesktop