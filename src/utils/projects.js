import IconReact from '../assets/react.svg'
import IconNode from '../assets/node.svg'
import IconTailwind from '../assets/tailwind.svg'
import IconGit from '../assets/git.svg'
import IconGitHub from '../assets/github.svg'
import IconExpress from '../assets/express.js.svg'
import IconMongoDB from '../assets/mongo-db.png'
import IconFirebase from '../assets/firebase-.svg'
import IconVercel from '../assets/vercel.png'
import IconTS from '../assets/typescript.svg'
import ImageClonSpotify from '../components/Projects/assets/clon-spotify.png'
import ImageRoyal from '../components/Projects/assets/royal.png'
import ImageCabronn from '../components/Projects/assets/cabron.png'
import IconPostman from '../assets/postman.png'
import IconNetlify from '../assets/netlify.png'
import ImageAIC from '../components/Projects/assets/aic.png'
import ImagePSI from '../components/Projects/assets/saludintegral.png'
import IconAstro from '../assets/astro-js.svg'
import IconFigma from '../assets/figma.svg'
import IconJS from '../assets/js.svg'
import ImageEquilibra from '../assets/equilibra-salud.png'
import ImageBodyCenter from '../assets/bodycenter.png'
import ImageInox from '../assets/inox.png'


export const projects = [
    {
        name: 'Inox-Diseño todo en vidrio',
        description: 'Página web desarrollada para una empresa con más de 20 años de experiencia en el rubro del vidrio, acero y aluminio. Trabajan en equipo para ofrecer soluciones innovadoras, garantizando la más alta calidad y precisión en cada proyecto.',
        image: ImageInox,
        textAlt: 'imagen de portada de Inox-Diseño',
        titleImg: 'Inox-Diseño',
        technologies: [
            IconAstro,
            IconReact,
            IconTailwind,
            IconGit,
            IconGitHub,
            IconVercel,
        ],
        repo: 'https://github.com/francojnieva/InoxDise-o.git',
        demo: 'https://inoxdiseñotodoenvidrio.com.ar/'
    },
    {
        name: 'Body Center Nutrición',
        description: 'Proyecto desarrollado para un centro integral que tiene como objetivo mejorar la calidad de vida de las personas, tanto física como mentalmente. El centro ofrece una variedad de servicios y planes completos para una nutrición saludable.',
        image: ImageBodyCenter,
        textAlt: 'imagen de portada de Body Center Nutrición',
        titleImg: 'Body Center Nutrición',
        technologies: [
            IconAstro,
            IconJS,
            IconTailwind,
            IconGit,
            IconGitHub,
            IconVercel,
        ],
        repo: 'https://github.com/francojnieva/Body-Center-Nutricion.git',
        demo: 'https://bodycenternutricion.com.ar/'
    },
    {
        name: 'Equilibra Salud - Internación Domiciliaria',
        description: 'Proyecto desarrollado para un equipo de profesionales que se dedican a tratar los pilares importantes de la salud: El cuidado, la prevención y la asistencia de personas de todas las edades en su domicilio.',
        image: ImageEquilibra,
        textAlt: 'imagen de portada de Equilibra Salud',
        titleImg: 'Equilibra Salud',
        technologies: [
            IconAstro,
            IconJS,
            IconTailwind,
            IconGitHub,
            IconGit,
            IconVercel,
        ],
        repo: 'https://github.com/francojnieva/Equilibra-Salud.git',
        demo: 'https://equilibra-salud.com.ar/'
    },
    {
        name: 'Cabrón Delivery',
        description: 'Aplicación diseñada para ofrecer una experiencia intuitiva y ágil. Permite a los usuarios registrarse, gestionar perfil y realizar pedidos seleccionando su método de pago preferido. Los administradores tienen control total sobre la gestión de productos y usuarios.',
        image: ImageCabronn,
        textAlt: 'imagen de portada del Cabron delivery',
        titleImg: 'Cabrón Delivery',
        technologies: [
            IconReact,
            IconTS,
            IconNode,
            IconExpress,
            IconMongoDB,
            IconTailwind,
            IconGit,
            IconGitHub,
            IconPostman,
            IconVercel,
        ],
        repo: 'https://github.com/francojnieva/Cabron-delivery-Frontend.git',
        demo: 'https://cabrondelivery.vercel.app/'
    },
    {
        name: 'Clon Spotify Web',
        description: 'Este proyecto es un clon de la versión web de Spotify, desarrollado con React JS y Tailwind CSS. Utiliza la API web proporcionada por Spotify para obtener datos como artistas populares, álbumes populares, canciones y muchos más.',
        image: ImageClonSpotify,
        textAlt: 'imagen de portada del Clon Spotify Web',
        titleImg: 'Clon Spotify Web',
        technologies: [
            IconReact,
            IconTailwind,
            IconGit,
            IconGitHub,
            IconVercel,
        ],
        repo: 'https://github.com/francojnieva/Clon-Spotify.git',
        demo: 'https://clon-spotify-byfranconieva.vercel.app'
    },
    {
        name: 'Royal',
        description:'Proyecto final realizado en el curso de React JS en CoderHouse. Este e-commerce muestra una gran variedad de relojes. Utiliza Firebase como base de datos para almacenar y recuperar información sobre los productos. Proyecto destacado de la comisión.',
        image: ImageRoyal,
        textAlt: 'imagen de portada de royal',
        titleImg: 'Royal',
        technologies: [
            IconReact,
            IconTailwind,
            IconGit,
            IconGitHub,
            IconFirebase,
            IconVercel,
        ],
        repo: 'https://github.com/francojnieva/Royal-ecommerce.git',
        demo: 'https://royal-relojes.vercel.app/'
    },
    {
        name: 'Asociación Iberoamericana de Coaching',
        description:'Esta página web fue desarrollada para la Asociación Iberoamericana de Coaching con el propósito de presentar la misión, visión, valores y las actividades que se llevan a cabo, así también el poder facilitar el contacto con los usuarios.',
        image: ImageAIC,
        textAlt: 'imagen de portada de AIC',
        titleImg: 'Asociación Iberoamericana de Coaching',
        technologies: [
            IconAstro,
            IconTailwind,
            IconFigma,
            IconGit,
            IconGitHub,
            IconNetlify,
        ],
        repo: 'https://github.com/francojnieva/asociacioniberoamericanadecoaching.git',
        demo: 'https://asociacioniberoamericanadecoaching.com.ar'
    },
    {
        name: 'Salud Integral Psi',
        description:'Desarrollado para un equipo interdisciplinario en el área de Salud y Salud Mental, con el objetivo de brindar asesoramiento y capacitación en Salud Mental, Discapacidad Intelectual y Rehabilitación Psicosocial a instituciones, empresas, profesionales y técnicos.',
        image: ImagePSI,
        textAlt: 'imagen de portada de Salud Integral Psi',
        titleImg: 'Salud Integral Psi',
        technologies: [
            IconAstro,
            IconJS,
            IconTailwind,
            IconGit,
            IconGitHub,
            IconNetlify,
        ],
        repo: 'https://github.com/francojnieva/saludintegralpsi.git',
        demo: 'https://saludintegralpsi.com.ar'
    },
]