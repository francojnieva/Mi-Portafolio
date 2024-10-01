

const Card = ({ techTitle, techContent }) => {
    return (
        <article className='space-y-6'>
            <h3 className=' text-2xl font-bold text-[#e8e9e9] xl:text-3xl'>{techTitle}:</h3>
            <div className='grid items-center grid-cols-2 gap-4 md:grid-cols-4'>
                {techContent}
            </div>
        </article>
    )
}

export default Card