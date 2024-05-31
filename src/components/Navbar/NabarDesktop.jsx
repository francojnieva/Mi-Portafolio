import React from 'react'

const NabarDesktop = () => {
    return (
        <nav id='home' className='hidden lg:block py-5 w-[85%] font-medium text-[#a0a0a0] text-lg mx-auto'>
            <section className=' flex items-center justify-end space-x-10'>
                <a href='#home' className='hover:text-[#fff] transition duration-500 ease-out'>Inicio</a>
                <a href='#aboutMe' className='hover:text-[#fff] transition duration-500 ease-out'>Sobre mí</a>
                <a href='#hability' className='hover:text-[#fff] transition duration-500 ease-out'>Habilidades y Conocimientos</a>
                <a href='#projects' className='hover:text-[#fff] transition duration-500 ease-out'>Proyectos</a> 
            </section>
        </nav>
    )
}

export default NabarDesktop