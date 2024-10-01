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
                                                    <img className='w-6 hover:-translate-y-1 transition duration-200 ease-in-out cursor-pointer' src={tech} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="card-actions flex justify-between items-center">
                                    <button className="py-2 px-4 rounded-md text-white font-medium bg-gradient-to-r from-[#00eeffee] to-[#00A2FF] xl:text-base">
                                        <a href={project.repo} target='_blanck'>Repositorio</a>
                                    </button>
                                    <button className="py-2 px-4 rounded-md text-white font-medium bg-gradient-to-r from-[#00eeffee] to-[#00A2FF] xl:text-base">
                                        <a href={project.demo} target='_blanck'>Ver proyecto</a>
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