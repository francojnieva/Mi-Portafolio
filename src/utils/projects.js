
import IconJS from '../assets/js.svg'
import IconReact from '../assets/react.svg'
import IconNode from '../assets/node.svg'
import IconTailwind from '../assets/tailwind.svg'
import IconBootstrap from '../assets/bootstrap.svg'
import IconHtml from '../assets/html.svg'
import IconTrello from '../assets/trello.svg'
import IconGit from '../assets/git.svg'
import IconScrum from '../assets/scrum.png'
import IconGitHub from '../assets/github.svg'
import IconExpress from '../assets/express.js.svg'
import IconMongoDB from '../assets/mongo-db.png'
import IconFirebase from '../assets/firebase-.svg'
import ImageClonSpotify from '../components/Projects/assets/clon-spotify.png'
import ImageRoyal from '../components/Projects/assets/royal.png'
import ImageMotofly from '../components/Projects/assets/motofly.png'
import ImageNetflix from '../components/Projects/assets/netflix.png'
import ImageSaludIntegral from '../components/Projects/assets/salud-integral-psi.png'


export const projects = [
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
        ],
        repo: 'https://github.com/francojnieva/Clon-Spotify.git',
        demo: 'https://clon-spotify-web.netlify.app'
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
        ],
        repo: 'https://github.com/francojnieva/Royal-ecommerce.git',
        demo: 'https://royal-relojeria.netlify.app/'
    },
    {
        name: 'MotoFly',
        description: 'E-commerce desarrollado por 5 integrantes para el proyecto final en Rolling Code School. Además del stack MERN, usamos Git para controlar versiones de código, Trello para gestionar tareas y SCRUM como marco de trabajo ágil.',
        image: ImageMotofly,
        textAlt: 'imagen de portada de MotoFly',
        titleImg: 'MotoFly',
        technologies: [
            IconReact,
            IconNode,
            IconExpress,
            IconMongoDB,
            IconGit,
            IconBootstrap,
            IconTrello,
            IconScrum
        ],
        repo: 'https://github.com/ErikaCV/proyecto-final.git',
        demo: 'https://motofly.netlify.app/'
    },
    {
        name: 'Salud Integral Psi',
        description: 'Desarrollado para un equipo interdisciplinario en el Área de Salud y Salud Mental en el Sistema público y privado. El equipo profesional asesora y capacita en Salud Mental, Discapacidad Intelectual y Rehabilitación Psicosocial.',
        image: ImageSaludIntegral,
        textAlt: 'imagen de portada del proyecto Salud Integral Psi',
        titleImg: 'Salud Integral Psi',
        technologies: [
            IconReact,
            IconTailwind,
            IconGit,
            IconGitHub,
        ],
        repo: 'https://github.com/francojnieva/Salud-Integral-Psi.git',
        demo: 'https://saludintegral-develop.netlify.app/'
    },
    {
        name: 'Clon Netflix',
        description: 'Proyecto realizado con el propósito de recrear la página principal y de inicio de sesión de Netflix con Tailwind CSS. Además de poder visualizar el sitio en dispositivos grandes, tambíen puede verse en dispositivos móviles y tablets.',
        image: ImageNetflix,
        textAlt: 'imagen de portada del proyecto Clon Netflix',
        titleImg: 'Clon Netflix',
        technologies: [
            IconHtml,
            IconTailwind,
            IconJS,
            IconGit,
            IconGitHub,
        ],
        repo: 'https://github.com/francojnieva/Clon-Netflix.git',
        demo: 'https://clon-netflix-franco-nieva.vercel.app/'
    },
]