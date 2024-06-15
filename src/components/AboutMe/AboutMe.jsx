import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

const AboutMe = () => {
    return (
        <section className='font-medium -mt-40 pb-3 text-lg space-y-6 text-[#808080] px-6 lg:pb-28 lg:w-[85%] lg:mx-auto lg:px-0 lg:-mt-32 lg:text-xl'>
            <h1>Soy<span className=' text-[#00A2FF] font-bold'> Franco Javier Nieva </span>, de la provincia de Tucumán, Argentina. Apasionado por la tecnología, con un enfoque especial en el desarrollo web Frontend.</h1>
            <p>Responsable, organizado y empático, con un fuerte compromiso hacia el trabajo en equipo y una actitud proactiva hacia el aprendizaje continuo.</p>
            <p>Me apasiona la creatividad y la resolución de problemas que implica el desarrollo Frontend. Estoy siempre dispuesto a enfrentar nuevos desafíos con entusiasmo y determinación.</p>
            <h4 className=' text-lg '>Contáctame:</h4>
            <div className='relative py-1 text-[#a0a0a0] text-xl flex justify-start space-x-4 items-center lg:text-2xl'>
                <a href='https://www.linkedin.com/in/francojnieva/' className="group flex justify-center transition-all">
                    <FaLinkedin />
                    <span
                        className="absolute text-[#4ca8f3] opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-sm">LinkedIn
                    </span>
                </a>
                <a href='https://github.com/francojnieva' className="group flex justify-center transition-all">
                    <FaGithub />
                    <span
                        className="absolute text-[#fff] opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-sm">GitHub
                    </span>
                </a>
                <a href='mailto:franco97nieva@gmail.com' className="group flex justify-center transition-all">
                    <MdEmail />
                    <span
                        className="absolute text-[#ec4444] opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-sm">Gmail
                    </span>
                </a>
                <a href='https://instagram.com/franconieva.97' className="group flex justify-center transition-all">
                    <RiInstagramFill />
                    <span
                        className="absolute text-[#c930c1] opacity-0 group-hover:opacity-100 group-hover:-translate-y-7 duration-700 text-sm">Instagram
                    </span>
                </a>
            </div>
        </section>
    )
}

export default AboutMe