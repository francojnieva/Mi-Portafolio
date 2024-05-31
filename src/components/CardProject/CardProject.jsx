import React from 'react'
import { projects } from '../../utils/projects';


const CardProject = () => {
    return (
        <>
            {
                projects && projects.map((project, index) => {
                    return (
                        <article key={index} className="card card-compact text-[#a0a0a0] bg-[#0a0a0a]">
                            <figure><img src={project.image} alt={project.textAlt} title={project.titleImg} /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-[#fff]">{project.name}</h2>
                                <p className='xl:text-base'>{project.description}</p>
                                <ul className=' flex items-center space-x-2 py-3'>
                                    {
                                        project && project.technologies.map((tech, index) => {
                                            return (
                                                <li key={index}>
                                                    <img className='w-6' src={tech} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="card-actions">
                                    <button className="py-3 px-5 rounded-md text-white font-medium bg-gradient-to-r from-[#00eeffee] to-[#00A2FF] xl:text-base">
                                        <a href={project.repo} target='_blanck'>Repositorio</a>
                                    </button>
                                </div>
                            </div>
                        </article>
                    )
                })
            }

        </>
    )
}

export default CardProject