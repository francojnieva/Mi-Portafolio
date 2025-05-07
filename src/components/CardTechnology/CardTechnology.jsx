const CardTechnology = ({ icon, name }) => {
    return (
        <article className={`flex flex-col items-center lg:space-x-4 p-2 border border-[#4e4e4e69] rounded-md lg:flex-row hover:border-[#cecece] transition duration-300 ease-in-out`}>
            <img className="w-12" src={icon} alt={name} />
            <p className='text-[#c0c0c0] font-medium lg:text-lg'>{name}</p>
        </article>
    )
}

export default CardTechnology