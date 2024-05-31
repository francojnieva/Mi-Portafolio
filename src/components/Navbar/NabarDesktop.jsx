import React from 'react'

const NabarDesktop = () => {
    return (
        <nav className='hidden lg:block py-5 w-[85%] font-medium text-[#a0a0a0] text-lg mx-auto'>
            <section className=' flex items-center justify-end space-x-10'>
                <a href='#' className='hover:text-[#fff] transition duration-500 ease-out'>Inicio</a>
                <a href='#' className='hover:text-[#fff] transition duration-500 ease-out'>Sobre mí</a>
                <a href='#' className='hover:text-[#fff] transition duration-500 ease-out'>Tecnologías</a>
                <a href='#' className='hover:text-[#fff] transition duration-500 ease-out'>Proyectos</a> 
            </section>
        </nav>
    )
}

export default NabarDesktop