

const Card = ({ name, description, occupation}) => {
    return (
        <div className="card w-full card-sm bg-[#181818] border border-[#65b3fd17]">
            <div className=" p-8 text-[#a1a1a1]">
                <h2 className="card-title text-[#e9e9e9]">{name}</h2>
                <p className=" text-xs mb-5 xl:text-[.83rem]">{occupation}</p>
                <em className="">"{description}" <span className="text-[#e9e9e9]">- LinkedIn</span></em>
            </div>
        </div>
    )
}

export default Card