import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const NavbarMobile = () => {
	return (
		<div className='fixed top-0 w-full p-3 bg-[#000] z-50 lg:hidden'>
			<div className="drawer drawer-end">
				<input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
				<div className=' flex justify-end pr-2 py-2'>
					<label htmlFor="my-drawer-4"><AiOutlineMenu className='text-white text-[1.6rem]'/></label>
				</div>
				<div className={`drawer-side transition-all `}>
					<label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
					<ul className="menu p-5 w-full min-h-full bg-black text-white">
						<div className=' flex justify-end'>
							<AiOutlineClose onClick={() => document.getElementById("my-drawer-4").checked = false} className=' text-[1.7rem]' />
						</div>
						<li className='font-bold text-2xl space-y-5 py-7'>
							<a>Menú</a>
						</li>
						<hr className='w-4 ml-4 border border-white my-3' />
						<li className=' flex flex-col text-lg font-bold space-y-1 py-6 text-[#a0a0a0]'>
							<a onClick={() => document.getElementById("my-drawer-4").checked = false}>Inicio</a>
							<a onClick={() => document.getElementById("my-drawer-4").checked = false}>Sobre mí</a>
							<a onClick={() => document.getElementById("my-drawer-4").checked = false}>Tecnologías</a>
							<a onClick={() => document.getElementById("my-drawer-4").checked = false}>Proyectos</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NavbarMobile