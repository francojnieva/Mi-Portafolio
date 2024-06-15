import React from 'react'
import technologies from '../../utils/technologies'
import CardTechnology from '../CardTechnology/CardTechnology'

const Technologies = () => {
    return (
        <section id='hability' className='px-6 pt-20 lg:pt-0 lg:w-[85%] lg:mx-auto lg:px-0'>
            <h2 className='text-4xl font-bold text-center text-[#8c8f8f] py-3 lg:text-5xl'>Habilidades y Conocimientos</h2>
            <p className='text-[#a0a0a0] pt-2 text-center xl:text-lg'>En esta sección, encontrarás un resumen de las tecnologías que he aprendido. Estas habilidades me permiten no solo crear soluciones innovadoras, eficientes y de alta calidad, sino también colaborar con equipos multidisciplinarios. Mi capacidad para trabajar en equipo y adaptarme rápidamente a las necesidades de cada proyecto</p>
            <section className='py-8 grid items-center grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12 lg:py-12'>
            {technologies.map((tech, index) => (
                    <CardTechnology key={index} icon={tech.iconImage} name={tech.name} />
                ))}
            </section>
        </section>
    )
}

export default Technologies