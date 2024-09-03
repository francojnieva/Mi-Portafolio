import technologies from '../../utils/technologies'
import CardTechnology from '../CardTechnology/CardTechnology'

const Technologies = () => {
    return (
        <section id='hability' className='px-6 pt-20 lg:pt-0 lg:w-[85%] lg:mx-auto lg:px-0'>
            <h2 className='text-4xl font-bold text-center text-[#a8aaaa] py-3 lg:text-5xl'>Habilidades y Conocimientos</h2>
            <section className='py-8 grid items-center grid-cols-2 gap-8 md:grid-cols-4 lg:py-12'>
            {technologies.map((tech, index) => (
                    <CardTechnology key={index} icon={tech.iconImage} name={tech.name} />
                ))}
            </section>
        </section>
    )
}

export default Technologies