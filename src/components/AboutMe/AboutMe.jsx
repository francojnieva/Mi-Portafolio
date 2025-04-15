import FotoPerfil from '../../assets/perfil-byn.jpg'


const AboutMe = () => {
    return (
        <section className='font-medium -mt-40 pb-3 text-lg space-y-6 text-[#808080] px-6 lg:pb-28 lg:mx-auto lg:px-14 lg:-mt-32 lg:text-xl xl:w-[85%]'>
            <section className=" flex flex-col items-center space-y-10 md:flex-row md:justify-content-between md:space-y-0 md:gap-10">
                <img src={FotoPerfil} className='mx-auto w-72 shadow inset-shadow-indigo-500  md:w-80 lg:w-96' alt="Foto de Franco Nieva" title="Franco Javier Nieva" />
                <div className=' space-y-3 2xl:w-[50%]'>
                    <p>Soy<span className=' text-[#55bffd] font-bold text-xl'> Franco Javier Nieva</span>, apasionado por el mundo de la tecnología, especialmente el desarrollo web Front End.</p>
                    <p>Responsable, organizado y empático, con un fuerte compromiso hacia el trabajo en equipo y una actitud proactiva hacia el aprendizaje continuo.</p>
                    <p>Me apasiona la creatividad y la resolución de problemas que implica el desarrollo Front End. Estoy siempre dispuesto a enfrentar nuevos desafíos con entusiasmo y determinación.</p>
                </div>
            </section>
        </section>
    )
}

export default AboutMe