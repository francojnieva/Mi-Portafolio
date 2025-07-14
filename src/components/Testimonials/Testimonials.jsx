import Card from "./Card"


const Testimonials = () => {
    return (
        <section id='testimonios' className='px-6 pt-20 lg:pt-0 lg:w-[85%] lg:mx-auto lg:px-0'>
            <h2 className="text-4xl font-bold text-center text-[#a8aaaa] py-3 lg:text-5xl">Testimonios</h2>
            <section className="py-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 lg:py-12">
                <Card
                    name="Pilar Fariña"
                    occupation="Directora de Centro de salud integral | Psicóloga Clínica | Coordinadora de talleres"
                    description="Recomiendo a Franco! Profesional responsable y serio. Me armó la página de mi centro de salud integral con dedicación y valor agregado. Estoy muy conforme con su labor. "
                />
                <Card
                    name="Demián Abbott"
                    occupation="Paid Media Analyst | Digital Marketing Analyst"
                    description="Franco desarrolló dos sitios web dinámicos que le encomendé, los cuales funcionan a la perfección. Ante mis pedidos de actualizaciones del sitio, siempre se muestra dispuesto y resuelve en tiempo y forma. Estoy totalmente conforme con sus servicios, los cuales, sin dudas, seguir utilizando. ¡Lo recomiendo!"
                />
                <Card
                    name="Mariana Locatelli"
                    occupation="Médica | Project Leader"
                    description="Franco desarrolló un proyecto para mi empresa, el producto fue realizado antes del plazo establecido y el resultado fue excelente. No sólo mantuvo una escucha abierta a lo que se requería sino que sus intervenciones se adecuaron perfectamente al sentido del proyecto."
                />
                <Card
                    name="Sandra Garcia Taboada"
                    occupation="Licenciada en Psicología | Especista en sistema de salud y seguridad social"
                    description="Franco Javier Nieva es un excelente desarrollador, muy comprometido y profesional. ALTAMENTE RECOMENDABLE."
                />
                <Card
                    name="Hiram Chavez"
                    occupation="Jr. Backend"
                    description="Trabajé con Franco en un proyecto en conjunto para No Country, él es una persona proactiva quién siempre tiene iniciativa y disposición para afrontar los retos y superarlos exitosamente. Me gustó mucho su forma de trabajar en equipo, siempre dispuesto a apoyar a los demás y a aprender también. Franco es de las personas que son leales al equipo, tiene disposición para sacar adelante sus tareas y constantemente mejora sus habilidades y agrega nuevas. Sin duda trabajaría nuevamente con él."
                />
                <Card
                    name="Andrea Vilanova"
                    occupation="UX/UI Disigner"
                    description="Trabajé en equipo con Franco para el desarrollo de un producto digital. Su compromiso y dedicación fueron claves para la comunicación entre las diferentes partes. En su trabajo como Front-end demostró grandes habilidades, colaborando en todo el proceso. Sin dudas un gran profesional."
                />
                <Card
                    name="Bernardo Royo"
                    occupation="Desarrollador NodeJS | Data Analyst"
                    description="Tuve el placer de trabajar con Franco en varios proyectos donde su talento como programador fue verdaderamente destacado. Franco demostró ser un profesional comprometido, siempre dispuesto a enfrentar nuevos desafíos y encontrar soluciones innovadoras para cualquier problema que surgiera."
                />
                <Card
                    name="Aldana Caminos"
                    occupation="Tester Manual | QA | UX/UI"
                    description="Franco demostró no solo un buen dominio de sus saberes técnicos, sino también una profesionalidad admirable. Su capacidad para adaptarse a las dinámicas cambiantes del proyecto y comunicarse efectivamente con todos los miembros del equipo fue fundamental para nuestro éxito."
                />
            </section>
        </section>
    )
}

export default Testimonials