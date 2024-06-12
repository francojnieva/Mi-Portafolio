import React from 'react'

const CardTechnology = ({ icon, name }) => {
    return (
        <article className={`relative flex flex-col items-center lg:space-x-4 p-2 border border-[#4b4b4b] rounded-md lg:flex-row hover:border-[#fff] transition duration-300 ease-in-out`}>
            <img src={icon} alt={name} />
            <p className='text-[#c0c0c0] font-medium lg:text-lg'>{name}</p>
        </article>
    )
}

export default CardTechnology