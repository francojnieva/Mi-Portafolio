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
import IconAstro from '../assets/astro-js.svg'
import IconFigma from '../assets/figma.svg'
import IconJS from '../assets/js.svg'
import ImageEquilibra from '../assets/equilibra-salud.png'
import ImageBodyCenter from '../assets/bodycenter.png'
import ImageInox from '../assets/inox.png'
import ImagePSI from '../assets/saludintegralpsi.png'
import ImageHashtag from '../assets/hashtag.png'
import ImageCentro from '../assets/centroespacioescucha.png'
import ImageKIO from '../assets/kio.png'


export const projects = [
    {
        name: 'KIO arquitectura',
        description:'Desarrollo del sitio web de KIO arquitectura, un estudio de arquitectura e interiorismo. El proyecto incluyó el diseño e implementación de una landing page, optimizada para dispositivos móviles, tablets y de escritorio, con foco en la presentación de proyectos, contacto directo y gestión de identidad visual.',
        image: ImageKIO,
        textAlt: 'imagen de portada de KIO arquitectura',
        titleImg: 'KIO arquitectura',
        technologies: [
            IconAstro,
            IconTailwind,
            IconGit,
            IconGitHub,
        ],
        repo: 'https://github.com/francojnieva/kio-arquitectura.git',
        demo: 'https://kioarquitectura.com.ar/'
    },
    {
        name: 'Centro Espacio Escucha',
        description:'Desarrollado para un equipo de profesionales de la salud que cuentan con un espacio de salud integral orientado al bienestar emocional y corporal. Desarrollé este proyecto cuidando cada detalle con diseño totalmente responsive y optimizado para todos los dispositivos.',
        image: ImageCentro,
        textAlt: 'imagen de portada de Centro Espacio Escucha',
        titleImg: 'Centro Espacio Escucha',
        technologies: [
            IconAstro,
            IconTailwind,
            IconNode,
            IconGit,
            IconGitHub,
        ],
        repo: 'https://github.com/francojnieva/centro-espacio-escucha.git',
        demo: 'https://centroespacioescucha.com.ar/'
    },
    {
        name: 'Hashtag Productora',
        description:'Página web desarrollada una agencia de marketing digital, creación de contenido, branding, merchandicing y producción de eventos. Me encargué del desarrollo cuidando cada detalle para que la web fuera fiel a la estética planteada y sea totalmente adaptable y optimizada para todos los dispositivos.',
        image: ImageHashtag,
        textAlt: 'imagen de portada de Hashtag Productora',
        titleImg: 'Hashtag Productora',
        technologies: [
            IconAstro,
            IconTailwind,
            IconNode,
            IconGit,
            IconGitHub,
        ],
        repo: 'https://github.com/francojnieva/sasha-hashtag-productora.git',
        demo: 'https://hashtag-productora.vercel.app/'
    },
    {
        name: 'Salud Integral Psi',
        description:'Proyecto desarrollado para un equipo interdisciplinario con más de 20 años de experiencia en los sectores público y privado, dedicados a la asesoría y capacitación en el diseño, implementación y gestión de dispositivos de rehabilitación psicosocial.',
        image: ImagePSI,
        textAlt: 'imagen de portada de Salud Integral Psi',
        titleImg: 'Salud Integral Psi',
        technologies: [
            IconReact,
            IconNode,
            IconExpress,
            IconTailwind,
            IconGit,
            IconGitHub,
        ],
        repo: 'https://github.com/francojnieva/saludintegralpsi.git',
        demo: 'https://saludintegralpsi.com.ar'
    },
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
]