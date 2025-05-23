import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const Welcome = () => {
    return (
        <LampContainer>
			<motion.h1
				initial={{ opacity: 0.5, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.3,
					duration: 0.8,
					ease: "easeInOut",
				}}
				id='sobre-mi'
				className="pt-64 bg-gradient-to-br from-[#b8c4d3] to-[#e1edf3] py-4 bg-clip-text text-center text-5xl font-medium tracking-tight text-transparent md:text-7xl"
			>
				Bienvenido a mi Portafolio
			</motion.h1>
		</LampContainer>
    )
}

export const LampContainer = ({
	children,
	className,
  }) => {
	return (
	  <div
		className={cn(
		  "relative pt-[11.3rem] flex flex-col items-center justify-center overflow-hidden w-full rounded-md z-0 lg:pt-[9rem]",
		  className
		)}
	  >
		<div className="relative flex flex-1 scale-y-100 items-center justify-center isolate z-0 ">
		  <motion.div
			initial={{ opacity: 0.5, width: "15rem" }}
			whileInView={{ opacity: 1, width: "55rem" }}
			transition={{
			  delay: 0.3,
			  duration: 0.8,
			  ease: "easeInOut",
			}}
			style={{
			  backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
			}}
			className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-[#00A2FF] via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
		  >
			<div className="absolute  w-[100%] left-0  h-40 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
			<div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
		  </motion.div>
		  <motion.div
			initial={{ opacity: 0.5, width: "15rem" }}
			whileInView={{ opacity: 1, width: "55rem" }}
			transition={{
			  delay: 0.3,
			  duration: 0.8,
			  ease: "easeInOut",
			}}
			style={{
			  backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
			}}
			className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-[#00A2FF] text-white [--conic-position:from_290deg_at_center_top]"
		  >
			<div className="absolute w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
			<div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
		  </motion.div>
		  <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150  bg-black blur-2xl"></div>
		  <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent  opacity-10 backdrop-blur-md"></div>
		  <div className="absolute inset-auto z-50 h-36 w-[28rem] bg-black  -translate-y-1/2 rounded-full  opacity-50 blur-3xl"></div>
		  <motion.div
			initial={{ width: "8rem" }}
			whileInView={{ width: "20rem" }}
			transition={{
			  delay: 0.3,
			  duration: 0.8,
			  ease: "easeInOut",
			}}
			className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] bg-black rounded-full  blur-3xl"
		  ></motion.div>
		  <motion.div
			initial={{ width: "15rem" }}
			whileInView={{ width: "55rem" }}
			transition={{
			  delay: 0.3,
			  duration: 0.8,
			  ease: "easeInOut",
			}}
			className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-[#00A2FF] "
		  ></motion.div>
   
		  <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
		</div>
   
		<div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
		  {children}
		</div>
	  </div>
	);
  };